import type { ComponentType, SVGProps } from "react"

export interface MenuItemProps {
    to: string,
    icon: ComponentType<SVGProps<SVGSVGElement>>
    children: string
}