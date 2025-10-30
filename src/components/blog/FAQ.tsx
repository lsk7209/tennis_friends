type QA = { q: string; a: string };

interface FAQProps {
  items: QA[];
  jsonLdId?: string;
}

export function FAQ({ items, jsonLdId }: FAQProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map((it) => ({
      "@type": "Question",
      "name": it.q,
      "acceptedAnswer": { "@type": "Answer", "text": it.a }
    }))
  };

  return (
    <section className="faq" aria-labelledby="faq-heading">
      <h2 id="faq-heading">자주 묻는 질문</h2>
      {items.map((it, i) => (
        <details key={i}>
          <summary>
            {it.q}
            <span aria-hidden="true" style={{ marginLeft: "0.5rem" }}>+</span>
          </summary>
          <div className="answer">
            <p>{it.a}</p>
          </div>
        </details>
      ))}
      <script
        type="application/ld+json"
        id={jsonLdId || "faq-jsonld"}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}

