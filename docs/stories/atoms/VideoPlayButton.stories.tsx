import { VideoPlayButton } from "@components"
import { heroMock } from "@mocks"
import type { Meta, StoryObj } from "@storybook/react"
const meta: Meta<typeof VideoPlayButton> = {
	title: "Atoms/Buttons/VideoPlayButton",
	component: VideoPlayButton,
	tags: ["autodocs"],
}
export default meta
type Story = StoryObj<typeof VideoPlayButton>
export const Default: Story = {
	args: {
		topLineText: heroMock.playButton.topLineText,
		duration: heroMock.playButton.duration,
		linkText: heroMock.playButton.linkText,
		showLogo: heroMock.playButton.showLogo,
		mediaId: heroMock.playButton.mediaId,
	},
}
