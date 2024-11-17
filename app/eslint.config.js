import baseConfig from "../../eslint"

export default [
	...baseConfig,
	{
		extends: ["next/core-web-vitals", "next/typescript"],
		parserOptions: {
			project: "./tsconfig.json",
		},
	},
]
