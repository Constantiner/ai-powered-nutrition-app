"use client";

import { NutritionFacts } from "@/components/nutritionFacts/nutritionFacts";
import { NutritionFactsForm } from "@/components/nutritionFacts/nutritionFactsForm";
import { useHandleNutritionFactsForm } from "@/hooks/useHandleNutritionFactsForm";

export default function NutritionFactsPage(): JSX.Element {
	const { nutritionFacts, error, pending, formReference, handleSubmit, resetForm } = useHandleNutritionFactsForm();

	return (
		<div className="container mx-auto flex flex-col px-4 md:h-full md:flex-row md:items-stretch md:justify-center">
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
