import type { VideoPlayButtonProps } from "@components/atoms/Buttons/VideoPlayButton/VideoPlayButton.types"
import type { Link } from "@types"

export interface HeroProps {
	subheading: string
	heading: string
	subtitle: string
	buttons: Link[]
	labelIcons: {
		title: string
		iconUrl: string
	}[]
	playButton: VideoPlayButtonProps
	backgroundImage: {
		url: string
		alt: string
	}
}
