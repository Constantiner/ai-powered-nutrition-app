import { getNutritionFacts } from "@/actions/getNutritionFacts";
import { FormEventHandler, RefObject, useCallback, useRef, useState, useTransition } from "react";

export const useHandleNutritionFactsForm = (): {
	// The current nutrition facts, or null if they haven't been fetched yet
	nutritionFacts: string | null;
	// The current error message, or null if there is no error
	error: string | null;
	// Whether the form is currently pending (i.e. waiting for a response from the server)
	pending: boolean;
	// A reference to the form element
	formReference: RefObject<HTMLFormElement>;
	// The submit event handler for the form
	handleSubmit: FormEventHandler<HTMLFormElement>;
	// A function to reset the form to its initial state
	resetForm: VoidFunction;
} => {
	// State for the current nutrition facts
	const [nutritionFacts, setNutritionFacts] = useState<string | null>(null);
	// State for the current error message
	const [error, setError] = useState<string | null>(null);
	// State for whether the form is currently pending
	const [pending, startTransition] = useTransition();
	// A ref to the form element
	const form = useRef<HTMLFormElement>(null);

	// The submit event handler for the form
	const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
		// Start a transition to indicate that the form is pending
		startTransition(async () => {
			// Prevent the default form submission behavior
			event.preventDefault();
			// Clear any previous error messages and nutrition facts
			setError(null);
			setNutritionFacts(null);

			try {
				// Get the recipe from the form data
				const formData = new FormData(event.currentTarget);
				const recipe = formData.get("recipe") as string;
				// Fetch the nutrition facts for the recipe
				const nutritionFacts = await getNutritionFacts(recipe);
				// Set the nutrition facts in state
				setNutritionFacts(nutritionFacts);
			} catch (error) {
				// If there was an error, set the error message in state
				if (error instanceof Error) {
					setError(error.message);
				} else {
					setError("Unknown error");
				}
			}
		});
	}, []);

	// A function to reset the form to its initial state
	const resetForm = useCallback(() => {
		if (form.current) {
			form.current.reset();
		}
		setNutritionFacts(null);
	}, []);

	return { nutritionFacts, error, pending, formReference: form, handleSubmit, resetForm };
};
