import type { SVGProps } from "react";

export interface DevelopmentTableType {
    id: number;
    name: string;
    platforms: FC<SVGProps<SVGSVGElement>>[];
    date: string;
    progress: number;
}