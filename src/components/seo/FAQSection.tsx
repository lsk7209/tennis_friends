'use client';

import React from 'react';
import JsonLd from '@/components/JsonLd';
import { generateFAQSchema, type FAQItem } from '@/lib/seo/metadata-helpers';

interface FAQSectionProps {
  /**
   * FAQ items array
   */
  items: FAQItem[];
  
  /**
   * Section title (default: "자주 묻는 질문")
   */
  title?: string;
  
  /**
   * Optional ID for the section (for anchor links)
   */
  id?: string;
  
  /**
   * Whether to include JSON-LD schema (default: true)
   */
  includeSchema?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * AI-Optimized FAQ Section Component
 * 
 * Features:
 * - Uses <details> and <summary> tags for AI bot crawling
 * - Includes FAQPage JSON-LD schema
 * - Semantic HTML structure
 * - Accessible markup
 * 
 * Optimized for:
 * - Google Featured Snippets
 * - Naver Knowledge Graph
 * - AI search engines (ChatGPT, Perplexity, etc.)
 */
export default function FAQSection({
  items,
  title = '자주 묻는 질문',
  id = 'faq',
  includeSchema = true,
  className = '',
}: FAQSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section 
      id={id}
      className={`faq-section ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      {includeSchema && (
        <JsonLd 
          data={generateFAQSchema(items)} 
          id={`faq-schema-${id}`}
        />
      )}
      
      <h2 id={`${id}-heading`} className="text-2xl font-bold mb-6">
        {title}
      </h2>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <details
            key={index}
            className="group rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden transition-all hover:shadow-md"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-semibold text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <span className="pr-4">{item.question}</span>
              <span 
                className="text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-200 flex-shrink-0"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

