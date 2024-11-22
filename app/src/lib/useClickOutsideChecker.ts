import { useState, useEffect, useRef } from "react"

export const useClickOutside = <T extends HTMLElement>(onClickOutside?: () => void) => {
	const [isClickedOutside, setIsClickedOutside] = useState(false)
	const ref = useRef<T>(null)

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
				setIsClickedOutside(true)
				onClickOutside?.()
			} else {
				setIsClickedOutside(false)
			}
		}

		document.addEventListener("mousedown", handleClick)
		return () => {
			document.removeEventListener("mousedown", handleClick)
		}
	}, [onClickOutside])

	return { ref, isClickedOutside }
}
