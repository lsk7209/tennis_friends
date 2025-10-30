type Item = { id: string; text: string; depth: 2 | 3 };

interface TOCProps {
  items: Item[];
}

export default function TOC({ items }: TOCProps) {
  if (!items?.length) return null;
  
  return (
    <nav className="toc" aria-label="목차">
      <ol>
        {items.map((it) => (
          <li key={it.id} style={{ marginLeft: it.depth === 3 ? ".5rem" : 0 }}>
            <a href={`#${it.id}`}>{it.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

