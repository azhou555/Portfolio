const files = import.meta.glob("../content/notes/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };
  const meta = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return { meta, body: match[2].trim() };
}

function excerpt(body, length = 160) {
  const text = body
    .split("\n")
    .find((line) => line.trim().length > 0) || "";
  const plain = text.replace(/[#*_`>[\]]/g, "").trim();
  return plain.length > length ? plain.slice(0, length).trim() + "…" : plain;
}

export const notes = Object.entries(files)
  .map(([path, raw]) => {
    const slug = path.split("/").pop().replace(/\.md$/, "");
    const { meta, body } = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title || slug,
      date: meta.date || "",
      body,
      excerpt: excerpt(body),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));
