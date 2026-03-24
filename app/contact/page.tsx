import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Atcha Solutions for website fixes, landing pages, mobile cleanup, custom website builds, and lightweight automation.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="grain min-h-screen px-5 py-6 text-[var(--foreground)] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <section className="glass-card contact-hero-card rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="contact-hero-grid">
            <div className="contact-copy">
              <div className="eyebrow text-xs font-semibold">Atcha Solutions</div>
              <h1 className="mt-4 max-w-3xl text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Let&apos;s talk about the page, fix, or cleanup you need.
              </h1>
              <p className="muted mt-6 max-w-2xl text-base leading-7 sm:text-lg">
                Need a fast website fix, a cleaner page, or a small landing page built properly? Send the essentials and
                I will come back with the simplest useful scope.
              </p>

              <div className="contact-copy-stack mt-8 space-y-4 text-sm leading-6 sm:text-base">
                <p>
                  Good fit for website fixes, landing pages, mobile cleanup, and contact or form flow issues.
                </p>
                <p>
                  Best first message: site link, issue, and target timeline. You can also email directly at{" "}
                  <a href="mailto:atchasolutions@pm.me" className="font-semibold text-[var(--accent-2)]">
                    atchasolutions@pm.me
                  </a>
                  .
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:atchasolutions@pm.me" className="cta-primary rounded-full px-6 py-3 text-center text-sm font-medium">
                  Email Atcha Solutions
                </a>
              </div>
            </div>

            <div className="contact-form-wrap rounded-[1.6rem] border border-[var(--line)] bg-white/62 p-5 sm:p-6">
              <div className="eyebrow text-xs font-semibold">Project Request</div>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">Send a brief</h2>
              <p className="muted mt-3 text-sm leading-6 sm:text-base">
                Keep it short. A good first message is enough to start: what is broken, what needs to be built, and how
                fast you want it done.
              </p>
              <div className="mt-6">
                <Suspense fallback={<div className="muted text-sm">Loading form...</div>}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
