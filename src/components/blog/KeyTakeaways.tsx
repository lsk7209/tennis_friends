import { CheckCircle2 } from 'lucide-react';

interface KeyTakeawaysProps {
    items: string[];
}

export default function KeyTakeaways({ items }: KeyTakeawaysProps) {
    return (
        <div className="not-prose my-6 p-5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
                Key Takeaways
            </h3>
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-gray-700 dark:text-gray-300 text-[15px] leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
