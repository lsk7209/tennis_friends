"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { trackEvent, TRACKING_EVENTS } from "@/lib/analytics";

export interface UtilityResultLink {
  href: string;
  title: string;
  description: string;
}

interface UtilityResultLinksProps {
  title?: string;
  description?: string;
  links: UtilityResultLink[];
  source?: string;
  ctaLocation?: string;
}

export default function UtilityResultLinks({
  title = "Recommended tools",
  description,
  links,
  source = "utility-result",
  ctaLocation = "utility_result_links",
}: UtilityResultLinksProps) {
  if (links.length === 0) return null;

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            {title}
          </h2>
          {description && <p className="mt-3 text-gray-600">{description}</p>}
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group"
              onClick={() =>
                trackEvent(TRACKING_EVENTS.CTA_CLICKED, {
                  cta_location: ctaLocation,
                  source,
                  destination_path: link.href,
                })
              }
            >
              <Card className="h-full border-gray-200 bg-white transition-all duration-300 group-hover:border-emerald-400 group-hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-5">
                  <h3 className="text-base font-bold text-gray-900 transition-colors group-hover:text-emerald-700">
                    {link.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                    {link.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-semibold text-emerald-700">
                    Open
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
