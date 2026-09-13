import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, BarChart, YAxis, Bar } from 'recharts';

import TooltipCustom from './TooltipCustom';

import type { SpentChartData } from "../../../types/mocksTypes"

interface SpentChartGraphProps {
    data: SpentChartData[];
    lineGraph: boolean;
}

export default function SpentChartGraph({ data, lineGraph }: SpentChartGraphProps) {
    if (lineGraph) {
        return (
            <ResponsiveContainer width="100%" height={260}>
                <LineChart data={data} margin={{ top: 20, right: 10, left: 50, bottom: 0 }}>
                    <defs>
                        <filter id="shadow" x="-10%" y="-20%" width="120%" height="180%">
                            <feDropShadow
                                dx="0"
                                dy="13"
                                stdDeviation="10.5"
                                floodColor="#4318FF"
                                floodOpacity="0.25"
                            />
                        </filter>
                    </defs>

                    <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#a3aed0', fontSize: 12, fontWeight: 500 }}
                        dy={10}
                        interval={0}
                    />

                    <Tooltip content={<TooltipCustom />} cursor={false} offset={-1} />

                    <Line
                        type="monotone"
                        dataKey="currentSpent"
                        stroke="#4318ff"
                        strokeWidth={4}
                        dot={false}
                        filter="url(#shadow)"
                        strokeLinecap='round'
                        activeDot={({ cx, cy }) => (
                            <ellipse
                                cx={cx}
                                cy={cy}
                                rx={6}
                                ry={7}
                                fill="#ffffff"
                                stroke='#4318FF'
                                strokeWidth={2}
                            />
                        )}
                    />

                    <Line
                        type="monotone"
                        dataKey="prevSpent"
                        stroke="#6AD2FF"
                        strokeWidth={4}
                        dot={false}
                        activeDot={false}
                        strokeLinecap='round'
                    />
                </LineChart>
            </ResponsiveContainer>
        )
    } else {
        return (
            <ResponsiveContainer width="100%" height={260}>
                <BarChart
                    margin={{ top: 30, right: 10, left: 70, bottom: 0 }}
                    data={data}

                >
                    <XAxis
                        dataKey="month"
                        tick={{ fill: '#a3aed0', fontSize: 12, fontWeight: 500 }}
                    />
                    <YAxis
                        width="auto"
                        tick={{ fill: '#a3aed0', fontSize: 12, fontWeight: 500 }}
                        tickCount={6}
                    />
                    <Tooltip content={<TooltipCustom />} cursor={false} offset={-1} />
                    <Bar
                        dataKey="currentSpent"
                        radius={[10, 10, 0, 0]}
                        barSize={10}
                        fill="#4318ff"
                    />
                    <Bar
                        dataKey="prevSpent"
                        radius={[10, 10, 0, 0]}
                        barSize={10}
                        fill="#6AD2FF"
                    />
                </BarChart>
            </ResponsiveContainer>
        )
    }
}
