import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();

const REQUIRED_SCHEMA_OWNERS = [
  {
    label: "root layout",
    file: path.join("src", "app", "layout.tsx"),
    required: ["OrganizationSchema", "WebSiteSchema"],
  },
  {
    label: "home page",
    file: path.join("src", "app", "page.tsx"),
    required: ["JsonLd", "FAQSection"],
  },
  {
    label: "dynamic blog post template",
    file: path.join("src", "app", "blog", "[slug]", "page.tsx"),
    required: ["BreadcrumbSchema", "EnhancedBlogPostSchema", "FAQSection"],
  },
  {
    label: "dynamic player profile template",
    file: path.join("src", "app", "players", "[slug]", "page.tsx"),
    required: ["BreadcrumbSchema", "ProfilePageSchema", "FAQSchema"],
  },
  {
    label: "tennis rules quiz",
    file: path.join("src", "app", "tennis-rules-quiz", "page.tsx"),
    required: ["QuizSchema", "FAQSection"],
  },
  {
    label: "utility index",
    file: path.join("src", "app", "utility", "layout.tsx"),
    required: ["BreadcrumbSchema"],
  },
];

const SCHEMA_COMPONENTS = [
  path.join("src", "components", "JsonLd.tsx"),
  path.join("src", "components", "seo", "BreadcrumbSchema.tsx"),
  path.join("src", "components", "seo", "EnhancedBlogPostSchema.tsx"),
  path.join("src", "components", "seo", "FAQSection.tsx"),
  path.join("src", "components", "seo", "FAQSchema.tsx"),
  path.join("src", "components", "seo", "OrganizationSchema.tsx"),
  path.join("src", "components", "seo", "ProfilePageSchema.tsx"),
  path.join("src", "components", "seo", "QuizSchema.tsx"),
  path.join("src", "components", "seo", "SoftwareApplicationSchema.tsx"),
  path.join("src", "components", "seo", "WebSiteSchema.tsx"),
];

const findings = [];

function read(file) {
  const fullPath = path.join(ROOT, file);
  if (!fs.existsSync(fullPath)) return "";
  return fs.readFileSync(fullPath, "utf8");
}

function hasImportOrUsage(source, name) {
  return (
    new RegExp(`import\\s+${name}\\b`).test(source) ||
    new RegExp(`<${name}(?:\\s|>|/)`).test(source) ||
    new RegExp(`\\b${name}\\(`).test(source)
  );
}

for (const owner of REQUIRED_SCHEMA_OWNERS) {
  const source = read(owner.file);
  if (!source) {
    findings.push({ owner: owner.label, issue: "schema owner file missing", file: owner.file });
    continue;
  }

  for (const name of owner.required) {
    if (!hasImportOrUsage(source, name)) {
      findings.push({
        owner: owner.label,
        issue: "required schema component missing",
        file: owner.file,
        component: name,
      });
    }
  }
}

for (const file of SCHEMA_COMPONENTS) {
  const source = read(file);
  if (!source) {
    findings.push({ issue: "schema component file missing", file });
    continue;
  }

  if (file.endsWith(`${path.sep}JsonLd.tsx`)) {
    if (!source.includes('type="application/ld+json"')) {
      findings.push({ issue: "JsonLd script type missing", file });
    }
    if (!source.includes("JSON.stringify(data")) {
      findings.push({ issue: "JsonLd serialization missing", file });
    }
    continue;
  }

  const delegatesToSchemaHelper =
    source.includes("generateFAQSchema") || source.includes("generateBreadcrumbSchema");

  if (
    !delegatesToSchemaHelper &&
    (!source.includes("@context") || !source.includes("https://schema.org"))
  ) {
    findings.push({ issue: "schema.org context missing", file });
  }

  if (!source.includes("<JsonLd")) {
    findings.push({ issue: "schema component does not render JsonLd", file });
  }
}

const utilityPageFiles = fs
  .readdirSync(path.join(ROOT, "src", "app", "utility"), { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => path.join("src", "app", "utility", dirent.name, "page.tsx"))
  .filter((file) => fs.existsSync(path.join(ROOT, file)));

const softwareSchemaPages = utilityPageFiles.filter((file) =>
  read(file).includes("SoftwareApplicationSchema"),
);

if (softwareSchemaPages.length === 0) {
  findings.push({
    issue: "no utility page owns SoftwareApplication schema",
    expected: "At least one interactive utility should render SoftwareApplicationSchema.",
  });
}

if (findings.length > 0) {
  console.error(JSON.stringify({ findings }, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify({
    status: "ok",
    schemaOwners: REQUIRED_SCHEMA_OWNERS.length,
    schemaComponents: SCHEMA_COMPONENTS.length,
    utilitySoftwareApplicationPages: softwareSchemaPages.length,
  }),
);
