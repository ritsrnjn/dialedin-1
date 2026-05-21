import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-6 px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="DialedIN home">
          <Logo />
          <span className="mono-label text-ink">DIALEDIN</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {[
            { href: "#services", label: "Services" },
            { href: "#method", label: "Method" },
            { href: "#work", label: "Work" },
            { href: "#team", label: "Team" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mono-label text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="mono-label inline-flex items-center gap-2 rounded-sm bg-mark px-4 py-2 text-paper shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.12)] transition-colors hover:bg-mark-soft"
        >
          Start <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}

function Logo() {
  // Squared "D" with a dot — echoes a dial face inside a frame.
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="text-ink"
    >
      <rect
        x="1.5"
        y="1.5"
        width="21"
        height="21"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M7 7h6a5 5 0 0 1 0 10H7V7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <circle cx="13" cy="12" r="1.3" className="fill-mark" />
    </svg>
  );
}
