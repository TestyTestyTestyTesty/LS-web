import { Container, ContentHeaderWrapper } from "@components"
import type { Meta, StoryObj } from "@storybook/react"
const meta: Meta<typeof ContentHeaderWrapper> = {
	title: "Modules/ContentHeaderWrapper",
	component: ContentHeaderWrapper,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof ContentHeaderWrapper>
export const Default: Story = {
	args: {
		sideLineColor: "red",
		children: (
			<>
				<h2>This is the content inside ContentHeaderWrapper</h2>
				<h4>asdasd</h4>
			</>
		),
	},
	decorators: [
		(Story) => (
			<div style={{ background: "lightgrey" }}>
				<Container>
					<div
						style={{
							padding: "6rem 0 2.8rem",
							display: "flex",
							flexDirection: "column",
							gap: "15rem",
						}}
					>
						<Story />
					</div>
				</Container>
			</div>
		),
	],
}
