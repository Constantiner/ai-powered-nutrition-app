/* eslint-disable unicorn/prefer-module */
module.exports = {
	plugins: ["prettier", "unicorn", "security"],
	extends: [
		"next/core-web-vitals",
		"eslint:recommended",
		"plugin:unicorn/recommended",
		"plugin:security/recommended",
		"plugin:prettier/recommended",
		"prettier"
	],
	rules: {
		semi: ["error", "always"],
		"unicorn/filename-case": ["error", { case: "camelCase" }],
		"no-console": ["error"],
		"unicorn/no-fn-reference-in-iterator": "off",
		"unicorn/no-reduce": "off",
		"unicorn/no-null": "off",
		"unicorn/switch-case-braces": "off",
		"no-restricted-syntax": [
			"error",
			{
				selector: "ExportDefaultDeclaration",
				message: "Prefer named exports"
			}
		],
		"unicorn/no-array-reduce": "off",
		"unicorn/no-array-for-each": "off",
		"unicorn/no-array-callback-reference": "off",
		"unicorn/prefer-node-protocol": "off",
		"unicorn/prefer-object-from-entries": ["off"],
		"unicorn/no-useless-undefined": "off"
	},
	overrides: [
		{
			files: ["**/*.ts?(x)"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				ecmaVersion: 2018,
				sourceType: "module",
				ecmaFeatures: {
					jsx: true
				},

				// typescript-eslint specific options
				warnOnUnsupportedTypeScriptVersion: true
			},
			plugins: ["@typescript-eslint"],
			extends: ["plugin:import/typescript", "plugin:@typescript-eslint/recommended"],
			rules: {
				"@typescript-eslint/explicit-function-return-type": ["error"]
			}
		},
		{
			files: ["src/app/**/*.ts?(x)", "src/app/**/*.js?(x)"],
			rules: {
				"no-restricted-syntax": ["off"]
			}
		},
		{
			files: ["**/*.d.ts"],
			rules: {
				"@typescript-eslint/triple-slash-reference": ["off"],
				"@typescript-eslint/no-namespace": ["off"],
				"unicorn/prevent-abbreviations": ["off"],
				"no-restricted-syntax": ["off"],
				"unicorn/filename-case": ["off"]
			}
		}
	]
};
