"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "@/i18n";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "vehicles", href: "#vehicles" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
] as const;

export default function Header() {
  const t = useTranslations();
  const { locale, toggleLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="#home"
          className="group flex items-center gap-3"
          aria-label={siteConfig.name}
        >
          <span
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl text-sm font-black transition-all",
              scrolled
                ? "bg-primary text-white"
                : "bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm"
            )}
          >
            RD
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                "text-base font-bold tracking-tight transition-colors sm:text-lg",
                scrolled ? "text-primary" : "text-white"
              )}
            >
              {siteConfig.name}
            </span>
            <span
              className={cn(
                "text-[10px] font-medium uppercase tracking-widest transition-colors sm:text-xs",
                scrolled ? "text-muted-foreground" : "text-white/80"
              )}
            >
              Safi · {siteConfig.category}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                scrolled
                  ? "text-foreground hover:bg-primary/5 hover:text-primary"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              )}
            >
              {t.nav[link.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Switch language"
            className={cn(
              "flex h-10 min-w-12 items-center justify-center rounded-full px-3 text-xs font-bold uppercase tracking-wider transition-all",
              scrolled
                ? "border border-primary/15 bg-white text-primary hover:border-primary hover:bg-primary hover:text-white"
                : "border border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-primary"
            )}
          >
            {locale === "fr" ? "AR" : "FR"}
          </button>

          <Link
            href="#contact"
            className={cn(
              "hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all sm:inline-flex",
              scrolled
                ? "bg-primary text-white shadow-sm hover:bg-primary-700 hover:shadow-md"
                : "bg-white text-primary shadow-sm hover:bg-accent hover:text-white"
            )}
          >
            {t.nav.cta}
          </Link>

          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
              scrolled ? "text-primary" : "text-white"
            )}
          >
            <div className="relative h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 block h-1 w-5 rounded-full transition-all duration-300",
                  scrolled ? "bg-primary" : "bg-white",
                  open ? "top-1.5 rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 block h-1 w-5 rounded-full transition-all duration-300",
                  scrolled ? "bg-primary" : "bg-white",
                  open && "scale-x-0 opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-1 w-5 rounded-full transition-all duration-300",
                  scrolled ? "bg-primary" : "bg-white",
                  open ? "top-1.5 -rotate-45" : "top-3"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-white shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-primary/5 hover:text-primary"
              >
                {t.nav[link.key]}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white"
            >
              {t.nav.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
