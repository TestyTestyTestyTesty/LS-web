import checkmark from "@svg/checkmark.svg?url"
export const heroMock = {
	subheading: "Livespace CRM",
	heading: "Your sales team guide to winning deals",
	subtitle: "Enhance your sales process, control team actions, and predict outcomes.",
	buttons: [
		{ title: "book a demo", href: "/placeholder-link" },
		{ title: "Try for free", href: "/placeholder-link" },
	],
	playButton: {
		topLineText: "What is",
		duration: "2:13",
		linkText: "Watch the video",
		showLogo: true,
		mediaId: "59t968wz12",
	},
	labelIcons: [
		{
			title: "14 days for free",
			iconUrl: checkmark,
		},
		{
			title: "No credit card required",
			iconUrl: checkmark,
		},
		{
			title: "Human support",
			iconUrl: checkmark,
		},
	],
	backgroundImage: {
		url: "/hero.png",
		alt: "placeholder-alt",
	},
}
