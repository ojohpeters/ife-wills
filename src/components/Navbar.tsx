"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { ArrowRight, Close, Menu, Sprout } from "@/components/icons";

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex items-center gap-3"
      aria-label="Ife Williams Coaching — home"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest text-cream transition-transform duration-300 group-hover:-rotate-6">
        <Sprout className="h-6 w-6" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-medium tracking-tight text-forest">
          Ife Williams
        </span>
        <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-sage-deep">
          Coaching
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line bg-cream/90 backdrop-blur-md shadow-[0_8px_30px_-24px_rgba(29,59,53,0.5)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-8">
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-forest"
                    : "text-stone hover:text-forest"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/book"
            className="group inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-lift"
          >
            Book a Session
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper text-forest transition-colors hover:bg-cream-deep lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-line bg-cream/95 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? "max-h-[28rem] border-t" : "max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-5 sm:px-8">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-colors ${
                  active
                    ? "bg-cream-deep text-forest"
                    : "text-stone hover:bg-cream-deep hover:text-forest"
                }`}
              >
                {link.label}
                <ArrowRight className="h-4 w-4 opacity-50" />
              </Link>
            );
          })}
          <Link
            href="/book"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-base font-medium text-cream shadow-soft"
          >
            Book a Session
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
