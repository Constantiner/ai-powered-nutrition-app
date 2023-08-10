import { useFormatNutritionFacts } from "@/hooks/useFormatNutritionFacts";
import { FunctionComponent } from "react";

interface NutritionFactsProperties {
	nutritionFacts: string | null;
}

export const NutritionFacts: FunctionComponent<NutritionFactsProperties> = ({ nutritionFacts }) => {
	const [mealEmoji, nutritionFactList] = useFormatNutritionFacts(nutritionFacts);

	return (
		<aside
			className={`flex w-full flex-col pl-4 md:max-w-md ${
				nutritionFacts ? "mb-10 border-t-2" : ""
			} pt-4 md:my-auto md:shrink-0 md:grow md:border-none md:pt-0`}
		>
			{nutritionFactList && nutritionFactList.length > 0 && (
				<>
					<h2 className="mb-4 text-2xl font-bold md:py-8">
						{mealEmoji && (
							<span role="img" aria-label="nutrition facts emoji">
								{mealEmoji}
							</span>
						)}{" "}
						Nutrition Facts
					</h2>
					<ul className="ml-2 list-['🍅']">
						{nutritionFactList?.map((line, index) => (
							<li key={index} className="mb-2 pl-1">
								{line}
							</li>
						))}
					</ul>
				</>
			)}
		</aside>
	);
};
