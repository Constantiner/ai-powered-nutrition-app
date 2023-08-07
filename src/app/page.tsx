"use client";

import { NutritionFacts } from "@/components/nutritionFacts/nutritionFacts";
import { NutritionFactsForm } from "@/components/nutritionFacts/nutritionFactsForm";
import { useHandleNutritionFactsForm } from "@/hooks/useHandleNutritionFactsForm";

export default function Page(): JSX.Element {
	const { nutritionFacts, error, pending, formReference, handleSubmit, resetForm } = useHandleNutritionFactsForm();

	return (
		<div className="container mx-auto px-4 flex flex-col md:flex-row md:items-stretch md:justify-center md:h-full">
			<NutritionFactsForm
				ref={formReference}
				error={error}
				handleSubmit={handleSubmit}
				pending={pending}
				resetForm={resetForm}
			/>
			<NutritionFacts nutritionFacts={nutritionFacts} />
		</div>
	);
}
