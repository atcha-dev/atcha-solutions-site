import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Web Fix Express",
      price: "90-180 EUR",
      description:
        "Fast fixes for forms, mobile issues, broken contact paths, tracking, or messy pages.",
    },
    {
      title: "Website Cleanup",
      price: "180-450 EUR",
      description:
        "A practical refresh for small sites that need more clarity, better structure, and stronger credibility.",
    },
    {
      title: "Landing Page 72h",
      price: "390-700 EUR",
      description:
        "A clean, modern page with one clear offer, one clear action, and a mobile-first layout.",
    },
    {
      title: "Custom Website Build",
      price: "From 850 EUR",
      description:
        "For full websites that need a stronger visual direction, cleaner structure, and custom execution. I can also build with French graphic collaborators when a project needs a sharper design layer.",
    },
  ];

  const process = [
    "You send the issue or the page.",
    "I define a tight scope and a flat fee.",
    "I deliver fast, usually within 24-72h.",
  ];

  const outcomes = [
    "Clearer contact and booking flow",
    "Better mobile readability",
    "Cleaner offer presentation",
    "Less friction, faster delivery",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Atcha Solutions",
    email: "contact@atchasolutions.com",
    areaServed: "Tallinn",
    knowsLanguage: ["English", "French"],
    description:
      "Atcha Solutions provides fast website fixes, landing pages, mobile cleanup, and lightweight automation for small businesses and independents.",
    url: "https://atchasolutions.vercel.app",
    serviceType: [
      "Website fixes",
      "Landing pages",
      "Mobile cleanup",
      "Lightweight automation",
    ],
  };

  return (
    <main className="grain min-h-screen px-5 py-6 text-[var(--foreground)] sm:px-8 lg:px-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <section className="glass-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="eyebrow text-xs font-semibold">Atcha Solutions</div>
          <h1 className="mt-4 max-w-3xl text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Fast website fixes and landing pages for small businesses that do not have time to waste.
          </h1>
          <p className="muted mt-6 max-w-2xl text-base leading-7 sm:text-lg">
            Based in Tallinn. I help small businesses, founders, and independents clean up weak websites, fix
            practical issues, and launch simple landing pages quickly in English or French.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#d97745] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(217,119,69,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#c56638]"
            >
              Open Contact Form
            </Link>
            <a
              href="mailto:contact@atchasolutions.com"
              className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/50 px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:bg-white/75"
            >
              Email Directly
            </a>
          </div>
        </section>

        <section className="glass-card rounded-[2rem] px-5 py-6 sm:px-6 sm:py-7">
          <div className="eyebrow text-xs font-semibold">Available this week</div>
          <div className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Tight scopes, flat fees, fast turnaround.
          </div>
          <div className="muted mt-3 max-w-2xl text-sm leading-6 sm:text-base">
            Best fit for web fixes, landing pages, mobile cleanup, and contact flow improvements.
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--line)] bg-white/60 px-4 py-3 text-sm">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-[2rem] px-5 py-6 sm:px-6 sm:py-7">
          <div className="eyebrow text-xs font-semibold">How it works</div>
          <div className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Simple from first message to delivery.</div>
          <div className="mt-6 space-y-4">
            {process.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-[var(--line)] bg-white/55 px-4 py-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <p className="muted pt-1 text-sm leading-6 sm:text-base">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-[2rem] px-5 py-6 sm:px-6 sm:py-7">
          <div className="eyebrow text-xs font-semibold">Why this works</div>
          <div className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">No bloated projects. No vague process.</div>
          <div className="muted mt-4 space-y-3 text-sm leading-6 sm:text-base">
            <p>I focus on the small web problems that quietly cost trust, leads, and clarity.</p>
            <p>Good fit if you need something fixed this week, not a three-month redesign.</p>
            <p>English or French. Invoicing available through my Estonian company.</p>
          </div>
        </section>

        <section id="services" className="glass-card rounded-[2rem] px-5 py-6 sm:px-6 sm:py-7">
          <div className="eyebrow text-xs font-semibold">Core offers</div>
          <div className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            Small, practical scopes that are easy to buy and fast to deliver.
          </div>
          <div className="mt-8 grid gap-4">
            {services.map((service) => (
              <article key={service.title} className="rounded-[1.6rem] border border-[var(--line)] bg-white/60 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h2 className="text-xl font-semibold tracking-[-0.02em]">{service.title}</h2>
                  <span className="w-fit rounded-full bg-[var(--accent)]/12 px-3 py-1 text-xs font-semibold text-[var(--accent)]">
                    {service.price}
                  </span>
                </div>
                <p className="muted mt-3 text-sm leading-6 sm:text-base">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="rounded-[2rem] border border-[#2c221b] bg-[#17120f] px-5 py-6 text-[#fff7f0] shadow-[0_24px_90px_rgba(23,18,15,0.28)] sm:px-6 sm:py-7"
        >
          <div className="text-sm uppercase tracking-[0.18em] text-white/60">Contact</div>
          <div className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            If your site is messy, unclear, or quietly losing leads, send the link and I will keep it simple.
          </div>
          <a href="mailto:contact@atchasolutions.com" className="mt-5 block text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            contact@atchasolutions.com
          </a>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/72">
            Best first message: send your site link, the issue, and whether you want a fix, cleanup, or landing page.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#d97745] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(217,119,69,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#c56638]"
            >
              Open Contact Form
            </Link>
            <a
              href="mailto:contact@atchasolutions.com"
              className="inline-flex items-center justify-center rounded-full border border-white/22 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/12"
            >
              Email Directly
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
