"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "@/i18n";
import { siteConfig } from "@/config/site";

export default function WhatsAppButton() {
  const t = useTranslations();
  const { locale } = useLocale();
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const defaultMessage =
    locale === "ar"
      ? "مرحباً، أرغب في الحصول على معلومات حول Renault Dacia Safi."
      : "Bonjour, je souhaite avoir des informations sur Renault Dacia Safi.";

  const href = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={t.whatsapp.tooltip}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`group fixed bottom-6 right-6 z-40 flex items-center gap-3 transition-all duration-500 sm:bottom-8 sm:right-8 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span
        className={`hidden origin-right rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#075E54] shadow-lg ring-1 ring-emerald-100 transition-all duration-300 sm:block ${
          hover ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {t.whatsapp.tooltip}
      </span>
      <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-500/40 animate-pulse-soft sm:h-16 sm:w-16">
        <span
          aria-hidden
          className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 animate-ping-slow"
        />
        <svg
          className="h-7 w-7 sm:h-8 sm:w-8"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.5 5.26l.6.955-1.005 3.667 3.394-.581zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.298-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.307 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </span>
    </a>
  );
}
