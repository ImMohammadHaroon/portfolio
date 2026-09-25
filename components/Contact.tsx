"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name")).trim();
    const email = String(data.get("email")).trim();
    const subject = String(data.get("subject")).trim();
    const message = String(data.get("message")).trim();

    if (!name || !subject || message.length < 10) {
      setStatus(
        "Please add your name, a subject, and a message of at least 10 characters."
      );
      return;
    }

    setSending(true);
    setStatus("Sending…");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok) {
        setStatus(
          result.error ||
            "Could not send your message. Please try again or email devowl14@gmail.com directly."
        );
        return;
      }

      setStatus("Thanks — your message was sent. I’ll get back to you soon.");
      form.reset();
    } catch {
      setStatus(
        "Could not send your message. Please try again or email devowl14@gmail.com directly."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <span className="kicker">05 / HAVE SOMETHING IN MIND?</span>
        <div className="contact-title">
          <h2>
            Let’s make
            <br />
            it happen<span>.</span>
          </h2>
          <a
            className="contact-circle"
            href="mailto:devowl14@gmail.com"
            aria-label="Email Mohammad Haroon"
          >
            ↗
          </a>
        </div>
        <div className="contact-form-layout">
          <div className="contact-intro">
            <h3>Tell me what you’re building.</h3>
            <p>
              Have a project, a question, or an opportunity? Share a few details
              and let’s start a conversation.
            </p>
            <a href="mailto:devowl14@gmail.com">devowl14@gmail.com ↗</a>
          </div>
          <form
            id="contact-form"
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-pair">
              <div className="form-field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Full name"
                  maxLength={100}
                  required
                  disabled={sending}
                />
              </div>
              <div className="form-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  maxLength={254}
                  required
                  disabled={sending}
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                placeholder="What would you like to discuss?"
                maxLength={150}
                required
                disabled={sending}
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="Tell me a little about your project…"
                minLength={10}
                maxLength={3000}
                required
                disabled={sending}
              />
            </div>
            <div className="form-submit">
              <button type="submit" disabled={sending}>
                {sending ? "Sending…" : "Send message"}{" "}
                <span aria-hidden="true">↗</span>
              </button>
              <p id="contact-help">
                Your message is sent securely to my inbox. I’ll reply by email.
              </p>
            </div>
            <p id="contact-status" role="status" aria-live="polite">
              {status}
            </p>
          </form>
        </div>
        <div className="contact-bottom">
          <a className="email" href="mailto:devowl14@gmail.com">
            devowl14@gmail.com
          </a>
          <div className="socials">
            <a
              href="https://github.com/ImMohammadHaroon"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/devowl/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
