import React from 'react';

interface TennisCourtDiagramProps {
    children?: React.ReactNode;
    title?: string;
    className?: string;
}

export default function TennisCourtDiagram({ children, title, className = "" }: TennisCourtDiagramProps) {
    return (
        <div className={`my-12 p-6 bg-slate-100 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-inner ${className}`}>
            {title && (
                <h5 className="text-center font-bold text-slate-700 dark:text-slate-300 mb-6 flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
                    {title}
                </h5>
            )}

            <div className="relative aspect-[4/3] max-w-[600px] mx-auto bg-green-600 dark:bg-green-900 rounded-lg overflow-hidden border-4 border-green-700 dark:border-green-950 shadow-lg">
                {/* Court Markings */}
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none" strokeWidth="0.8">
                    {/* Outer Boundary */}
                    <rect x="10" y="5" width="80" height="90" />

                    {/* Singles Sidelines */}
                    <line x1="20" y1="5" x2="20" y2="95" />
                    <line x1="80" y1="5" x2="80" y2="95" />

                    {/* Base Lines (already part of rect) */}

                    {/* Net Line */}
                    <line x1="10" y1="50" x2="90" y2="50" strokeWidth="1.2" strokeDasharray="2 1" />

                    {/* Service Lines */}
                    <line x1="20" y1="25" x2="80" y2="25" />
                    <line x1="20" y1="75" x2="80" y2="75" />

                    {/* Center Service Line */}
                    <line x1="50" y1="25" x2="50" y2="75" />

                    {/* Center Marks */}
                    <line x1="50" y1="5" x2="50" y2="8" />
                    <line x1="50" y1="92" x2="50" y2="95" />

                    {/* User Content (Highlights, Paths, etc.) */}
                    {children}
                </svg>
            </div>
        </div>
    );
}

// Helper components for the diagram
export const CourtPlayer = ({ x, y, label, color = "bg-blue-500" }: { x: number, y: number, label?: string, color?: string }) => (
    <g transform={`translate(${x}, ${y})`}>
        <circle r="3" fill="currentColor" className={color.replace('bg-', 'text-')} />
        {label && (
            <text y="-5" textAnchor="middle" fontSize="4" fontWeight="bold" fill="white" stroke="none">
                {label}
            </text>
        )}
    </g>
);

export const BallPath = ({ x1, y1, x2, y2, color = "text-yellow-400" }: { x1: number, y1: number, x2: number, y2: number, color?: string }) => (
    <g>
        <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="1" strokeDasharray="3 2" className={color} />
        <circle cx={x2} cy={y2} r="1.5" fill="currentColor" className={color} />
    </g>
);
