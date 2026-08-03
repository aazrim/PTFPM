import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/fpm-2-logo.png";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "product", label: "Product" },
  { id: "customer", label: "Customer" },
  { id: "license", label: "License" },
  { id: "contact", label: "Contact" },
];

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function TopNav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const lockRef = useRef(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const offsetRef = useRef(80);
  /* Responsive header offset: measured from the rendered header */
  useEffect(() => {
    const measure = () => {
      const h = headerRef.current?.offsetHeight;
      if (h) {
        offsetRef.current = h;
        document.documentElement.style.setProperty("--nav-h", `${h}px`);
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (headerRef.current) ro.observe(headerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  /* Active section from scroll position (accounts for nav offset) */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      if (lockRef.current) return;

      const line = window.scrollY + offsetRef.current + 24;

      let current = links[0].id;
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= line) current = l.id;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 4
      ) {
        current = links[links.length - 1].id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Eased scroll with header offset */
  const go = useCallback((id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;

    setActive(id);
    lockRef.current = true;

    const start = window.scrollY;
    const max = document.body.scrollHeight - window.innerHeight;
    const target = Math.min(
      Math.max(el.getBoundingClientRect().top + start - offsetRef.current, 0),
      Math.max(max, 0),
    );
    const distance = target - start;
    const duration = Math.min(1100, Math.max(450, Math.abs(distance) * 0.5));
    let t0: number | null = null;

    const settle = () => {
      // layout may shift during scroll (reveal animations) — correct once at the end
      const drift =
        el.getBoundingClientRect().top - offsetRef.current;
      if (Math.abs(drift) > 2) {
        window.scrollTo({ top: window.scrollY + drift, behavior: "smooth" });
      }
      setTimeout(() => (lockRef.current = false), 500);
    };

    const step = (ts: number) => {
      if (t0 === null) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      window.scrollTo(0, start + distance * easeInOutCubic(p));
      if (p < 1) requestAnimationFrame(step);
      else setTimeout(settle, 60);
    };
    requestAnimationFrame(step);

  }, []);

  const light = !scrolled; // over hero imagery

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "var(--nav-glass)" : "var(--nav-glass-top)",
        boxShadow: scrolled ? "var(--shadow-nav)" : "none",
        backdropFilter: scrolled ? "blur(18px) saturate(160%)" : "blur(3px)",
      }}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-10">
        {/* Logo */}
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-3"
          aria-label="Go to home"
        >
          <span className="flex items-center justify-center rounded-xl bg-white px-2.5 py-1.5 shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
            <img
              src={logo}
              alt="Logo FPM Fajar Perkasa Makmur"
              width={96}
              height={60}
              className="h-6 w-auto object-contain lg:h-7"
            />
          </span>

          <div
            className={`hidden leading-tight transition-colors duration-500 sm:block ${
              light ? "text-hero-foreground" : "text-foreground"
            }`}
          >
            <p className="whitespace-nowrap font-display text-sm font-extrabold tracking-tight lg:text-base">
              FAJAR PERKASA MAKMUR
            </p>
            <p
              className={`mt-0.5 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.12em] ${
                light ? "text-hero-muted" : "text-muted-foreground"
              }`}
            >
              Transportation &amp; Logistics
            </p>
          </div>
        </button>


        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul
            className={`flex items-center gap-1 rounded-full p-1 transition-colors duration-500 ${
              light
                ? "bg-white/10 ring-1 ring-white/15"
                : "bg-surface/70 ring-1 ring-border/60"
            }`}
          >
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative rounded-full px-4 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300 ${
                      isActive
                        ? light
                          ? "bg-white/20 text-hero-foreground"
                          : "bg-primary/10 text-primary"
                        : light
                          ? "text-hero-muted hover:bg-white/10 hover:text-hero-foreground"
                          : "text-muted-foreground hover:bg-surface-elevated hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>



        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("contact");
            }}
            className="btn-accent hidden items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider lg:inline-flex"
          >
            <Phone className="size-3.5" />
            Contact Us
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className={`rounded-lg border p-3 transition-colors lg:hidden ${
              light
                ? "border-hero-muted/40 text-hero-foreground"
                : "border-border text-foreground hover:bg-surface"
            }`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="px-6 pb-6 backdrop-blur-xl"
          style={{ background: "var(--nav-glass)" }}
        >
          <ul className="space-y-1 pt-4">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold transition-colors ${
                    active === l.id
                      ? "bg-surface-elevated text-primary"
                      : "text-muted-foreground hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </button>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              go("contact");
            }}
            className="btn-accent mt-4 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-bold uppercase tracking-wider"
          >
            <Phone className="size-3.5" />
            Contact Us
          </a>
        </nav>
      </div>

      {/* Soft gradient hairline instead of a hard border */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-500"
        style={{
          background: "var(--nav-hairline)",
          opacity: scrolled ? 1 : 0,
        }}
      />

    </header>
  );
}
