import { Carousel, CaseStudyCard } from "@components"
import { caseStudiesMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Carousel> = {
	title: "Modules/Carousel",
	component: Carousel,
	tags: ["autodocs"],
	parameters: {
		docs: {
			description: {
				component:
					"Carousel comes with predefined global styles which can be overwritten with carouselProps which are coming from Swiper library",
			},
		},
	},
	argTypes: {
		cards: {
			description: "An array of components to be displayed in the carousel",
		},
		slidesPerView: {
			description:
				"An object specifying the number of slides visible at different breakpoints. Key options are `xxs`, `xs`, `sm`, `md`, `lg`, and `xl`. Look into swiper documentation to better understand this property",
		},
		carouselProps: {
			description:
				"Carousel props is of type SwiperProps from Swiper library where every prop can be overwritten. By default the carousel has some predefined props which can be overwrittenby using this prop",
		},
	},
}

export default meta
type Story = StoryObj<typeof Carousel>
export const Default: Story = {
	args: {
		cards: caseStudiesMock.caseStudies.map((caseStudy) => <CaseStudyCard {...caseStudy} />),
		slidesPerView: {
			xxs: 1.4,
			xs: 1.4,
			sm: 2,
			md: 1.4,
			lg: 1.4,
			xl: 1,
		},
	},
}
