import Link from "next/link";
import { SectionMarker } from "@/components/ui/section-marker";

export function Hero() {
  return (
    <section className="relative border-b border-rule">
      <div className="mx-auto max-w-[1280px] px-8 pb-24 pt-10 lg:pt-14">
        <SectionMarker number="01" label="HERO" />

        <div className="mt-6 grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-16">
          {/* Left: copy */}
          <div>
            <div className="flex items-center gap-2 text-mark">
              <span aria-hidden className="text-base leading-none">◦</span>
              <span className="mono-label">AI-Native Engineering Firm</span>
            </div>

            <h1 className="font-display mt-7 text-balance text-[64px] font-bold uppercase leading-[1.02] tracking-[-0.015em] text-ink sm:text-[76px] lg:text-[88px]">
              Engineering,
              <br />
              Dialed In.
            </h1>

            <p className="mt-7 max-w-xl text-[17px] leading-[1.55] text-ink-muted">
              We design, build, and operate the internal software, data
              infrastructure, and AI agents mid-market teams need in
              production. Senior team. We carry the pager.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#contact"
                className="mono-label inline-flex items-center gap-2 rounded-sm bg-mark px-5 py-3 text-paper shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.12)] transition-colors hover:bg-mark-soft"
              >
                Start a Project
              </Link>
              <Link
                href="#work"
                className="mono-label inline-flex items-center gap-2 rounded-sm border border-ink/80 px-5 py-3 text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                See Recent Work <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          {/* Right: blueprint placeholder */}
          <div className="lg:pt-6">
            <BlueprintPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
}

function BlueprintPlaceholder() {
  return (
    <div className="dashed-rule bg-hatch relative aspect-[4/3] w-full rounded-sm">
      {/* Diagonal X */}
      <svg
        aria-hidden
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full text-rule"
      >
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          stroke="currentColor"
          strokeWidth="0.4"
          strokeDasharray="1 1.2"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="100"
          y1="0"
          x2="0"
          y2="100"
          stroke="currentColor"
          strokeWidth="0.4"
          strokeDasharray="1 1.2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="absolute inset-0 grid place-items-center">
        <span className="mono-label rounded-sm bg-paper/85 px-3 py-1.5 text-ink-faint">
          [recent project — system diagram / dashboard]
        </span>
      </div>
    </div>
  );
}
