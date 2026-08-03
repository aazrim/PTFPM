import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Truck,
  Ship,
  FileCheck,
  Factory,
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
} from "lucide-react";

import { TopNav } from "@/components/site/TopNav";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { ContactForm } from "@/components/site/ContactForm";
import logo from "@/assets/fpm-2-logo.png";
import heroImg from "@/assets/hero-trucks.jpg";
import aboutImg from "@/assets/about-fleet.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fajar Perkasa Makmur — B2B Transportation & Logistics" },
      {
        name: "description",
        content:
          "Reliable, flexible and innovative transportation and logistics solutions: FTL heavy cargo, interisland freight, and contract logistics for corporate clients.",
      },
      { property: "og:title", content: "Fajar Perkasa Makmur — B2B Transportation & Logistics" },
      {
        property: "og:description",
        content:
          "Reliable, flexible and innovative transportation and logistics solutions: FTL heavy cargo, interisland freight, and contract logistics for corporate clients.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const services = [
  {
    icon: Truck,
    title: "Full Truckload & Heavy Cargo",
    desc: "Dedicated FTL capacity with lowbed, trailer and self-loader units engineered for oversized industrial cargo.",
  },
  {
    icon: Ship,
    title: "Intercity & Interisland Freight",
    desc: "Door-to-door distribution across Java, Sumatra, Kalimantan and Sulawesi with integrated roll-on/roll-off scheduling.",
  },
  {
    icon: FileCheck,
    title: "Corporate Contract Logistics",
    desc: "Long-term dedicated fleet contracts with committed SLA, KPI reporting and on-site coordinator teams.",
  },
  {
    icon: Factory,
    title: "Industrial Supply Chain",
    desc: "Project cargo handling, warehouse-to-plant line feeding and specialized material movement for manufacturing.",
  },
];


const clients = [
  "SINAR BAJA",
  "NUSA CEMENT",
  "GARUDA AGRO",
  "PRIMA CHEMICAL",
  "MEGA STEEL",
  "TIRTA PACK",
  "ANEKA MINING",
  "BINTANG FOOD",
];

const licenses = [
  { title: "SIUJPT Freight Forwarding", desc: "Licensed multimodal transport operator under the Ministry of Transportation." },
  { title: "ISO 9001:2015", desc: "Certified quality management for dispatch, maintenance and delivery processes." },
  { title: "SMK3 Safety System", desc: "Occupational health & safety management audited annually across all depots." },
  { title: "All-Risk Cargo Insurance", desc: "Comprehensive marine and inland cargo coverage on every consignment." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <TopNav />

      {/* HERO */}
      <section id="home" className="relative flex min-h-dvh flex-col items-center overflow-hidden lg:flex-row lg:items-center">
        <img
          src={heroImg}
          alt="Convoy of PT Fajar Perkasa Makmur cargo trucks on a highway at sunset"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

        <div className="relative z-10 w-full px-6 pt-28 pb-12 sm:px-10 lg:px-20 lg:pt-24 lg:pb-44">
          <Reveal>
            <span className="inline-flex items-center rounded-full bg-primary px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground">
              PT Fajar Perkasa Makmur
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[0.95] text-hero-foreground sm:text-6xl lg:text-8xl">
              FAJAR PERKASA
              <br />
              MAKMUR
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-lg text-lg text-hero-muted sm:text-xl">
              Reliable, flexible and innovative solution for your transportation and logistic.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <a
              href="#product"
              className="btn-accent mt-9 inline-flex items-center gap-3 rounded-full px-9 py-4 text-sm font-bold uppercase tracking-[0.15em]"
            >
              Explore Products <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>

        {/* Stats bar */}
        <div className="relative z-10 mt-10 px-6 sm:px-10 lg:absolute lg:inset-x-0 lg:bottom-12 lg:px-20 lg:mt-0">
          <Reveal delay={380}>
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-y-6 rounded-2xl border border-hero-muted/20 bg-hero-glass px-6 py-6 backdrop-blur-md sm:grid-cols-4 sm:px-10">
              {[
                { v: 15, s: "+", l: "Years Experience" },
                { v: 320, s: "+", l: "Vehicle Operated" },
                { v: 140, s: "+", l: "Customers" },
                { v: 4, s: "", l: "Licensed" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="font-display text-3xl font-extrabold text-hero-foreground sm:text-4xl">
                    {s.v}
                    {s.s}
                  </p>
                  <p className="mt-1 text-xs text-hero-muted sm:text-sm">{s.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>


      {/* ABOUT */}
      <section id="about" className="px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img
                src={aboutImg}
                alt="Fleet of logistics trucks at a warehouse loading dock"
                loading="lazy"
                width={1200}
                height={900}
                className="w-full rounded-lg object-cover"
              />
              <div className="absolute -bottom-6 -right-4 hidden rounded-lg bg-primary px-7 py-5 text-primary-foreground sm:block">
                <p className="font-display text-3xl font-extrabold">15+</p>
                <p className="text-[11px] uppercase tracking-[0.2em]">Years on the road</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow">About Us</p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">
              Moving industrial Indonesia, one contract at a time.
            </h2>
            <p className="mt-6 text-muted-foreground">
              PT Fajar Perkasa Makmur is a B2B transportation and logistics operator serving
              manufacturing, mining, agribusiness and FMCG clients. For over a decade we have built
              a business around freight forwarding, end-to-end supply chain management and heavy
              transport for cargo that ordinary carriers cannot handle.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our own fleet, in-house workshop and 24/7 control room let us commit to hard delivery
              windows — and report against them transparently, every single month.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { v: 320, s: "+", l: "Total fleet units" },
                { v: 98.6, s: "%", d: 1, l: "On-time delivery" },
                { v: 140, s: "+", l: "Corporate partners" },
              ].map((s) => (
                <div key={s.l} className="panel px-4 py-5">
                  <Counter value={s.v} suffix={s.s} decimals={s.d ?? 0} />
                  <p className="mt-2 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT */}
      <section id="product" className="bg-surface px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <Reveal>
          <p className="eyebrow">Our Products</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Logistics services built for corporate volume.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="group h-full rounded-lg border border-border bg-background p-8 transition-colors hover:border-primary">
                <s.icon className="size-9 text-primary" />
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Request quote <ArrowRight className="size-3.5" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CUSTOMER */}
      <section id="customer" className="bg-surface px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <Reveal>
          <p className="eyebrow">Our Customers</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Trusted by industrial shippers nationwide.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
          {clients.map((c) => (
            <div
              key={c}
              className="flex h-24 items-center justify-center bg-background px-4 text-center font-display text-sm font-extrabold tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {c}
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[
            {
              q: "Their dedicated fleet has kept our plant line-feeding schedule intact for three straight years. Reporting is transparent and disputes are rare.",
              a: "Logistics Manager, Mega Steel",
            },
            {
              q: "Heavy machinery moves that other carriers refused, Fajar Perkasa Makmur planned and executed with full permits and escorts.",
              a: "Project Director, Aneka Mining",
            },
          ].map((t, i) => (
            <Reveal key={t.a} delay={i * 100}>
              <blockquote className="panel h-full p-8">
                <p className="text-lg leading-relaxed">“{t.q}”</p>
                <footer className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                  {t.a}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LICENSE */}
      <section id="license" className="px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <Reveal>
          <p className="eyebrow">Licenses &amp; Certification</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-extrabold sm:text-5xl">
            Fully licensed, insured and compliant.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {licenses.map((l, i) => (
            <Reveal key={l.title} delay={i * 80}>
              <div className="panel h-full p-7">
                <ShieldCheck className="size-8 text-primary" />
                <h3 className="mt-5 text-base font-bold">{l.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-surface px-6 py-24 sm:px-10 lg:px-20 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 text-4xl font-extrabold sm:text-5xl">Request a B2B price quote.</h2>
            <p className="mt-5 text-muted-foreground">
              Send us your route and cargo profile. Our corporate desk replies with an indicative
              rate within one business day.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex gap-4">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  <strong className="block">Head Office</strong>
                  <span className="text-muted-foreground">
                    Jl. Raya Industri No. 88, Kawasan Industri Jababeka, Bekasi, Jawa Barat 17530
                  </span>
                </span>
              </li>
              <li className="flex gap-4">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  <strong className="block">Phone</strong>
                  <span className="text-muted-foreground">+62 21 8990 1234 · +62 811 8800 991</span>
                </span>
              </li>
              <li className="flex gap-4">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" />
                <span>
                  <strong className="block">Email</strong>
                  <span className="text-muted-foreground">sales@fajarperkasamakmur.co.id</span>
                </span>
              </li>
            </ul>

            <div className="mt-10 overflow-hidden rounded-lg border border-border">
              <iframe
                title="Head office location map"
                src="https://www.google.com/maps?q=Kawasan%20Industri%20Jababeka%20Bekasi&output=embed"
                loading="lazy"
                className="h-64 w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="panel p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 sm:px-10 lg:px-20">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Fajar Perkasa Makmur logo"
              loading="lazy"
              width={32}
              height={32}
              className="h-8 w-8 rounded-sm object-cover"
            />
            <span className="font-display text-sm font-extrabold tracking-tight">
              FAJAR PERKASA MAKMUR
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PT Fajar Perkasa Makmur. Transportation &amp; Logistics.
          </p>
        </div>
      </footer>
    </div>
  );
}
