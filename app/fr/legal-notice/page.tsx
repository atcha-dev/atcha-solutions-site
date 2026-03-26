import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions legales",
  description: "Mentions legales de Atcha Solutions, nom commercial exploite par Atcha Invest OÜ.",
  alternates: { canonical: "/fr/legal-notice" },
};

export default function LegalNoticeFr() {
  return (
    <main className="grain min-h-screen px-5 py-6 text-[var(--foreground)] sm:px-8 lg:px-10">
      <div className="mx-auto legal-page">
        <section className="glass-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="eyebrow text-xs font-semibold">Atcha Solutions</div>
          <h1 className="mt-4">Mentions légales</h1>
          <p className="mt-6 max-w-3xl">Atcha Solutions est le nom commercial utilisé pour l&apos;activité de services web et digitaux exploitée par Atcha Invest OÜ.</p>
        </section>
        <section className="legal-stack mt-6">
          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8"><h2>Éditeur</h2><ul className="mt-4 space-y-2"><li>Nom commercial : Atcha Solutions</li><li>Entité légale : Atcha Invest OÜ</li><li>Code registre : 16393220</li><li>Forme légale : OÜ</li><li>Siège : Tallinn, Estonie</li><li>Email : <a href="mailto:contact@atchasolutions.com">contact@atchasolutions.com</a></li></ul></article>
          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8"><h2>Informations société</h2><ul className="mt-4 space-y-2"><li>Société immatriculée en Estonie</li><li>Date d&apos;immatriculation : 17.12.2021</li><li>Capital social : 2 500 EUR</li><li>Statut TVA : not liable to VAT</li><li>Référence publique : <a href="https://ariregister.rik.ee/eng/company/16393220/Atcha-Invest-O%C3%9C">Registre estonien des entreprises</a></li></ul></article>
          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8"><h2>Hébergement</h2><ul className="mt-4 space-y-2"><li>Hébergeur : Vercel Inc.</li><li>Site web : <a href="https://vercel.com">vercel.com</a></li></ul></article>
          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8"><h2>Propriété intellectuelle</h2><p className="mt-4">Sauf mention contraire, les textes, layouts, code et éléments visuels publiés sur ce site sont protégés. Toute reproduction ou réutilisation sans autorisation préalable est interdite.</p></article>
          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8"><h2>Responsabilité</h2><p className="mt-4">Atcha Invest OÜ fait des efforts raisonnables pour maintenir les informations exactes et à jour, sans pouvoir garantir l&apos;absence totale d&apos;erreurs, d&apos;omissions ou d&apos;indisponibilités temporaires.</p></article>
        </section>
      </div>
    </main>
  );
}
