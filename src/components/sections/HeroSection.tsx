"use client";

import Link from "next/link";
import { useTranslations } from "@/i18n";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-20"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${siteConfig.heroImage})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-900/85 via-primary-800/75 to-primary-700/60"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 py-20 text-center lg:px-8">
        <div className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md sm:text-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
          </span>
          {t.hero.badge}
        </div>

        <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-white text-balance sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="block animate-fade-up">{t.hero.title}</span>
          <span
            className="mt-3 block bg-gradient-to-r from-amber-300 via-amber-200 to-amber-300 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl"
            style={{ animationDelay: "0.2s" }}
          >
            {t.hero.subtitle}
          </span>
        </h1>

        <p
          className="mt-8 max-w-2xl animate-fade-up text-base leading-relaxed text-white/95 sm:text-lg md:text-xl"
          style={{ animationDelay: "0.3s" }}
        >
          {t.hero.description}
        </p>

        <div
          className="mt-10 flex animate-fade-up flex-col items-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="#vehicles"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary shadow-2xl shadow-primary/30 transition hover:scale-105 hover:bg-amber-300 hover:text-primary-900 hover:shadow-amber-300/50"
          >
            {t.hero.ctaPrimary}
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white hover:bg-white hover:text-primary"
          >
            {t.hero.ctaSecondary}
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-white/80">
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-amber-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            <span className="text-sm font-medium">Safi, Maroc</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-5 w-5 text-amber-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.81.33 1.6.62 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.73-1.19a2 2 0 012.11-.45c.75.29 1.54.5 2.35.62A2 2 0 0122 16.92z" />
            </svg>
            <span className="text-sm font-medium" dir="ltr">
              {siteConfig.phone}
            </span>
          </div>
        </div>
      </div>

      <Link
        href="#stats"
        aria-label={t.hero.scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow text-white/70 transition-colors hover:text-white md:block"
      >
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
        </svg>
      </Link>
    </section>
  );
}
