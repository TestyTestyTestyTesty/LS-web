import type { Link } from "@types"
import type { MegaMenuProps } from "./../MegaMenu/MegaMenu.types"
export interface NavBarProps {
	links: Array<{ title: string; megaMenu: MegaMenuProps } | Link>
	buttons: Link[]
}
