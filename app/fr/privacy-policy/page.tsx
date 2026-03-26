import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialite",
  description: "Politique de confidentialite de Atcha Solutions concernant les donnees transmises via le formulaire de contact.",
  alternates: { canonical: "/fr/privacy-policy" },
};

export default function PrivacyPolicyFr() {
  return (
    <main className="grain min-h-screen px-5 py-6 text-[var(--foreground)] sm:px-8 lg:px-10">
      <div className="mx-auto legal-page">
        <section className="glass-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="eyebrow text-xs font-semibold">Atcha Solutions</div>
          <h1 className="mt-4">Politique de confidentialité</h1>
          <p className="mt-6 max-w-3xl">Cette politique explique comment les données personnelles transmises via le site Atcha Solutions sont traitées.</p>
        </section>
        <section className="legal-stack mt-6">
          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8"><h2>Responsable de traitement</h2><ul className="mt-4 space-y-2"><li>Responsable : Atcha Invest OÜ</li><li>Nom commercial : Atcha Solutions</li><li>Code registre : 16393220</li><li>Localisation : Tallinn, Estonie</li><li>Contact : <a href="mailto:contact@atchasolutions.com">contact@atchasolutions.com</a></li></ul></article>
          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8"><h2>Données collectées</h2><p className="mt-4">Le formulaire peut collecter :</p><ul className="mt-4 space-y-2"><li>Nom</li><li>Téléphone</li><li>Email</li><li>Sujet et message</li><li>Données techniques anti-spam via Cloudflare Turnstile</li><li>Informations de contexte facultatives comme source, service ou référence</li></ul></article>
          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8"><h2>Finalité et base légale</h2><ul className="mt-4 space-y-2"><li>Répondre aux demandes de contact et demandes précontractuelles</li><li>Assurer le suivi commercial des services demandés</li><li>Protéger le formulaire contre le spam et les abus</li></ul><p className="mt-4">Le traitement repose sur les mesures précontractuelles prises à votre demande et, le cas échéant, sur l&apos;intérêt légitime de protection du site et de gestion des demandes entrantes.</p></article>
          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8"><h2>Destinataires</h2><p className="mt-4">Les données transmises via le formulaire sont reçues par Atcha Invest OÜ et peuvent transiter par des prestataires techniques strictement nécessaires au traitement de la demande, notamment Cloudflare Workers, Cloudflare Turnstile, Brevo et Vercel.</p></article>
          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8"><h2>Durée de conservation</h2><p className="mt-4">Les demandes de contact sont conservées uniquement le temps nécessaire au traitement de la demande et à un suivi commercial raisonnable. En l&apos;absence de relation commerciale, les données ne sont pas conservées au-delà du nécessaire.</p></article>
          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8"><h2>Vos droits</h2><p className="mt-4">Vous pouvez demander l&apos;accès, la rectification ou la suppression de vos données, ainsi que la limitation ou l&apos;opposition lorsque cela est applicable.</p><p className="mt-4">Pour exercer ces droits : <a href="mailto:contact@atchasolutions.com">contact@atchasolutions.com</a>.</p></article>
          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8"><h2>Cookies et traceurs</h2><p className="mt-4">Le site n&apos;utilise pas actuellement de cookies publicitaires ou d&apos;analytics comme composant central. Des mécanismes techniques strictement nécessaires à la sécurité, comme Cloudflare Turnstile, peuvent être utilisés.</p></article>
        </section>
      </div>
    </main>
  );
}
