module.exports = [
	{
		files: ["**/*.{js,ts,tsx}"],
		languageOptions: {
			parser: require("@typescript-eslint/parser"),
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				browser: true,
				node: true,
				es2022: true,
			},
		},
		plugins: {
			prettier: require("eslint-plugin-prettier"),
			"@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
			react: require("eslint-plugin-react"),
			"react-refresh": require("eslint-plugin-react-refresh"),
			import: require("eslint-plugin-import"),
		},
		rules: {
			"prettier/prettier": "error",
			"import/extensions": [
				"error",
				{
					json: "always",
					mts: "always",
					svg: "ignorePackages",
					styles: "ignorePackages",
					types: "ignorePackages",
					webp: "ignorePackages",
				},
			],
			"no-else-return": ["error", { allowElseIf: false }],
			indent: "off",
			"jsx-quotes": ["error", "prefer-double"],
			"linebreak-style": ["error", "unix"],
			quotes: ["error", "double"],
			semi: ["error", "never"],
			"padding-line-between-statements": [
				"error",
				{ blankLine: "always", prev: "*", next: "if" },
				{ blankLine: "always", prev: "if", next: "*" },
			],
			"arrow-parens": ["error", "always"],
			"comma-dangle": ["error", "always-multiline"],
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/no-explicit-any": "error",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
			"no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
			"object-curly-spacing": ["error", "always"],
			"react/jsx-handler-names": [
				"error",
				{
					eventHandlerPrefix: "handle",
					eventHandlerPropPrefix: "on",
				},
			],
			"react/jsx-wrap-multilines": [
				"error",
				{
					declaration: "parens-new-line",
					assignment: "parens-new-line",
					return: "parens-new-line",
					arrow: "parens-new-line",
					condition: "parens-new-line",
					logical: "parens-new-line",
					prop: "parens-new-line",
				},
			],
			"react/jsx-closing-bracket-location": ["error", "line-aligned"],
			"@typescript-eslint/member-ordering": "error",
			"no-console": "warn",
			"no-unused-vars": "warn",
		},
	},
]
