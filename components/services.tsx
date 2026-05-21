import { SectionMarker } from "@/components/ui/section-marker";

type Service = {
  n: string;
  title: string;
  tagline: string;
  body: string;
  stack: string[];
  engagement: string;
};

const services: Service[] = [
  {
    n: "01",
    title: "AI Agents",
    tagline: "Digital teammates that run on a schedule.",
    body: "Agents that scrape, monitor, report, triage, and act. They live in Slack, your inbox, your CRM, your warehouse — on a cadence you control. Observable, reversible, and operated by us.",
    stack: ["OpenAI", "Anthropic", "LangGraph", "Temporal", "Postgres"],
    engagement: "6–12 wks · from $35k",
  },
  {
    n: "02",
    title: "Internal Software",
    tagline: "The tools your team needs that SaaS can't sell you.",
    body: "Custom dashboards, admin panels, internal portals, workflow apps. Built on your data, in your stack, with your auth.",
    stack: ["Next.js", "tRPC", "Prisma", "Postgres", "Tailwind"],
    engagement: "4–10 wks · from $25k",
  },
  {
    n: "03",
    title: "Data Infrastructure",
    tagline: "Make your data work for you, not the other way around.",
    body: "Pipelines, warehouses, dbt models, observability. The plumbing that makes every dashboard, report, and agent in your stack possible.",
    stack: ["dbt", "Snowflake", "BigQuery", "Airflow", "Fivetran"],
    engagement: "6–14 wks · from $40k",
  },
  {
    n: "04",
    title: "Technical Advisory",
    tagline: "Senior engineers in the room when you need them.",
    body: "Fractional CTO, architecture reviews, hiring panels, technical due diligence. For teams that need senior judgment, not more hands.",
    stack: ["Architecture", "Hiring", "DD", "Roadmaps"],
    engagement: "Retainer · from $8k/mo",
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-rule">
      <div className="mx-auto max-w-[1280px] px-8 py-20 lg:py-24">
        <SectionMarker number="02" label="SERVICES" />

        <h2 className="font-display mt-6 max-w-4xl text-balance text-[34px] font-bold uppercase leading-[1.08] tracking-[-0.01em] text-ink sm:text-[40px] lg:text-[44px]">
          Four practices. One operating discipline.
        </h2>

        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-ink-muted">
          Each service ships independently or composes with the others. Most
          clients start with one and expand from there.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <ServiceCard key={s.n} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="dashed-rule group flex flex-col gap-4 rounded-sm bg-paper-soft/40 p-7 transition-colors hover:bg-paper-soft">
      <div className="flex items-baseline justify-between">
        <span className="mono-label text-mark">{service.n}</span>
        <span className="mono-label text-ink-faint">SVC_{service.n}</span>
      </div>

      <h3 className="font-display text-[24px] font-bold uppercase leading-tight tracking-[-0.005em] text-ink">
        {service.title}
      </h3>

      <p className="text-[16px] leading-[1.5] text-ink">{service.tagline}</p>
      <p className="text-[14.5px] leading-[1.6] text-ink-muted">{service.body}</p>

      <div className="mt-auto space-y-3 border-t border-rule pt-4">
        <div>
          <span className="mono-label text-ink-faint">Stack</span>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {service.stack.map((t) => (
              <span
                key={t}
                className="mono-label rounded-sm border border-rule bg-paper px-1.5 py-0.5 text-ink-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="mono-label text-ink-faint">Engagement</span>
          <span className="font-mono text-[13px] text-ink tabular">
            {service.engagement}
          </span>
        </div>
      </div>
    </article>
  );
}
