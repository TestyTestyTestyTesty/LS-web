"use client"

import { ContainerStyles } from "./Container.styles"

interface ContainerInterface {
	children?: React.ReactNode
}
export const Container = ({ children }: ContainerInterface) => {
	return <ContainerStyles>{children}</ContainerStyles>
}
