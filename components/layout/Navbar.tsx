"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { IconClose, IconDownload, IconMail, IconMenu } from "@/components/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = portfolio.nav.map((item) => item.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (href: string) => {
    const isActive = activeSection === href;
    return `relative text-sm transition-colors ${
      isActive
        ? "font-medium text-indigo-300"
        : "text-zinc-400 hover:text-white"
    }`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <div className="flex min-w-0 flex-1 items-center gap-6 lg:gap-8">

          <ul className="hidden items-center gap-4 xl:gap-5 lg:flex">
            {portfolio.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass(item.href)}>
                  {item.label}
                  {activeSection === item.href && (
                    <>
                      <span
                        className="absolute -bottom-1 left-0 h-px w-full bg-indigo-400"
                        aria-hidden
                      />
                      <span className="sr-only"> (current section)</span>
                    </>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={portfolio.resume.pdfUrl}
            download
            className="hidden items-center gap-1.5 rounded-full bg-indigo-500 px-3.5 py-2 text-xs font-medium text-white transition-all hover:bg-indigo-400 sm:inline-flex sm:px-4 sm:text-sm"
          >
            <IconDownload className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Download CV
          </a>
          <a
            href={`mailto:${portfolio.email}`}
            className="hidden items-center gap-1.5 rounded-full border border-white/10 px-3.5 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.04] hover:text-white sm:inline-flex sm:px-4 sm:text-sm"
          >
            <IconMail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Mail
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="border-b border-white/5 bg-zinc-950/95 px-6 py-4 backdrop-blur-xl lg:hidden">
          <ul className="mb-4 flex flex-col gap-4">
            {portfolio.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={linkClass(item.href)}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 border-t border-white/5 pt-4 sm:flex-row">
            <a
              href={portfolio.resume.pdfUrl}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white transition-all hover:bg-indigo-400"
              onClick={() => setMenuOpen(false)}
            >
              <IconDownload />
              Download CV
            </a>
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              <IconMail />
              Mail
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
