"use client";

import { useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "@/i18n";
import { siteConfig } from "@/config/site";

export default function ContactSection() {
  const t = useTranslations();
  const { locale } = useLocale();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      (e.target as HTMLFormElement).reset();
      window.setTimeout(() => setSubmitted(false), 4500);
    }, 900);
  };

  const mapsEmbed = `https://www.google.com/maps?q=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}&hl=${locale === "ar" ? "ar" : "fr"}&z=15&output=embed`;
  const mapsLink = `https://www.google.com/maps?q=${siteConfig.coordinates.lat},${siteConfig.coordinates.lng}`;

  return (
    <section
      id="contact"
      className="relative bg-background px-5 py-24 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Contact
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary sm:text-4xl lg:text-5xl">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-700 p-7 text-white shadow-xl shadow-primary/20 sm:p-8">
              <h3 className="text-xl font-bold sm:text-2xl">
                {t.contact.info.title}
              </h3>

              <div className="mt-6 space-y-4">
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-xl bg-white/10 p-3 transition-colors hover:bg-white/15"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-300 text-primary-900">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-white/70">
                      {t.contact.info.address}
                    </p>
                    <p className="mt-0.5 font-medium">
                      {siteConfig.address.street}
                    </p>
                    <p className="text-white/80">
                      {siteConfig.address.postalCode} {siteConfig.address.city}, {siteConfig.address.country}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="group flex items-start gap-4 rounded-xl bg-white/10 p-3 transition-colors hover:bg-white/15"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-300 text-primary-900">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.81.33 1.6.62 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.73-1.19a2 2 0 012.11-.45c.75.29 1.54.5 2.35.62A2 2 0 0122 16.92z" />
                    </svg>
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-white/70">
                      {t.contact.info.phone}
                    </p>
                    <p
                      className="mt-0.5 font-bold tracking-wide"
                      dir="ltr"
                    >
                      {siteConfig.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group flex items-start gap-4 rounded-xl bg-white/10 p-3 transition-colors hover:bg-white/15"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-300 text-primary-900">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-white/70">
                      {t.contact.info.email}
                    </p>
                    <p className="mt-0.5 font-medium break-all">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 rounded-xl bg-white/10 p-3">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-amber-300 text-primary-900">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </span>
                  <div className="text-sm">
                    <p className="font-semibold text-white/70">
                      {t.contact.info.hours}
                    </p>
                    <ul className="mt-1 space-y-0.5 font-medium">
                      {siteConfig.hours.map((h) => (
                        <li
                          key={h.time}
                          className="flex items-center justify-between gap-3"
                        >
                          <span className="text-white/85">
                            {locale === "ar" ? h.ar : h.fr}
                          </span>
                          <span
                            className="text-white"
                            dir="ltr"
                          >
                            {h.time}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
              <iframe
                src={mapsEmbed}
                title="Renault Dacia Safi location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full border-0"
                allowFullScreen
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-white p-7 shadow-sm sm:p-9">
              <h3 className="text-xl font-bold text-primary sm:text-2xl">
                {t.contact.form.title}
              </h3>

              {submitted && (
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  <svg
                    className="h-5 w-5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  {t.contact.form.success}
                </div>
              )}

              <form onSubmit={onSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    {t.contact.form.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    {t.contact.form.phone}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    dir="ltr"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    {t.contact.form.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="model"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    {t.contact.form.model}
                  </label>
                  <select
                    id="model"
                    name="model"
                    required
                    className="w-full appearance-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">—</option>
                    {siteConfig.vehicles.map((v) => (
                      <option key={v.key} value={v.key}>
                        {v.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-foreground"
                  >
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-700 hover:shadow-primary/50 disabled:opacity-70 sm:w-auto"
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M21 12a9 9 0 11-6.219-8.56" />
                        </svg>
                        ...
                      </>
                    ) : (
                      <>
                        {t.contact.form.submit}
                        <svg
                          className="h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
