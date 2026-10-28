import { copyFile, readFile, writeFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

// Render the same component used in the browser so crawlers and visitors
// without JavaScript receive the current homepage, rather than a stale copy.
const vite = await createServer({
  appType: "custom",
  logLevel: "error",
  mode: "production",
  server: { middlewareMode: true },
});

let markup;
try {
  const { default: Index } = await vite.ssrLoadModule("/src/pages/Index.tsx");
  markup = renderToString(createElement(Index));
} finally {
  await vite.close();
}

const output = new URL("../dist/index.html", import.meta.url);
const html = await readFile(output, "utf8");
const placeholder = '<div id="root"></div>';
if (!html.includes(placeholder)) {
  throw new Error("Could not find the homepage root in dist/index.html");
}
await writeFile(output, html.replace(placeholder, () => `<div id="root">${markup}</div>`));

// Keep the negotiated Markdown representation in sync with the AI summary.
await copyFile(new URL("../public/llms.txt", import.meta.url), new URL("../dist/agent-profile.md", import.meta.url));
