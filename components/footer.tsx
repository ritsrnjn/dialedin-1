import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-paper-deep/40">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-8 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-2.5">
            <Logo />
            <span className="mono-label text-ink">DIALEDIN</span>
          </div>
          <p className="mt-5 max-w-xs text-[14px] leading-[1.55] text-ink-muted">
            AI-native engineering firm. We build and operate the production
            systems your team needs but can&apos;t buy off-the-shelf.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-sm border border-stable/40 bg-stable/10 px-2.5 py-1">
            <span className="size-1.5 rounded-full bg-stable" aria-hidden />
            <span className="mono-label text-stable">Accepting Q3 work</span>
          </div>
        </div>

        <FooterCol
          heading="Services"
          links={[
            { href: "#services", label: "AI Agents" },
            { href: "#services", label: "Internal Software" },
            { href: "#services", label: "Data Infrastructure" },
            { href: "#services", label: "Technical Advisory" },
          ]}
        />
        <FooterCol
          heading="Practice"
          links={[
            { href: "#method", label: "Method" },
            { href: "#work", label: "Work" },
            { href: "#team", label: "Team" },
          ]}
        />
        <FooterCol
          heading="Company"
          links={[
            { href: "#contact", label: "Contact" },
            { href: "mailto:hello@dialedin.solutions", label: "hello@dialedin.solutions" },
            { href: "#", label: "Careers" },
            { href: "#", label: "Privacy" },
          ]}
        />
      </div>

      <div className="border-t border-rule">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-8 py-5 font-mono text-[11px] text-ink-faint">
          <span>© 2026 DialedIN Solutions · all systems live</span>
          <span>v1.0 · last updated 2026-05-21</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="mono-label text-ink-faint">{heading}</div>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={`${heading}-${l.label}`}>
            <Link
              href={l.href}
              className="text-[14px] text-ink-muted transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Logo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden className="text-ink">
      <rect x="1.5" y="1.5" width="21" height="21" rx="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 7h6a5 5 0 0 1 0 10H7V7Z" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <circle cx="13" cy="12" r="1.3" className="fill-mark" />
    </svg>
  );
}
