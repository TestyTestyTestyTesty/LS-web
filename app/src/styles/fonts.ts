import { Nunito_Sans } from "next/font/google"
import localFont from "next/font/local"

export const nunitoSans = Nunito_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	display: "swap",
})

export const trueno = localFont({
	src: [
		{
			path: "./TruenoExBd.otf",
			weight: "800",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--font-trueno",
})
