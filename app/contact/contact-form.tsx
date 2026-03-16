"use client";

import { useEffect, useMemo, useState } from "react";
import Script from "next/script";
import { useSearchParams } from "next/navigation";

type FormState = {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  source: string;
  service: string;
  reference: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
  source: "",
  service: "",
  reference: "",
};

declare global {
  interface Window {
    turnstile?: {
      remove: (selector: string | HTMLElement) => void;
      render: (selector: string | HTMLElement, options: Record<string, unknown>) => string;
      reset: (selector?: string | HTMLElement) => void;
    };
  }
}

function getErrorMessage(error?: string) {
  switch (error) {
    case "turnstile_failed":
      return "Anti-spam verification failed. Please try again.";
    case "brevo_failed":
      return "Email delivery failed on the worker side. Check Brevo sender and API configuration.";
    case "server_error":
      return "The worker returned a server error. Check worker environment variables and logs.";
    case "invalid_fields":
      return "Some required fields are invalid. Please review the form and try again.";
    default:
      return "Sending failed. Please try again or email atchasolutions@pm.me directly.";
  }
}

export function ContactForm() {
  const searchParams = useSearchParams();
  const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "";
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
  const contactTo = process.env.NEXT_PUBLIC_CONTACT_TO ?? "atchasolutions@pm.me";

  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{ message: string; type: "error" | "success" | "idle" }>({
    message: "",
    type: "idle",
  });
  const [submitting, setSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);

  const turnstileEnabled = useMemo(() => Boolean(turnstileSiteKey), [turnstileSiteKey]);

  useEffect(() => {
    const source = searchParams.get("source") || "";
    const service = searchParams.get("service") || "";
    const reference = searchParams.get("reference") || "";

    setFormState((prev) => {
      const nextSubject =
        prev.subject || service || reference || source
          ? service
            ? `Project request - ${service}`
            : "Project request"
          : "";

      const nextMessage =
        prev.message || service || reference
          ? service
            ? `Hello, I would like help with ${service}.`
            : `Hello, I would like help on a project related to ${reference}.`
          : "";

      return {
        ...prev,
        source,
        service,
        reference,
        subject: prev.subject || nextSubject,
        message: prev.message || nextMessage,
      };
    });
  }, [searchParams]);

  useEffect(() => {
    if (!turnstileEnabled || !turnstileReady || !window.turnstile) return;

    const mount = document.getElementById("turnstileMount");
    if (!mount) return;

    mount.innerHTML = "";

    window.turnstile.render(mount, {
      sitekey: turnstileSiteKey,
      callback: (token: string) => setTurnstileToken(token),
      "expired-callback": () => setTurnstileToken(""),
      "error-callback": () => setTurnstileToken(""),
      theme: "light",
    });
  }, [turnstileEnabled, turnstileReady, turnstileSiteKey]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ message: "", type: "idle" });

    const form = event.currentTarget;
    if (!form.reportValidity()) {
      setStatus({ message: "Please complete the required fields correctly.", type: "error" });
      return;
    }

    if (!endpoint) {
      setStatus({
        message: "The contact endpoint is missing. Add NEXT_PUBLIC_CONTACT_ENDPOINT to activate delivery.",
        type: "error",
      });
      return;
    }

    if (!turnstileEnabled) {
      setStatus({
        message: "Turnstile is not configured yet. Add NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable anti-spam verification.",
        type: "error",
      });
      return;
    }

    if (!turnstileToken) {
      setStatus({ message: "Please complete the anti-spam verification.", type: "error" });
      return;
    }

    const payload = {
      ...formState,
      to: contactTo,
      "cf-turnstile-response": turnstileToken,
    };

    try {
      setSubmitting(true);
      setStatus({ message: "Sending...", type: "idle" });

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as { error?: string; details?: string } | null;

      if (!response.ok) {
        const baseMessage = getErrorMessage(data?.error);
        const details = process.env.NODE_ENV !== "production" && data?.details ? ` (${data.details})` : "";
        setStatus({ message: `${baseMessage}${details}`, type: "error" });
        return;
      }

      setFormState({ ...initialState, source: formState.source, service: formState.service, reference: formState.reference });
      setTurnstileToken("");
      window.turnstile?.reset?.("#turnstileMount");
      setStatus({ message: "Your message has been sent successfully. Thank you.", type: "success" });
    } catch {
      setStatus({
        message: "Sending failed. Please try again or email atchasolutions@pm.me directly.",
        type: "error",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {turnstileEnabled ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          onLoad={() => setTurnstileReady(true)}
        />
      ) : null}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <input type="hidden" name="to" value={contactTo} />
        <input type="hidden" name="source" value={formState.source} />
        <input type="hidden" name="service" value={formState.service} />
        <input type="hidden" name="reference" value={formState.reference} />

        <label>
          <span>Name*</span>
          <input type="text" name="name" value={formState.name} onChange={handleChange} required minLength={2} placeholder="Your name*" autoComplete="name" />
        </label>

        <label>
          <span>Phone (optional)</span>
          <input type="tel" name="phone" value={formState.phone} onChange={handleChange} placeholder="Phone number" autoComplete="tel" />
        </label>

        <label>
          <span>Email*</span>
          <input type="email" name="email" value={formState.email} onChange={handleChange} required placeholder="Email*" autoComplete="email" />
        </label>

        <label>
          <span>Subject*</span>
          <input type="text" name="subject" value={formState.subject} onChange={handleChange} required minLength={3} placeholder="Subject*" />
        </label>

        <label>
          <span>Message*</span>
          <textarea name="message" rows={6} value={formState.message} onChange={handleChange} required minLength={10} placeholder="Tell me what needs fixing or launching.*" />
        </label>

        <div className="turnstile-shell">
          {turnstileEnabled ? (
            <div id="turnstileMount" className="cf-turnstile" aria-live="polite" />
          ) : (
            <div className="turnstile-fallback">Turnstile is not configured yet. Add NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable anti-spam verification.</div>
          )}
        </div>

        <button type="submit" className="cta-accent rounded-full px-6 py-3 text-sm font-medium" disabled={submitting}>
          {submitting ? "Sending..." : "Send request"}
        </button>

        <p className="form-legal">
          The information submitted through this form is used only to answer your request and manage the commercial
          follow-up. By sending this form, you agree that Atcha Solutions, operated by Atcha Invest OÜ, may process
          this data for that purpose. See the <a href="/privacy-policy">Privacy Policy</a> and <a href="/legal-notice">Legal Notice</a>.
        </p>

        {status.message ? (
          <p className={`form-status ${status.type === "error" ? "error" : "success"}`}>{status.message}</p>
        ) : null}
      </form>
    </>
  );
}
