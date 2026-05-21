const metrics = [
  { label: "On-call response", value: "< 2 hrs", sub: "business hours" },
  { label: "Typical engagement", value: "4–12 wks", sub: "fixed scope, fixed price" },
  { label: "Stack coverage", value: "30+ tools", sub: "ts · py · sql · k8s" },
  { label: "Last incident", value: "47 days", sub: "across active deployments" },
];

export function Commitments() {
  return (
    <section
      aria-label="Service level commitments"
      className="border-b border-rule bg-paper-deep/40"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 divide-x divide-rule px-0 md:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="px-7 py-7">
            <span className="mono-label text-ink-faint">{m.label}</span>
            <div className="mt-2.5 font-display text-[28px] font-bold leading-none tracking-tight text-ink tabular sm:text-[32px]">
              {m.value}
            </div>
            <div className="mt-1.5 font-mono text-[11px] text-ink-faint">
              {m.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
