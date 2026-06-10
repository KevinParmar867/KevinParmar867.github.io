"use client";

import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";

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
        ? "font-medium text-violet-300"
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
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-mono text-sm font-medium tracking-tight text-white"
        >
          {portfolio.name.split(" ")[0]}
          <span className="text-violet-400">.</span>
        </a>

        <ul className="hidden items-center gap-5 lg:flex">
          {portfolio.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className={linkClass(item.href)}>
                {item.label}
                {activeSection === item.href && (
                  <>
                    <span
                      className="absolute -bottom-1 left-0 h-px w-full bg-violet-400"
                      aria-hidden
                    />
                    <span className="sr-only"> (current section)</span>
                  </>
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-b border-white/5 bg-zinc-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-4">
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
        </div>
      )}
    </header>
  );
}
