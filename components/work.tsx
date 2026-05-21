import { SectionMarker } from "@/components/ui/section-marker";

type Case = {
  n: string;
  sector: string;
  title: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: string }[];
  services: string[];
};

const cases: Case[] = [
  {
    n: "01",
    sector: "Series B Fintech",
    title: "Replaced a 6-person ops team with 4 agents.",
    problem:
      "Manual reconciliation across Stripe, ACH, and an internal ledger. 40+ hours/week of repetitive work.",
    solution:
      "Reconciliation agents with a human-in-the-loop dashboard. Edge cases escalate, routine cases auto-resolve.",
    metrics: [
      { label: "Ops time saved", value: "92%" },
      { label: "Recon accuracy", value: "99.7%" },
      { label: "Shipped in", value: "9 wks" },
    ],
    services: ["AI Agents", "Data Infra"],
  },
  {
    n: "02",
    sector: "B2B SaaS · 200 employees",
    title: "Killed five Notion docs with one internal app.",
    problem:
      "Sales ops, finance, and legal each kept their own pricing spreadsheets. Conflicting numbers everywhere.",
    solution:
      "Custom pricing portal on top of their warehouse. Single source of truth, audit trail, approval workflow.",
    metrics: [
      { label: "Tools replaced", value: "5" },
      { label: "Deal cycle", value: "−34%" },
      { label: "Shipped in", value: "6 wks" },
    ],
    services: ["Internal Software"],
  },
  {
    n: "03",
    sector: "Healthtech · pre-Series A",
    title: "Stood up a warehouse before they hired a data team.",
    problem:
      "Founders running the business off CSVs and Stripe exports. No analytics, no investor reporting.",
    solution:
      "Snowflake + dbt + Fivetran. 12 modeled tables. Self-serve dashboards. Documented for the data hire they made next.",
    metrics: [
      { label: "Data sources", value: "11" },
      { label: "Modeled tables", value: "12" },
      { label: "Shipped in", value: "5 wks" },
    ],
    services: ["Data Infra", "Advisory"],
  },
];

export function Work() {
  return (
    <section id="work" className="border-b border-rule">
      <div className="mx-auto max-w-[1280px] px-8 py-20 lg:py-24">
        <SectionMarker number="04" label="WORK" />

        <h2 className="font-display mt-6 max-w-4xl text-balance text-[34px] font-bold uppercase leading-[1.08] tracking-[-0.01em] text-ink sm:text-[40px] lg:text-[44px]">
          What we've shipped.
        </h2>

        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-ink-muted">
          Sectors and numbers anonymized. Live engagements available to walk
          through under NDA.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cases.map((c) => (
            <CaseCard key={c.n} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ c }: { c: Case }) {
  return (
    <article className="dashed-rule flex flex-col gap-5 rounded-sm bg-paper-soft/40 p-6 transition-colors hover:bg-paper-soft">
      <div className="flex items-center justify-between">
        <span className="mono-label text-mark">CASE_{c.n}</span>
        <span className="mono-label rounded-sm border border-rule bg-paper px-1.5 py-0.5 text-ink-muted">
          Shipped
        </span>
      </div>

      <div>
        <div className="mono-label text-ink-faint">{c.sector}</div>
        <h3 className="font-display mt-2 text-[19px] font-bold uppercase leading-[1.2] tracking-[-0.005em] text-ink">
          {c.title}
        </h3>
      </div>

      <dl className="space-y-3 text-[13.5px] leading-[1.55]">
        <div>
          <dt className="mono-label text-ink-faint">Problem</dt>
          <dd className="mt-1 text-ink-muted">{c.problem}</dd>
        </div>
        <div>
          <dt className="mono-label text-ink-faint">What we shipped</dt>
          <dd className="mt-1 text-ink-muted">{c.solution}</dd>
        </div>
      </dl>

      <div className="grid grid-cols-3 divide-x divide-rule border-y border-rule">
        {c.metrics.map((m) => (
          <div key={m.label} className="px-2 py-3">
            <div className="mono-label text-ink-faint">{m.label}</div>
            <div className="mt-1 font-display text-[18px] font-bold leading-none tracking-tight text-ink tabular">
              {m.value}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {c.services.map((s) => (
          <span
            key={s}
            className="mono-label rounded-sm border border-mark/40 bg-mark/10 px-1.5 py-0.5 text-mark"
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  );
}
