import { Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { portfolio } from "@/content/portfolio";
import { encodeForm } from "@/lib/utils";

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setSent(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload: Record<string, string> = {};

    formData.forEach((value, key) => {
      payload[key] = String(value);
    });

    try {
      // const response = await fetch("/", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
      //   body: encodeForm(payload),
      // });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "6f4c1f57-d5e3-4197-b001-0c7533ee8b5c",
          subject: `New Message from ${payload.name}`,
          ...payload,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setSent(true);
    } catch {
      setError(
        "Something went wrong while sending the message. Please try email instead.",
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      className="mt-8 space-y-5"
      name="contact"
      method="POST"
      // data-netlify="true"
      onSubmit={onSubmit}
    >
      {/* <input type="hidden" name="form-name" value="contact" /> */}
      <p className="hidden">
        <label>
          Don&apos;t fill this out if you&apos;re human:{" "}
          <input name="botcheck" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-text">Name</span>
          <input
            className="focus-ring field"
            type="text"
            name="name"
            autoComplete="name"
            required
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-text">
            Email
          </span>
          <input
            className="focus-ring field"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-text">
          Subject
        </span>
        <input
          className="focus-ring field"
          type="text"
          name="subject"
          required
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-text">
          Message
        </span>
        <textarea
          className="focus-ring field min-h-[180px]"
          name="message"
          required
        />
      </label>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-muted">
          Prefer direct contact? Email {portfolio.basics.email} or connect on
          LinkedIn.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-accent/30 bg-accent px-5 py-3 text-sm font-semibold text-base shadow-glow transition hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {pending ? "Sending..." : "Send message"}
          <Send className="h-4 w-4" />
        </button>
      </div>

      {sent ? (
        <p className="rounded-[1.2rem] border border-success/20 bg-success/10 px-4 py-3 text-sm text-success">
          Message sent successfully.
        </p>
      ) : null}
      {error ? (
        <p className="rounded-[1.2rem] border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      ) : null}
    </form>
  );
}
