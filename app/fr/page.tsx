import Link from "next/link";

export default function HomeFr() {
  const services = [
    {
      title: "Web Fix Express",
      price: "90-180 EUR",
      description: "Correction rapide de formulaires, bugs mobiles, parcours de contact cassés, tracking ou petits problèmes front.",
    },
    {
      title: "Website Cleanup",
      price: "180-450 EUR",
      description: "Remise à niveau d'un petit site pour clarifier le message, renforcer la structure et rendre la présence web plus crédible.",
    },
    {
      title: "Landing Page 72h",
      price: "390-700 EUR",
      description: "Une landing page claire, mobile-first, avec une offre lisible et un vrai appel à l'action.",
    },
    {
      title: "Site Vitrine / Développement sur mesure",
      price: "A partir de 850 EUR",
      description: "Pour un vrai site business, plus de structure, plus d'exécution, et si besoin une couche design plus forte avec des créateurs graphiques français.",
    },
  ];

  const process = [
    "Vous m'envoyez le lien du site, le problème ou le besoin.",
    "Je cadre un périmètre simple avec un forfait clair.",
    "Je livre vite, généralement sous 24-72h pour les petites missions.",
  ];

  const outcomes = [
    "Parcours contact plus clair",
    "Meilleure lisibilité sur mobile",
    "Offre mieux présentée",
    "Moins de friction, délai court",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Atcha Solutions",
      email: "atchasolutions@pm.me",
      areaServed: ["France", "Estonia"],
      knowsLanguage: ["French", "English"],
      description:
      "Atcha Solutions propose des corrections de site, landing pages, remises à niveau web et petits builds sur mesure, en remote.",
      url: "https://atchasolutions.vercel.app/fr",
    serviceType: ["Corrections web", "Landing pages", "Refonte légère", "Sites vitrines"],
  };

  return (
    <main className="grain min-h-screen px-5 py-6 text-[var(--foreground)] sm:px-8 lg:px-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto flex max-w-4xl flex-col gap-6">
        <section className="glass-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="eyebrow text-xs font-semibold">Atcha Solutions</div>
          <h1 className="mt-4 max-w-3xl text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Corrections rapides site web, créations landing pages et sites vitrines pour indépendants, TPE et PME.
          </h1>
          <p className="muted mt-6 max-w-2xl text-base leading-7 sm:text-lg">
            Basé à Tallinn, j&apos;interviens en remote en France et ailleurs. Les projets sont pensés pour être cadrés, exécutés et livrés à distance, vite et proprement.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/fr/contact" className="inline-flex items-center justify-center rounded-full bg-[#d97745] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(217,119,69,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#c56638]">
              Me contacter
            </Link>
          </div>
        </section>

        <section className="glass-card rounded-[2rem] px-5 py-6 sm:px-6 sm:py-7">
          <div className="eyebrow text-xs font-semibold">Disponible cette semaine</div>
          <div className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Forfaits clairs et délais courts.</div>
          <div className="muted mt-3 max-w-2xl text-sm leading-6 sm:text-base">Meilleur solution pour corrections web, landing pages, site vitrines, nettoyage de site, optimisation mobile et parcours de contact.</div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="rounded-2xl border border-[var(--line)] bg-white/60 px-4 py-3 text-sm">{item}</div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-[2rem] px-5 py-6 sm:px-6 sm:py-7">
          <div className="eyebrow text-xs font-semibold">Comment ça se passe</div>
          <div className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Simple, du premier message à la livraison.</div>
          <div className="mt-6 space-y-4">
            {process.map((step, index) => (
              <div key={step} className="flex gap-4 rounded-2xl border border-[var(--line)] bg-white/55 px-4 py-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-2)] text-sm font-semibold text-white">{index + 1}</div>
                <p className="muted pt-1 text-sm leading-6 sm:text-base">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-card rounded-[2rem] px-5 py-6 sm:px-6 sm:py-7">
          <div className="eyebrow text-xs font-semibold">Pourquoi ça marche</div>
          <div className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Pas de projet gonflé artificiellement. Pas de process flou.</div>
          <div className="muted mt-4 space-y-3 text-sm leading-6 sm:text-base">
            <p>Je me concentre sur la corrections de petits problèmes web qui vous coûtent en crédibilité ou en nouveaux leads par manque de clarté de l'offre ou problème technique.</p>
            <p>Si vous avez besoin d&apos;un site plus propre ou d&apos;une correction rapide cette semaine, pas d&apos;un tunnel de production de trois mois.</p>
            <p>Français / anglais. Facturation via société estonienne (zone euro, pas de tracas administratif). Intervention 100% remote pour le marché français.</p>
          </div>
        </section>

        <section id="services" className="glass-card rounded-[2rem] px-5 py-6 sm:px-6 sm:py-7">
          <div className="eyebrow text-xs font-semibold">Offres cœur</div>
          <div className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Des prestations clairs, faciles à comprendre et rapides à livrer.</div>
          <div className="mt-8 grid gap-4">
            {services.map((service) => (
              <article key={service.title} className="rounded-[1.6rem] border border-[var(--line)] bg-white/60 p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <h2 className="text-xl font-semibold tracking-[-0.02em]">{service.title}</h2>
                  <span className="w-fit rounded-full bg-[var(--accent)]/12 px-3 py-1 text-xs font-semibold text-[var(--accent)]">{service.price}</span>
                </div>
                <p className="muted mt-3 text-sm leading-6 sm:text-base">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-[2rem] border border-[#2c221b] bg-[#17120f] px-5 py-6 text-[#fff7f0] shadow-[0_24px_90px_rgba(23,18,15,0.28)] sm:px-6 sm:py-7">
          <div className="text-sm uppercase tracking-[0.18em] text-white/60">Contact</div>
          <div className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Si votre site est faible, confus, lent ou peu convaincant, envoyez le lien et je cadrerai la solution la plus simple.</div>
          <a href="mailto:atchasolutions@pm.me" className="mt-5 block text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">atchasolutions@pm.me</a>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/72">Pour un bon premier message : lien du site, problème constaté, objectifs et délai souhaité.</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/fr/contact" className="inline-flex items-center justify-center rounded-full bg-[#d97745] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(217,119,69,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#c56638]">Ouvrir le formulaire</Link>
            <a href="mailto:atchasolutions@pm.me" className="inline-flex items-center justify-center rounded-full border border-white/22 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/12">Écrire directement</a>
          </div>
        </section>
      </div>
    </main>
  );
}
