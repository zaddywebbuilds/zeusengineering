import { SystemDiagram } from "./SystemDiagram";

/**
 * The schematic at its fully-lit state, for pages that need the diagram as a
 * reference rather than as a scroll sequence. Server-rendered — no client
 * bundle cost on those pages.
 */
export function SystemDiagramStatic({ className }: { className?: string }) {
  return <SystemDiagram stage={3} className={className} />;
}
