"use server";

import { OpenAI } from "openai";
import promptJson from "./prompt.json";

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY
});

export const getNutritionFacts = async (recipe: string): Promise<string> => {
	const completion = await openai.chat.completions.create({
		max_tokens: 200,
		temperature: 0.9,
		n: 1,
		model: "gpt-3.5-turbo",
		messages: [{ role: "user", content: `${promptJson.recipePrompt} ${recipe}` }]
	});

	const response = completion.choices[0].message?.content;
	if (!response) {
		throw new Error("No response from OpenAI");
	}
	return response;
};
