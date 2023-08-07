import { useFormatNutritionFacts } from "@/hooks/useFormatNutritionFacts";
import { FunctionComponent } from "react";

interface NutritionFactsProperties {
	nutritionFacts: string | null;
}

export const NutritionFacts: FunctionComponent<NutritionFactsProperties> = ({ nutritionFacts }) => {
	const [mealEmoji, nutritionFactList] = useFormatNutritionFacts(nutritionFacts);

	return (
		<aside
			className={`w-full md:max-w-md pl-4 flex flex-col ${
				nutritionFacts ? "border-t-2 mb-10" : ""
			} md:border-none pt-4 md:pt-0 md:shrink-0 md:grow md:my-auto`}
		>
			{nutritionFactList && nutritionFactList.length > 0 && (
				<>
					<h2 className="text-2xl font-bold mb-4 md:py-8">
						{mealEmoji && (
							<span role="img" aria-label="nutrition facts emoji">
								{mealEmoji}
							</span>
						)}{" "}
						Nutrition Facts
					</h2>
					<ul className="list-['🍅'] ml-2">
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
