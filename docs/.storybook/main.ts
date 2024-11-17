import type { StorybookConfig } from "@storybook/nextjs"
import path, { dirname, join } from "path"
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
	return dirname(require.resolve(join(value, "package.json")))
}

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config: StorybookConfig = {
	stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		getAbsolutePath("@storybook/addon-onboarding"),
		getAbsolutePath("@storybook/addon-links"),
		getAbsolutePath("@storybook/addon-essentials"),
		getAbsolutePath("@chromatic-com/storybook"),
		getAbsolutePath("@storybook/addon-interactions"),
	],
	framework: {
		name: getAbsolutePath("@storybook/nextjs"),
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	staticDirs: ["../../app/public"],
	webpackFinal: async (config) => {
		if (config.resolve) {
			config.resolve.alias = {
				...config.resolve.alias,
				"@svg": path.resolve(__dirname, "../../app/src/svg"),
				"@mocks": path.resolve(__dirname, "../../app/src/mocks"),
				"@styles": path.resolve(__dirname, "../../app/src/styles"),
				"@components": path.resolve(__dirname, "../../app/src/components"),
				"@lib": path.resolve(__dirname, "../../app/src/lib"),
			}
		}

		if (!config.module) {
			config.module = { rules: [] }
		}

		if (!config.module.rules) {
			config.module.rules = []
		}

		return config
	},
}
export default config
