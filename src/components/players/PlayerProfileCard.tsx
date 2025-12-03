import { Trophy, MapPin, Ruler, Activity, Calendar, Crown } from 'lucide-react';

interface PlayerProfileProps {
    name: string;
    country: string;
    age: number;
    height: string;
    plays: string;
    turnedPro: number;
    grandSlams: number;
    ranking: number;
}

export default function PlayerProfileCard({
    name,
    country,
    age,
    height,
    plays,
    turnedPro,
    grandSlams,
    ranking,
}: PlayerProfileProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white m-0">{name}</h2>
                        {ranking === 1 && (
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-0.5 rounded flex items-center gap-1">
                                <Crown className="w-3 h-3" /> World No.1
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin className="w-4 h-4" />
                        {country}
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-lg">
                    <div className="text-center">
                        <div className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">Grand Slams</div>
                        <div className="text-2xl font-bold text-blue-700 dark:text-blue-300 flex items-center justify-center gap-1">
                            <Trophy className="w-5 h-5" />
                            {grandSlams}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Age
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white">{age}</div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center gap-1">
                        <Ruler className="w-3 h-3" /> Height
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white">{height}</div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center gap-1">
                        <Activity className="w-3 h-3" /> Plays
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white">{plays}</div>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1 flex items-center gap-1">
                        <Crown className="w-3 h-3" /> Pro Since
                    </div>
                    <div className="font-semibold text-gray-900 dark:text-white">{turnedPro}</div>
                </div>
            </div>
        </div>
    );
}
