import { extractEmojiAndText } from "@/util/formatNutritionFacts";
import { useEffect, useState } from "react";

export const useFormatNutritionFacts = (
	nutritionFacts: string | null
): [mealEmoji: string | null, nutritionFactList: string[] | null] => {
	// State for the extracted meal emoji
	const [mealEmoji, setMealEmoji] = useState<string | null>(null);
	// State for the extracted nutrition facts
	const [nutritionFactList, setNutritionFactList] = useState<string[] | null>(null);

	useEffect(() => {
		// If the nutrition facts are not null or empty, extract the meal emoji and nutrition facts
		if (nutritionFacts && nutritionFacts.trim().length > 0) {
			const result = extractEmojiAndText(nutritionFacts);
			if (result) {
				const [emoji, nutritionFactsExtracted] = result;
				setMealEmoji(emoji);
				setNutritionFactList(nutritionFactsExtracted);
			} else {
				// If no meal emoji or nutrition facts were extracted, set the states to null
				setMealEmoji(null);
				setNutritionFactList(null);
			}
		} else {
			// If the nutrition facts are null or empty, set the states to null
			setMealEmoji(null);
			setNutritionFactList(null);
		}
	}, [nutritionFacts]);

	return [mealEmoji, nutritionFactList];
};
