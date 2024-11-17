import { Container } from "@components"
import type { Meta, StoryObj } from "@storybook/react"
const meta: Meta<typeof Container> = {
	title: "Atoms/Container",
	component: Container,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof Container>
export const Default: Story = {}
