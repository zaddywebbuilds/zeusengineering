/**
 * Applied to every AI-generated visualisation on the site.
 *
 * The supplied ZEUS imagery depicts a facility substantially larger than the
 * operating site. Left uncaptioned on an investor-facing page it would read as
 * documentary evidence of scale that does not exist, so it never appears
 * without this.
 */
export function ConceptNotice({
  children = "Concept visualisation",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`tech-label flex items-center gap-2 text-[0.625rem] text-stone-dim ${className}`}
    >
      <span aria-hidden className="text-[0.5rem]">
        ◇
      </span>
      {children}
    </p>
  );
}
