// Top-right section marker — e.g. "01 / HERO" in a dashed-border tag.
export function SectionMarker({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex justify-end">
      <span className="dashed-rule mono-label inline-flex items-center gap-2 rounded-sm px-2.5 py-1 text-ink-faint">
        <span>{number}</span>
        <span className="text-rule">/</span>
        <span>{label}</span>
      </span>
    </div>
  );
}
