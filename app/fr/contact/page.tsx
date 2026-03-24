import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "../../contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Atcha Solutions pour des corrections web, landing pages, nettoyages de site et sites vitrines en remote.",
  alternates: { canonical: "/fr/contact" },
};

export default function ContactPageFr() {
  return (
    <main className="grain min-h-screen px-5 py-6 text-[var(--foreground)] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <section className="glass-card contact-hero-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="contact-hero-grid">
            <div className="contact-copy">
              <div className="eyebrow text-xs font-semibold">Atcha Solutions</div>
              <h1 className="mt-4 max-w-3xl text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Parlons du correctif, de la landing page ou du site qu&apos;il vous faut.
              </h1>
              <p className="muted mt-6 max-w-2xl text-base leading-7 sm:text-lg">
                Envoyez l&apos;essentiel et je reviens vers vous avec un cadrage simple, utile et réaliste.
              </p>

              <div className="contact-copy-stack mt-8 space-y-4 text-sm leading-6 sm:text-base">
                <p>Bon fit pour corrections web, landing pages, nettoyage de site, optimisation mobile et parcours de contact.</p>
                <p>
                  Pour un bon premier message : lien du site, problème, objectif et délai souhaité. Utilisez le formulaire ou écrivez directement à{" "}
                  <a href="mailto:atchasolutions@pm.me" className="font-semibold text-[var(--accent-2)]">atchasolutions@pm.me</a>.
                </p>
              </div>
            </div>

            <div className="contact-form-wrap rounded-[1.6rem] border border-[var(--line)] bg-white/62 p-5 sm:p-6">
              <div className="eyebrow text-xs font-semibold">Formulaire de contact</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Envoyer un brief</h2>
              <p className="muted mt-3 text-sm leading-6 sm:text-base">Restez simple : le problème, ce que vous souhaitez et le délai idéal.</p>
              <div className="mt-6">
                <Suspense fallback={<div className="muted text-sm">Chargement du formulaire…</div>}>
                  <ContactForm locale="fr" />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
