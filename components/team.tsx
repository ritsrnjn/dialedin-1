import { SectionMarker } from "@/components/ui/section-marker";

type Member = {
  id: string;
  initials: string;
  name: string;
  role: string;
  background: string;
  specialties: string[];
};

const team: Member[] = [
  {
    id: "01",
    initials: "RR",
    name: "Ritesh Ranjan",
    role: "Founder · Engineering",
    background:
      "10+ years across data infrastructure and AI systems. Builds the kind of software he wishes he could buy.",
    specialties: ["AI Agents", "Architecture", "Data"],
  },
  {
    id: "02",
    initials: "EL",
    name: "Engineering Lead",
    role: "Senior Engineer",
    background:
      "Ex-staff at a Series-C SaaS. Ships internal tools faster than the rest of us.",
    specialties: ["Next.js", "tRPC", "Postgres"],
  },
  {
    id: "03",
    initials: "DI",
    name: "Data & Infra Lead",
    role: "Principal Engineer",
    background:
      "Built and ran the warehouse at a unicorn fintech. Early dbt adopter.",
    specialties: ["dbt", "Warehouses", "Pipelines"],
  },
  {
    id: "04",
    initials: "AE",
    name: "AI Engineer",
    role: "Senior · Agents",
    background:
      "Spent the last two years shipping LLM systems to production. Knows where the bodies are buried.",
    specialties: ["Agents", "Eval", "Orchestration"],
  },
];

export function Team() {
  return (
    <section id="team" className="border-b border-rule">
      <div className="mx-auto max-w-[1280px] px-8 py-20 lg:py-24">
        <SectionMarker number="05" label="TEAM" />

        <h2 className="font-display mt-6 max-w-4xl text-balance text-[34px] font-bold uppercase leading-[1.08] tracking-[-0.01em] text-ink sm:text-[40px] lg:text-[44px]">
          Senior engineers. No middle layer.
        </h2>

        <p className="mt-4 max-w-2xl text-[16px] leading-[1.55] text-ink-muted">
          The people on the call are the people writing the code. We stay
          small on purpose — every engagement gets a named lead.
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <MemberCard key={m.id} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MemberCard({ m }: { m: Member }) {
  return (
    <article className="dashed-rule flex flex-col gap-4 rounded-sm bg-paper-soft/40 p-6 transition-colors hover:bg-paper-soft">
      <div className="flex items-center justify-between">
        <span className="mono-label text-mark">MEMBER_{m.id}</span>
        <span className="mono-label text-ink-faint">{m.specialties[0]}</span>
      </div>

      <div className="flex items-center gap-3">
        <div className="grid size-12 place-items-center rounded-sm border border-rule bg-paper font-mono text-[13px] font-bold tracking-wider text-ink">
          {m.initials}
        </div>
        <div className="min-w-0">
          <div className="truncate font-display text-[15px] font-bold uppercase leading-tight tracking-tight text-ink">
            {m.name}
          </div>
          <div className="mt-0.5 truncate font-mono text-[11px] text-ink-muted">
            {m.role}
          </div>
        </div>
      </div>

      <p className="text-[13.5px] leading-[1.55] text-ink-muted">{m.background}</p>

      <div className="mt-auto">
        <span className="mono-label text-ink-faint">Specialties</span>
        <div className="mt-1.5 flex flex-wrap gap-1">
          {m.specialties.map((s) => (
            <span
              key={s}
              className="mono-label rounded-sm border border-rule bg-paper px-1.5 py-0.5 text-ink-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
