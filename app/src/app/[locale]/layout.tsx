import { useLocaleRedirect } from "@lib"
import { CssBaseline } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { nunitoSans, Theme, trueno } from "@styles"
import "@styles/globals.css"
import type { Locale } from "@types"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Livespace",
	description: "Livespace website",
}

export default function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode
	params: { locale: Locale }
}>) {
	useLocaleRedirect(locale)

	return (
		<html lang={locale} className={`${nunitoSans} ${trueno}`}>
			<ThemeProvider theme={Theme}>
				<CssBaseline />
				<body>{children}</body>
			</ThemeProvider>
		</html>
	)
}
