"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/site";

// Set NEXT_PUBLIC_FORMSPREE_ID in Vercel (Settings → Environment Variables)
// to have messages delivered straight to your inbox. Without it, the form
// opens the visitor's email app with the message filled in.
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

export default function ContactForm({ t }) {
  const [state, setState] = useState("idle"); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    if (!FORMSPREE_ID) {
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        data.company && `Company: ${data.company}`,
        `Need: ${data.inquiry_type}`,
        data.budget && `Budget: ${data.budget}`,
        data.timeline && `Timeline: ${data.timeline}`,
        "",
        data.message,
      ].filter((l) => l !== undefined && l !== false && l !== "").join("\n");
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`[Website] ${data.inquiry_type} — ${data.name}`)}&body=${encodeURIComponent(body)}`;
      return;
    }

    setState("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("send failed");
      setState("sent");
      e.target.reset();
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return <p className="form-success">{t.success}</p>;
  }

  return (
    <form onSubmit={onSubmit} className="contact-form">
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">{t.name}</label>
          <input type="text" id="name" name="name" required placeholder={t.namePh} />
        </div>
        <div className="form-field">
          <label htmlFor="email">{t.email}</label>
          <input type="email" id="email" name="email" required placeholder={t.emailPh} />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="company">{t.company}</label>
        <input type="text" id="company" name="company" placeholder={t.companyPh} />
      </div>
      <fieldset className="form-fieldset">
        <legend>{t.type}</legend>
        <div className="radio-group">
          {t.types.map((v, i) => (
            <label key={v}><input type="radio" name="inquiry_type" value={v} required={i === 0} /> {v}</label>
          ))}
        </div>
      </fieldset>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="budget">{t.budget}</label>
          <select id="budget" name="budget" defaultValue="">
            <option value="">—</option>
            {t.budgets.map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="timeline">{t.timeline}</label>
          <select id="timeline" name="timeline" defaultValue="">
            <option value="">—</option>
            {t.timelines.map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="message">{t.message}</label>
        <textarea id="message" name="message" required rows={5} placeholder={t.messagePh} />
      </div>
      {state === "error" && (
        <p className="form-error">{t.error} <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></p>
      )}
      <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }} disabled={state === "sending"}>
        {state === "sending" ? t.sending : t.submit}
      </button>
    </form>
  );
}
