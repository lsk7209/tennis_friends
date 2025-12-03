import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface RelatedKeywordsProps {
    keywords: { name: string; href?: string }[];
    title?: string;
}

export default function RelatedKeywords({ keywords, title = "관련 검색어" }: RelatedKeywordsProps) {
    return (
        <div className="not-prose mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {keywords.map((keyword, index) => (
                    keyword.href ? (
                        <Link key={index} href={keyword.href}>
                            <Badge variant="secondary" className="hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors cursor-pointer text-sm py-1 px-3 font-normal">
                                # {keyword.name}
                            </Badge>
                        </Link>
                    ) : (
                        <Badge key={index} variant="outline" className="text-gray-600 dark:text-gray-400 text-sm py-1 px-3 font-normal">
                            # {keyword.name}
                        </Badge>
                    )
                ))}
            </div>
        </div>
    );
}
