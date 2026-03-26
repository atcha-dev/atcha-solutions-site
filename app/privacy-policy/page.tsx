import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Atcha Solutions and the processing of contact form data by Atcha Invest OÜ.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="grain min-h-screen px-5 py-6 text-[var(--foreground)] sm:px-8 lg:px-10">
      <div className="mx-auto legal-page">
        <section className="glass-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10">
          <div className="eyebrow text-xs font-semibold">Atcha Solutions</div>
          <h1 className="mt-4">Privacy Policy</h1>
          <p className="mt-6 max-w-3xl">
            This policy explains how personal data submitted through the Atcha Solutions website is processed.
          </p>
        </section>

        <section className="legal-stack mt-6">
          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8">
            <h2>Data Controller</h2>
            <ul className="mt-4 space-y-2">
              <li>Controller: Atcha Invest OÜ</li>
              <li>Commercial name: Atcha Solutions</li>
              <li>Registry code: 16393220</li>
              <li>Location: Tallinn, Estonia</li>
              <li>Contact: <a href="mailto:contact@atchasolutions.com">contact@atchasolutions.com</a></li>
            </ul>
          </article>

          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8">
            <h2>Data Collected</h2>
            <p className="mt-4">When you use the contact form, the following data may be collected:</p>
            <ul className="mt-4 space-y-2">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Subject and message content</li>
              <li>Technical anti-spam verification data through Cloudflare Turnstile</li>
              <li>Optional contextual information such as source, service, or reference fields</li>
            </ul>
          </article>

          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8">
            <h2>Purpose and Legal Basis</h2>
            <ul className="mt-4 space-y-2">
              <li>To answer contact requests and pre-contractual inquiries</li>
              <li>To manage commercial follow-up related to requested services</li>
              <li>To protect the contact form against spam and abuse</li>
            </ul>
            <p className="mt-4">
              The processing is based on pre-contractual measures taken at your request and, where relevant, on the legitimate interest of protecting the site and handling incoming business requests.
            </p>
          </article>

          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8">
            <h2>Recipients</h2>
            <p className="mt-4">
              Data submitted through the form is received by Atcha Invest OÜ and may transit through technical service
              providers used for contact delivery and hosting, including Cloudflare Workers, Cloudflare Turnstile, Brevo,
              and Vercel, only to the extent necessary to process your request.
            </p>
          </article>

          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8">
            <h2>Retention</h2>
            <p className="mt-4">
              Contact requests are kept only for the time necessary to process the inquiry and maintain any reasonable commercial follow-up. If no business relationship follows, personal data is not kept longer than necessary for that purpose.
            </p>
          </article>

          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8">
            <h2>Your Rights</h2>
            <p className="mt-4">You may request access to, correction of, or deletion of your personal data, as well as restriction or objection where applicable under data protection law.</p>
            <p className="mt-4">To exercise these rights, contact <a href="mailto:contact@atchasolutions.com">contact@atchasolutions.com</a>.</p>
          </article>

          <article className="glass-card rounded-[2rem] px-6 py-7 sm:px-8">
            <h2>Cookies and Tracking</h2>
            <p className="mt-4">
              This site does not currently use analytics or advertising cookies as part of its core operation. Technical services such as Cloudflare Turnstile may set or use technical mechanisms strictly necessary for security and anti-abuse purposes.
            </p>
          </article>
        </section>
      </div>
    </main>
  );
}
