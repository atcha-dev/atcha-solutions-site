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

type Locale = "en" | "fr";

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

function getCopy(locale: Locale) {
  if (locale === "fr") {
    return {
        errors: {
        turnstile_failed: "La vérification anti-spam a échoué. Merci de réessayer.",
        brevo_failed: "L'envoi d'email a échoué côté worker. Vérifie la configuration Brevo.",
        server_error: "Le worker a renvoyé une erreur serveur. Vérifie les variables et les logs.",
        invalid_fields: "Certains champs obligatoires sont invalides. Vérifie le formulaire.",
        default: "L'envoi a échoué. Merci de réessayer ou d'écrire directement à atchasolutions@pm.me.",
        required: "Merci de remplir correctement les champs obligatoires.",
        missingEndpoint: "Le point de contact n'est pas configuré. Ajoute NEXT_PUBLIC_CONTACT_ENDPOINT.",
        missingTurnstile: "Turnstile n'est pas configuré. Ajoute NEXT_PUBLIC_TURNSTILE_SITE_KEY.",
        missingToken: "Merci de compléter la vérification anti-spam.",
        sending: "Envoi en cours...",
        sent: "Votre message a bien été envoyé. Merci.",
      },
      labels: {
        name: "Nom*",
        phone: "Téléphone (optionnel)",
        email: "Email*",
        subject: "Sujet*",
        message: "Message*",
        submit: "Envoyer la demande",
        sending: "Envoi...",
      },
      placeholders: {
        name: "Votre nom*",
        phone: "Numéro de téléphone",
        email: "Email*",
        subject: "Sujet*",
        message: "Expliquez brièvement ce qu'il faut corriger ou créer.*",
      },
      formLegal:
        "Les informations envoyées via ce formulaire sont utilisées uniquement pour répondre à votre demande et assurer le suivi commercial. En envoyant ce formulaire, vous acceptez que Atcha Solutions, exploité par Atcha Invest OÜ, traite ces données à cette fin.",
      fallback:
        "Turnstile n'est pas configuré. Ajoute NEXT_PUBLIC_TURNSTILE_SITE_KEY pour activer la vérification anti-spam.",
      legalLinks: {
        privacy: "/fr/privacy-policy",
        legal: "/fr/legal-notice",
      },
      legalPrefix: "Voir la ",
      legalJoiner: " et les ",
      defaults: {
        subject: "Demande de projet",
        messageFromService: (service: string) => `Bonjour, j'aimerais avoir de l'aide pour ${service}.`,
        messageFromReference: (reference: string) => `Bonjour, j'aimerais avoir de l'aide pour un projet lié à ${reference}.`,
      },
    };
  }

  return {
    errors: {
      turnstile_failed: "Anti-spam verification failed. Please try again.",
      brevo_failed: "Email delivery failed on the worker side. Check Brevo sender and API configuration.",
      server_error: "The worker returned a server error. Check worker environment variables and logs.",
      invalid_fields: "Some required fields are invalid. Please review the form and try again.",
      default: "Sending failed. Please try again or email atchasolutions@pm.me directly.",
      required: "Please complete the required fields correctly.",
      missingEndpoint: "The contact endpoint is missing. Add NEXT_PUBLIC_CONTACT_ENDPOINT to activate delivery.",
      missingTurnstile: "Turnstile is not configured yet. Add NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable anti-spam verification.",
      missingToken: "Please complete the anti-spam verification.",
      sending: "Sending...",
      sent: "Your message has been sent successfully. Thank you.",
    },
    labels: {
      name: "Name*",
      phone: "Phone (optional)",
      email: "Email*",
      subject: "Subject*",
      message: "Message*",
      submit: "Send request",
      sending: "Sending...",
    },
    placeholders: {
      name: "Your name*",
      phone: "Phone number",
      email: "Email*",
      subject: "Subject*",
      message: "Tell me what needs fixing or launching.*",
    },
    formLegal:
      "The information submitted through this form is used only to answer your request and manage the commercial follow-up. By sending this form, you agree that Atcha Solutions, operated by Atcha Invest OÜ, may process this data for that purpose.",
    fallback:
      "Turnstile is not configured yet. Add NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable anti-spam verification.",
    legalLinks: {
      privacy: "/privacy-policy",
      legal: "/legal-notice",
    },
    legalPrefix: "See the ",
    legalJoiner: " and ",
    defaults: {
      subject: "Project request",
      messageFromService: (service: string) => `Hello, I would like help with ${service}.`,
      messageFromReference: (reference: string) => `Hello, I would like help on a project related to ${reference}.`,
    },
  };
}

function getErrorMessage(locale: Locale, error?: string) {
  const copy = getCopy(locale);
  switch (error) {
    case "turnstile_failed":
      return copy.errors.turnstile_failed;
    case "brevo_failed":
      return copy.errors.brevo_failed;
    case "server_error":
      return copy.errors.server_error;
    case "invalid_fields":
      return copy.errors.invalid_fields;
    default:
      return copy.errors.default;
  }
}

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const copy = useMemo(() => getCopy(locale), [locale]);
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
            ? `${copy.defaults.subject} - ${service}`
            : copy.defaults.subject
          : "";

      const nextMessage =
        prev.message || service || reference
          ? service
            ? copy.defaults.messageFromService(service)
            : copy.defaults.messageFromReference(reference)
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
  }, [searchParams, copy]);

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
      setStatus({ message: copy.errors.required, type: "error" });
      return;
    }

    if (!endpoint) {
      setStatus({
          message: copy.errors.missingEndpoint,
        type: "error",
      });
      return;
    }

    if (!turnstileEnabled) {
      setStatus({
          message: copy.errors.missingTurnstile,
        type: "error",
      });
      return;
    }

    if (!turnstileToken) {
      setStatus({ message: copy.errors.missingToken, type: "error" });
      return;
    }

    const payload = {
      ...formState,
      to: contactTo,
      "cf-turnstile-response": turnstileToken,
    };

    try {
      setSubmitting(true);
      setStatus({ message: copy.errors.sending, type: "idle" });

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as { error?: string; details?: string } | null;

      if (!response.ok) {
        const baseMessage = getErrorMessage(locale, data?.error);
        const details = process.env.NODE_ENV !== "production" && data?.details ? ` (${data.details})` : "";
        setStatus({ message: `${baseMessage}${details}`, type: "error" });
        return;
      }

      setFormState({ ...initialState, source: formState.source, service: formState.service, reference: formState.reference });
      setTurnstileToken("");
      window.turnstile?.reset?.("#turnstileMount");
      setStatus({ message: copy.errors.sent, type: "success" });
    } catch {
      setStatus({
        message: copy.errors.default,
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
          <span>{copy.labels.name}</span>
          <input type="text" name="name" value={formState.name} onChange={handleChange} required minLength={2} placeholder={copy.placeholders.name} autoComplete="name" />
        </label>

        <label>
          <span>{copy.labels.phone}</span>
          <input type="tel" name="phone" value={formState.phone} onChange={handleChange} placeholder={copy.placeholders.phone} autoComplete="tel" />
        </label>

        <label>
          <span>{copy.labels.email}</span>
          <input type="email" name="email" value={formState.email} onChange={handleChange} required placeholder={copy.placeholders.email} autoComplete="email" />
        </label>

        <label>
          <span>{copy.labels.subject}</span>
          <input type="text" name="subject" value={formState.subject} onChange={handleChange} required minLength={3} placeholder={copy.placeholders.subject} />
        </label>

        <label>
          <span>{copy.labels.message}</span>
          <textarea name="message" rows={6} value={formState.message} onChange={handleChange} required minLength={10} placeholder={copy.placeholders.message} />
        </label>

        <div className="turnstile-shell">
          {turnstileEnabled ? (
            <div id="turnstileMount" className="cf-turnstile" aria-live="polite" />
          ) : (
            <div className="turnstile-fallback">{copy.fallback}</div>
          )}
        </div>

        <button type="submit" className="cta-accent rounded-full px-6 py-3 text-sm font-medium" disabled={submitting}>
          {submitting ? copy.labels.sending : copy.labels.submit}
        </button>

        <p className="form-legal">
          {copy.formLegal} {copy.legalPrefix}
          <a href={copy.legalLinks.privacy}>{locale === "fr" ? "Politique de confidentialité" : "Privacy Policy"}</a>
          {copy.legalJoiner}
          <a href={copy.legalLinks.legal}>{locale === "fr" ? "Mentions légales" : "Legal Notice"}</a>.
        </p>

        {status.message ? (
          <p className={`form-status ${status.type === "error" ? "error" : "success"}`}>{status.message}</p>
        ) : null}
      </form>
    </>
  );
}
