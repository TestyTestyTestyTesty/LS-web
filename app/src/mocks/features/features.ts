import type { FeaturesMock } from "./features.types"

export const featuresMock: FeaturesMock = {
	heading: "explore key livespace crm features",
	subheading: "Everything you need from a CRM.",
	button: { type: "contained", label: "discover all features", link: "/features" },
	features: [
		{
			id: "1",
			image: { url: "/product-image-1-EN.webp", alt: "sales process image" },
			heading: { url: "", label: "Sales process" },
			description:
				"Customize Livespace to reflect your process to increase win rate and shorten the sales cycle. ",
		},
		{
			id: "2",
			image: { url: "/product-image-2-EN.webp", alt: "Emails & phone calls image" },
			heading: { url: "", label: "Emails & phone calls" },
			description:
				"Bring your inboxes and phones into one place to keep track of all the sales communications. ",
		},
		{
			id: "3",
			image: { url: "/product-image-3-EN.webp", alt: "Sales automations image" },
			heading: { url: "", label: "Sales automations" },
			description:
				"Automate repetitive work like lead assignments, sales tasks, and email communication. ",
		},
		{
			id: "4",
			image: { url: "/product-image-4-EN.webp", alt: "Sales task management image" },
			heading: { url: "", label: "Sales task management" },
			description:
				"Enable your team to efficiently track, prioritize, and complete tasks to close deals faster. ",
		},
		{
			id: "5",
			image: { url: "/product-image-5-EN.webp", alt: "Team’s communication image" },
			heading: { url: "", label: "Team’s communication" },
			description:
				"Centralize your team's interactions with built-in chats, emails, and shareable notes.  ",
		},
		{
			id: "6",
			image: { url: "/product-image-6-EN.webp", alt: "Sales reports image" },
			heading: { url: "", label: "Sales reports" },
			description:
				"Analyze your sales process, track deals, assess your performance, and optimize it using data.",
		},
	],
}
