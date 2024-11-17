export const globalConfig = {
	statusUrl: (size: "sm" | "md", darkMode?: boolean) =>
		`https://status.livespace.io/embed-status/9bb04cfe/${darkMode ? "dark" : "light"}-${size}`,
}
