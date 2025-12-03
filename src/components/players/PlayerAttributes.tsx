interface SkillAttribute {
    name: string;
    score: number; // 0 to 10
    description?: string;
}

interface PlayerAttributesProps {
    attributes: SkillAttribute[];
}

export default function PlayerAttributes({ attributes }: PlayerAttributesProps) {
    return (
        <div className="my-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 p-1 rounded">
                    📊
                </span>
                플레이 스타일 분석
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {attributes.map((attr) => (
                    <div key={attr.name} className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-gray-700 dark:text-gray-200">{attr.name}</span>
                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{attr.score}/10</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                            <div
                                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${attr.score * 10}%` }}
                            ></div>
                        </div>
                        {attr.description && (
                            <p className="text-xs text-gray-500 dark:text-gray-400 m-0">{attr.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
