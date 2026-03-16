import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Notice",
  description: "Legal notice for Atcha Solutions, the commercial name operated by Atcha Invest OÜ.",
  alternates: {
    canonical: "/legal-notice",
  },
};

export default function LegalNoticePage() {
  return (
    <main className="grain min-h-screen px-5 py-6 text-[var(--foreground)] sm:px-8 lg:px-10">
      <div className="mx-auto legal-page">
        <section className="glass-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="eyebrow text-xs font-semibold">Atcha Solutions</div>
          <h1 className="mt-4">Legal Notice</h1>
          <p className="mt-6 max-w-3xl">
            Atcha Solutions is the commercial name used for the web and digital services activity operated by Atcha
            Invest OÜ.
          </p>
        </section>

        <section className="legal-stack mt-6">
          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8">
            <h2>Publisher</h2>
            <ul className="mt-4 space-y-2">
              <li>Commercial name: Atcha Solutions</li>
              <li>Legal entity: Atcha Invest OÜ</li>
              <li>Registry code: 16393220</li>
              <li>Legal form: Private limited company (OÜ)</li>
              <li>Registered office: Tallinn, Estonia</li>
              <li>Contact email: <a href="mailto:atchasolutions@pm.me">atchasolutions@pm.me</a></li>
            </ul>
          </article>

          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8">
            <h2>Company Information</h2>
            <ul className="mt-4 space-y-2">
              <li>Company registered in Estonia</li>
              <li>Date of registration: 17.12.2021</li>
              <li>Share capital: 2,500 EUR</li>
              <li>VAT status: not liable to VAT</li>
              <li>
                Public register reference: <a href="https://ariregister.rik.ee/eng/company/16393220/Atcha-Invest-O%C3%9C">Estonian e-Business Register</a>
              </li>
            </ul>
          </article>

          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8">
            <h2>Hosting</h2>
            <ul className="mt-4 space-y-2">
              <li>Hosting provider: Vercel Inc.</li>
              <li>Website: <a href="https://vercel.com">vercel.com</a></li>
            </ul>
          </article>

          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8">
            <h2>Intellectual Property</h2>
            <p className="mt-4">
              Unless stated otherwise, the texts, layouts, code, and visual elements published on this site are protected
              by intellectual property rights. Any reproduction, distribution, or reuse without prior authorization is prohibited.
            </p>
          </article>

          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8">
            <h2>Liability</h2>
            <p className="mt-4">
              Atcha Invest OÜ makes reasonable efforts to keep the information on this site accurate and up to date, but
              cannot guarantee the absence of errors, omissions, or temporary unavailability.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
