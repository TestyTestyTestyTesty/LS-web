import { ThemeProvider } from "@mui/material/styles"
import type { Preview } from "@storybook/react"
import React from "react"
import theme from "../../app/src/styles/theme"

export const decorators = [
	(Story: any) => (
		<ThemeProvider theme={theme}>
			<Story />
		</ThemeProvider>
	),
]

const preview: Preview = {
	parameters: {
		layout: "centered",
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
}

export default preview
