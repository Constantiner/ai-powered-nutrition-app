"use server";

import { Configuration, OpenAIApi } from "openai";
import promptJson from "./prompt.json";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export const getNutritionFacts = async (recipe: string): Promise<string> => {
	const completion = await openai.createChatCompletion({
		max_tokens: 200,
		temperature: 0.9,
		n: 1,
		model: "gpt-3.5-turbo",
		messages: [{ role: "user", content: `${promptJson.recipePrompt} ${recipe}` }]
	});

	const response = completion.data.choices[0].message?.content;
	if (!response) {
		throw new Error("No response from OpenAI");
	}
	return response;
};
