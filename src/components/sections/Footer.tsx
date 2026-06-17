"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "@/i18n";
import { siteConfig } from "@/config/site";

const socials = [
  {
    key: "facebook",
    href: siteConfig.social.facebook,
    label: "Facebook",
    path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
  },
  {
    key: "instagram",
    href: siteConfig.social.instagram,
    label: "Instagram",
    isInstagram: true,
  },
  {
    key: "twitter",
    href: siteConfig.social.twitter,
    label: "Twitter",
    path: "M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 7.5v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.28 0-.55-.08-.82A7.72 7.72 0 0023 3z",
  },
  {
    key: "youtube",
    href: siteConfig.social.youtube,
    label: "YouTube",
    path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z",
  },
];

const navKeys = ["home", "vehicles", "services", "contact"] as const;

export default function Footer() {
  const t = useTranslations();
  const { locale, pick } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-accent-900 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-base font-black text-white">
                RD
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-lg font-bold">{siteConfig.name}</span>
                <span className="text-xs font-medium uppercase tracking-widest text-amber-300">
                  Renault · Dacia · Safi
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {t.footer.tagline}
            </p>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-wider text-white/60">
                {t.footer.social}
              </p>
              <div className="mt-3 flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:scale-110 hover:bg-primary hover:text-white"
                  >
                    {s.isInstagram ? (
                      <>
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </>
                    ) : (
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={s.path} />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300">
              {t.footer.navigation}
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {navKeys.map((key) => (
                <li key={key}>
                  <Link
                    href={`#${key}`}
                    className="text-white/70 transition-colors hover:text-amber-300"
                  >
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300">
              {t.footer.brands}
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              {siteConfig.brands.map((brand) => (
                <li key={brand.name} className="text-white/80">
                  <p className="font-bold text-white">{brand.name}</p>
                  <p className="text-xs text-white/60">
                    {pick(brand.tagline)}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300">
              {t.footer.contact}
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-start gap-2 text-white/70 transition-colors hover:text-amber-300"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.12.81.33 1.6.62 2.35a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.73-1.19a2 2 0 012.11-.45c.75.29 1.54.5 2.35.62A2 2 0 0122 16.92z" />
                  </svg>
                  <span dir="ltr">{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2 text-white/70 transition-colors hover:text-amber-300"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/70">
                <svg
                  className="mt-0.5 h-4 w-4 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <span>
                  {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.country}
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300">
              {t.footer.hours}
            </h4>
            <ul className="mt-5 space-y-2 text-sm">
              {siteConfig.hours.map((h) => (
                <li
                  key={h.time}
                  className="flex items-center justify-between gap-3 rounded-lg bg-white/5 px-3 py-2"
                >
                  <span className="text-white/85">
                    {locale === "ar" ? h.ar : h.fr}
                  </span>
                  <span className="font-semibold text-amber-300" dir="ltr">
                    {h.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-white/60 sm:flex-row lg:px-8">
          <p>
            © {year} {siteConfig.fullName}. {t.footer.rights}
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="#"
              className="transition-colors hover:text-amber-300"
            >
              {t.footer.legal}
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-amber-300"
            >
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
