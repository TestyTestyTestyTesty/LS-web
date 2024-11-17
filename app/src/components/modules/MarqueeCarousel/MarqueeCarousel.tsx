import { useId } from "react"

import Image from "next/image"
import {
	MarqueeCarouselItem,
	MarqueeCarouselOverflowWrapper,
	MarqueeCarouselTrack,
	MarqueeCarouselWrapper,
} from "./MarqueeCarousel.styles"
import type { MarqueeCarouselProps } from "./MarqueeCarousel.types"

export const MarqueeCarousel = ({
	direction,
	icons,
	speed = 30,
	itemGap = 30,
	itemWidth = 83,
	itemHeight = 55,
}: MarqueeCarouselProps) => {
	return (
		<MarqueeCarouselOverflowWrapper>
			<MarqueeCarouselWrapper
				itemsAmount={icons.length}
				speed={speed}
				direction={direction}
				itemWidth={itemWidth}
				itemGap={itemGap}
			>
				<MarqueeCarouselTrack>
					{icons.map((item, index) => (
						<MarqueeCarouselItem itemPosition={index + 1} key={useId()}>
							<Image
								quality={100}
								src={item.url}
								alt={item.alt}
								width={itemWidth}
								height={itemHeight}
							/>
						</MarqueeCarouselItem>
					))}
				</MarqueeCarouselTrack>
			</MarqueeCarouselWrapper>
		</MarqueeCarouselOverflowWrapper>
	)
}
