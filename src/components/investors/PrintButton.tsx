"use client";

/**
 * Sends the brief to the browser's print dialogue, where "Save as PDF" is a
 * destination on every current desktop browser.
 *
 * No PDF library. The point of the brief is that it is generated from the same
 * data the site renders, so a printed copy cannot drift from the live figures
 * the way a separately maintained deck does. A client-side PDF generator would
 * reintroduce exactly the second rendering path this is meant to remove.
 */
export function PrintButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={className}
    >
      <span>Print or save as PDF</span>
      <span aria-hidden>↓</span>
    </button>
  );
}
