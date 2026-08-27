const PARAGRAPH_PATTERN = /<p\b[^>]*>([\s\S]*?)<\/p>/gi;
const MARKDOWN_SEPARATOR_CELL = /^:?-{3,}:?$/;

function splitPipeRow(value) {
  const trimmed = value.trim().replace(/^\|/, "").replace(/\|$/, "");
  if (!trimmed.includes("|")) return null;

  const cells = trimmed.split("|").map((cell) => cell.trim());
  return cells.length >= 2 && cells.every(Boolean) ? cells : null;
}

function isSeparatorRow(cells) {
  return Boolean(cells?.every((cell) => MARKDOWN_SEPARATOR_CELL.test(cell)));
}

function areAdjacent(source, previous, next) {
  const previousEnd = previous.index + previous[0].length;
  return source.slice(previousEnd, next.index).trim() === "";
}

function renderMarkdownTable(headerCells, bodyRows) {
  const head = headerCells
    .map((cell) => `<th scope="col">${cell}</th>`)
    .join("");
  const body = bodyRows
    .map((cells) => {
      const [rowLabel, ...values] = cells;
      return `<tr><th scope="row">${rowLabel}</th>${values
        .map((cell) => `<td>${cell}</td>`)
        .join("")}</tr>`;
    })
    .join("");

  return `<div class="table-wrapper" role="region" aria-label="본문 데이터 표" tabindex="0"><table class="article-data-table"><caption class="sr-only">본문 데이터 표</caption><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
}

export function convertMarkdownParagraphTables(content) {
  const paragraphs = [...content.matchAll(PARAGRAPH_PATTERN)];
  let cursor = 0;
  let paragraphIndex = 0;
  let output = "";

  while (paragraphIndex < paragraphs.length - 2) {
    const header = paragraphs[paragraphIndex];
    const separator = paragraphs[paragraphIndex + 1];
    const headerCells = splitPipeRow(header[1]);
    const separatorCells = splitPipeRow(separator[1]);

    if (
      !headerCells ||
      !separatorCells ||
      headerCells.length !== separatorCells.length ||
      !isSeparatorRow(separatorCells) ||
      !areAdjacent(content, header, separator)
    ) {
      paragraphIndex += 1;
      continue;
    }

    const bodyRows = [];
    let bodyIndex = paragraphIndex + 2;
    let previous = separator;

    while (bodyIndex < paragraphs.length) {
      const row = paragraphs[bodyIndex];
      const cells = splitPipeRow(row[1]);
      if (
        !cells ||
        cells.length !== headerCells.length ||
        isSeparatorRow(cells) ||
        !areAdjacent(content, previous, row)
      ) {
        break;
      }

      bodyRows.push(cells);
      previous = row;
      bodyIndex += 1;
    }

    if (bodyRows.length === 0) {
      paragraphIndex += 1;
      continue;
    }

    output += content.slice(cursor, header.index);
    output += renderMarkdownTable(headerCells, bodyRows);
    cursor = previous.index + previous[0].length;
    paragraphIndex = bodyIndex;
  }

  return `${output}${content.slice(cursor)}`;
}

function wrapHtmlTables(content) {
  return content.replace(
    /<table\b[\s\S]*?<\/table>/gi,
    (table) =>
      `<div class="table-wrapper" role="region" aria-label="본문 데이터 표" tabindex="0">${table}</div>`,
  );
}

export function normalizeArticleHtml(content) {
  const articleBody = content
    .replace(/^<article\b[^>]*>/i, "")
    .replace(/<\/article>\s*$/i, "");

  return convertMarkdownParagraphTables(wrapHtmlTables(articleBody));
}
