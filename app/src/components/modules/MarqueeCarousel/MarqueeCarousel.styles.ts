import { Box, keyframes, styled } from "@mui/material"

const marqueeMove = keyframes`
to {
	transform: translateX(calc(-100cqw - 100%))
}
`
export const MarqueeCarouselOverflowWrapper = styled(Box, {
	name: "MarqueeCarouselOverflowWrapper",
})({
	overflow: "hidden",
})
export const MarqueeCarouselWrapper = styled(Box, {
	name: "MarqueeCarouselWrapper",
	shouldForwardProp: (prop) =>
		prop !== "itemsAmount" &&
		prop !== "speed" &&
		prop !== "direction" &&
		prop !== "itemWidth" &&
		prop !== "itemGap",
})<{
	itemsAmount: number
	speed: number
	direction: "normal" | "reverse"
	itemWidth: number
	itemGap: number
}>(({ itemsAmount, speed, direction, itemWidth, itemGap }) => ({
	maxWidth: "100%",
	overflow: "hidden",
	"--direction": direction,
	"--speed": `${speed}s`,
	"--items-amount": `${itemsAmount}`,
	"--single-slide-speed": "calc(var(--speed) / var(--items-amount))",
	"--item-width": `${itemWidth}px`,
	"--item-gap": `${itemGap}px`,
	"--item-width-plus-gap": "calc(var(--item-width) + var(--item-gap))",
	"--track-width": "calc(var(--item-width-plus-gap) * calc(var(--items-amount) - 1))",
}))

export const MarqueeCarouselTrack = styled(Box, {
	name: "MarqueeCarouselTrack",
})({
	containerType: "inline-size",
	display: "grid",
	gridTemplateColumns: "var(--track-width) [track] 0px [resting]",
	width: "100%",
})

export const MarqueeCarouselItem = styled(Box, {
	name: "MarqueeCarouselItem",
	shouldForwardProp: (prop) => prop !== "itemPosition",
})<{ itemPosition: number }>(({ itemPosition }) => ({
	gridArea: "resting",
	"--item-position": itemPosition,
	animation: `${marqueeMove} var(--speed) linear infinite  var(--direction, forwards)`,
	animationDelay: "calc(var(--single-slide-speed) * var(--item-position) * -1)",
	width: "var(--item-width)",
	display: "flex",
	justifyContent: " center",
	alignItems: "center",
}))
