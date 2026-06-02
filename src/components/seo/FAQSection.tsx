"use client";

import React from "react";
import JsonLd from "@/components/JsonLd";
import { generateFAQSchema, type FAQItem } from "@/lib/seo/metadata-helpers";

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  id?: string;
  includeSchema?: boolean;
  className?: string;
}

export default function FAQSection({
  items,
  title = "자주 묻는 질문",
  id = "faq",
  includeSchema = true,
  className = "",
}: FAQSectionProps) {
  if (!items || items.length === 0) return null;

  return (
    <section
      id={id}
      className={`faq-section ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      {includeSchema && (
        <JsonLd data={generateFAQSchema(items)} id={`faq-schema-${id}`} />
      )}

      <h2 id={`${id}-heading`} className="mb-6 text-2xl font-bold">
        {title}
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <details
            key={index}
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between p-4 font-semibold text-gray-900 transition-colors hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-700">
              <span className="pr-4">{item.question}</span>
              <span
                className="shrink-0 text-2xl text-gray-400 transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <div className="border-t border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {item.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
