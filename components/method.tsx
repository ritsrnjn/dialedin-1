import { SectionMarker } from "@/components/ui/section-marker";

type Phase = {
  n: string;
  title: string;
  duration: string;
  tagline: string;
  body: string;
};

const phases: Phase[] = [
  {
    n: "01",
    title: "Discovery",
    duration: "1 wk",
    tagline: "We listen first.",
    body: "A working session with your team. We map what exists, what hurts, and what's worth building. You leave with a written scope, fixed price, and our honest opinion — including \"don't hire us\" if that's the right call.",
  },
  {
    n: "02",
    title: "Design",
    duration: "1–2 wks",
    tagline: "Architect before building.",
    body: "Data model, API surface, agent contracts, deployment topology. Decisions written down, not assumed. You see the system on paper before a single commit.",
  },
  {
    n: "03",
    title: "Build",
    duration: "3–10 wks",
    tagline: "Ship in weeks, not quarters.",
    body: "Senior engineers only. Twice-weekly demos. You get a Linear board, a Slack channel, and direct access to whoever's writing the code. No PMs in between.",
  },
  {
    n: "04",
    title: "Operate",
    duration: "Ongoing",
    tagline: "We don't disappear at launch.",
    body: "We carry the pager. Monthly ops review, SLA-backed response, quarterly tune-ups. The systems we build stay alive — or we fix them on our dime.",
  },
];

export function Method() {
  return (
    <section id="method" className="border-b border-rule">
      <div className="mx-auto max-w-[1280px] px-8 py-20 lg:py-24">
        <SectionMarker number="03" label="METHOD" />

        <h2 className="font-display mt-6 max-w-4xl text-balance text-[34px] font-bold uppercase leading-[1.08] tracking-[-0.01em] text-ink sm:text-[40px] lg:text-[44px]">
          Four phases. Same cadence every time.
        </h2>

        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-ink-muted">
          Predictable rhythm. No theatre. You always know what next week looks
          like.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {phases.map((p) => (
            <PhaseCard key={p.n} phase={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PhaseCard({ phase }: { phase: Phase }) {
  return (
    <article className="dashed-rule relative flex flex-col gap-4 rounded-sm bg-paper-soft/40 p-6 transition-colors hover:bg-paper-soft">
      <div className="flex items-center justify-between">
        <span className="mono-label text-mark">PHASE_{phase.n}</span>
        <span className="mono-label rounded-sm border border-rule bg-paper px-1.5 py-0.5 text-ink-muted">
          {phase.duration}
        </span>
      </div>

      <div className="font-display text-[44px] font-bold leading-none tracking-tight text-rule">
        {phase.n}
      </div>

      <div>
        <h3 className="font-display text-[20px] font-bold uppercase leading-tight tracking-[-0.005em] text-ink">
          {phase.title}
        </h3>
        <p className="mt-1.5 text-[14.5px] font-medium leading-[1.4] text-ink">
          {phase.tagline}
        </p>
      </div>

      <p className="text-[13.5px] leading-[1.6] text-ink-muted">{phase.body}</p>
    </article>
  );
}
