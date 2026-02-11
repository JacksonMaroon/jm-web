import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type WebMCPTool = {
  name: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (input: unknown, agent?: unknown) => unknown | Promise<unknown>;
};

type WebMCPNavigator = Navigator & {
  modelContext?: {
    registerTool: (tool: WebMCPTool) => void;
    unregisterTool: (name: string) => void;
  };
};

const ROUTES = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/thoughts/nexo", title: "Thought: Nexo" },
  { path: "/thoughts/ai", title: "Thought: AI" },
] as const;

export default function WebMCPTools() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const modelContext = (navigator as WebMCPNavigator).modelContext;
    if (!modelContext) return;

    const mapToolName = "get-site-map";
    const routeToolName = "navigate-site-route";
    const outlineToolName = "get-current-page-outline";

    modelContext.registerTool({
      name: mapToolName,
      description:
        "List top-level jacksonmaroon.com routes available for navigation.",
      inputSchema: {
        type: "object",
        properties: {},
      },
      execute: () => ({
        currentPath: location.pathname,
        routes: ROUTES,
      }),
    });

    modelContext.registerTool({
      name: routeToolName,
      description:
        "Navigate to a supported jacksonmaroon.com route by pathname.",
      inputSchema: {
        type: "object",
        properties: {
          path: {
            type: "string",
            description:
              "Pathname to navigate to, such as /, /about, /thoughts/nexo, /thoughts/ai.",
          },
        },
        required: ["path"],
      },
      execute: (input: unknown) => {
        const path =
          input && typeof input === "object" && "path" in input
            ? String((input as { path?: unknown }).path ?? "")
            : "";

        const normalized = path.startsWith("/") ? path : `/${path}`;
        const exists = ROUTES.some((route) => route.path === normalized);
        if (!exists) {
          throw new Error(`Unsupported route: ${normalized}`);
        }

        navigate(normalized);
        return { ok: true, path: normalized };
      },
    });

    modelContext.registerTool({
      name: outlineToolName,
      description:
        "Return visible H1/H2/H3 headings from the current page for quick summarization.",
      inputSchema: {
        type: "object",
        properties: {},
      },
      execute: () => {
        const headings = Array.from(
          document.querySelectorAll("h1, h2, h3"),
        ).map((node) => ({
          level: node.tagName.toLowerCase(),
          text: (node.textContent || "").trim(),
        }));

        return {
          path: location.pathname,
          headings: headings.filter((item) => item.text.length > 0),
        };
      },
    });

    return () => {
      try {
        modelContext.unregisterTool(mapToolName);
        modelContext.unregisterTool(routeToolName);
        modelContext.unregisterTool(outlineToolName);
      } catch {
        // Ignore cleanup errors during route transitions.
      }
    };
  }, [location.pathname, navigate]);

  return null;
}
