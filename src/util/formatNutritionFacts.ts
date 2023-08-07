// This function calculates the size of a string in bytes using TextEncoder API
const stringSizeInBytes = (text: string): number => new TextEncoder().encode(text).length;

// This function extracts an emoji and text from a given input line
const extractEmojiAndTextForLine = (inputLine: string): [emoji: string, text: string] => {
	// This regex matches the first emoji in the input line
	const emojiRegex = /^(\p{Emoji})/u;
	const emojiMatch = inputLine.match(emojiRegex);

	let emoji = "";
	let text = inputLine;

	// If an emoji is found, extract it and remove it from the input line
	if (emojiMatch) {
		emoji = emojiMatch[1];
		const emojiInBytes = stringSizeInBytes(emoji);
		const inputBytes = new TextEncoder().encode(inputLine);
		text = new TextDecoder().decode(inputBytes.slice(emojiInBytes)).trim();
	}

	return [emoji, text];
};

// This function extracts an emoji and an array of nutrition facts from a given input string
export const extractEmojiAndText = (
	inputString: string | null
): [emoji: string, nutritionFacts: string[]] | undefined => {
	if (inputString === null) {
		return undefined;
	}

	// This regex matches any newline character
	const regex = /[\n\r]+/gm;
	// Split the input string into an array of lines
	const splitString = inputString.split(regex);

	// Reduce the array of lines into an array of nutrition facts and an emoji
	return splitString.reduce<[string, string[]]>(
		([emoji, textLines], line) => {
			// Extract the emoji and text from the current line
			const [currentEmoji, textLine] = extractEmojiAndTextForLine(line);
			// If an emoji is not set yet, set it to the current emoji
			if (emoji === "" && currentEmoji !== "") {
				emoji = currentEmoji;
			}
			// If the text line is not empty, add it to the array of text lines
			if (textLine.length > 0) {
				textLines.push(textLine);
			}
			return [emoji, textLines];
		},
		["", []]
	);
};
