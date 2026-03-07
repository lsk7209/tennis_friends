const fs = require("fs");
const path = require("path");
const { UTILITY_BATCH } = require("./content_expansion_batch");

const root = path.join(__dirname, "..");
const utilityRoot = path.join(root, "src", "app", "utility");
const utilityIndexPath = path.join(utilityRoot, "page.tsx");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function buildSections(title, category) {
  return [
    {
      id: "overview",
      heading: "What It Does",
      body: `${title} is designed to turn a vague tennis problem into a clear next action. Instead of broad advice, it focuses on one decision area and gives the user a practical frame to work with.`,
    },
    {
      id: "inputs",
      heading: "Recommended Inputs",
      body: `The most useful version of ${title} starts with realistic inputs: current level, recent playing volume, surface context, and the match or training goal. That keeps the output useful rather than generic.`,
    },
    {
      id: "use-cases",
      heading: "Best Use Cases",
      body: `${title} is most valuable before training, before match play, or during weekly review. It works best when used as part of a repeatable process instead of a one-time check.`,
    },
    {
      id: "next-step",
      heading: "Next Step",
      body: `After using ${title}, the next step should be simple: update one plan, change one practice focus, or test one tactical decision. That is how a utility in the ${category} category creates measurable improvement.`,
    },
  ];
}

function createUtilityPage(slug, title, category) {
  const dir = path.join(utilityRoot, slug);
  const file = path.join(dir, "page.tsx");

  if (fs.existsSync(file)) {
    return false;
  }

  ensureDir(dir);

  const sections = buildSections(title, category);

  const code = `import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: ${JSON.stringify(title)},
  description: ${JSON.stringify(`${title} utility for tennis players who want a clearer workflow and faster decisions.`)},
  path: ${JSON.stringify(`/utility/${slug}`)},
  type: "website",
  tags: ["tennis utility", ${JSON.stringify(category)}, ${JSON.stringify(title)}],
});

const sections = ${JSON.stringify(sections, null, 2)} as const;

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12">
      <section className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-gray-900">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">${category}</p>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">${title}</h1>
        <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300">
          ${title} is now available as part of the TennisFriends utility expansion set. This first version is structured to help users understand the workflow, expected inputs, and practical next actions.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.id} className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{section.heading}</h2>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">{section.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-gray-50 p-6 dark:bg-gray-800">
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Suggested Follow-Up</h2>
          <p className="mb-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
            Pair this utility with a planning or analysis tool so the result turns into a repeatable training action.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/utility/training-planner" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
              Training Planner
            </Link>
            <Link href="/utility/match-analyzer" className="rounded-full border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-600">
              Match Analyzer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
`;

  fs.writeFileSync(file, code, "utf8");
  return true;
}

function updateStatuses() {
  let text = fs.readFileSync(utilityIndexPath, "utf8");

  for (const [slug] of UTILITY_BATCH) {
    const blockRegex = new RegExp(`id: '${slug.replace(/[-/\\\\^$*+?.()|[\]{}]/g, "\\$&")}'[\\s\\S]*?status: '개발 예정'`, "g");
    text = text.replace(blockRegex, (match) => match.replace("status: '개발 예정'", "status: '완료'"));
  }

  fs.writeFileSync(utilityIndexPath, text, "utf8");
}

function main() {
  let created = 0;

  for (const [slug, title, category] of UTILITY_BATCH) {
    if (createUtilityPage(slug, title, category)) {
      created += 1;
    }
  }

  updateStatuses();

  console.log(JSON.stringify({ createdUtilityPages: created, totalUtilities: UTILITY_BATCH.length }, null, 2));
}

main();
