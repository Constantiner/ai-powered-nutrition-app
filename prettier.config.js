/* eslint-disable unicorn/prefer-module */
module.exports = {
	printWidth: 120,
	useTabs: true,
	tabWidth: 4,
	trailingComma: "none",
	arrowParens: "avoid",
	overrides: [
		{
			files: ".eslintrc",
			options: { parser: "json" }
		},
		{
			files: ".huskyrc",
			options: { parser: "json" }
		},
		{
			files: ".lintstagedrc",
			options: { parser: "json" }
		},
		{
			files: ".stylelintrc",
			options: { parser: "json" }
		},
		{
			files: ".babelrc",
			options: { parser: "json" }
		}
	],
	plugins: [
		"prettier-plugin-tailwindcss" // MUST come last
	]
};
