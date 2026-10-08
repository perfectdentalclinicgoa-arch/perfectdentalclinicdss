"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Header() {
  const [activePath, setActivePath] = useState("course");
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Active path
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivePath(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.4,
    });
  }, { scope: headerRef });

  const navLinks = [
    { id: "course", label: "Course" },
    { id: "whos-it-for", label: "Who It's For" },
    { id: "how-it-works", label: "How It Works" },
    { id: "curriculum", label: "Curriculum" },
    { id: "enrollment", label: "Enrollment" },
  ];

  return (
    <header ref={headerRef} className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-20 max-w-7xl mx-auto px-margin md:px-margin-desktop flex items-center justify-between">
        <Link href="#course" className="flex flex-col group text-left">
          <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface group-hover:text-primary transition-colors">DR RAUT DSS</span>
          <span className="font-label-sm text-label-sm uppercase tracking-[0.16em] text-on-surface-variant mt-0.5">Digital Smile Simulation</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-space-lg">
          {navLinks.map((link) => {
            const isActive = activePath === link.id;
            return (
              <Link
                key={link.id}
                href={`#${link.id}`}
                className={`transition-colors tracking-wide ${isActive ? "text-on-surface underline underline-offset-8 decoration-1 decoration-on-surface font-semibold" : "font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-space-md">
          <Link href="https://dr-raut-dss.prepvidya.com/learner-dashboard/courses/j579hdykvg16p2an6ykqp87ryn8frpkx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-label-md text-label-md tracking-wider uppercase bg-primary text-on-primary hover:bg-inverse-surface hover:text-inverse-on-surface px-space-md py-space-sm rounded-lg transition-colors duration-150">
            Enroll
          </Link>
          <img alt="DSS Logo" className="w-8 h-8 rounded-full object-cover bg-white" src="/assets/dss-logo.png" />
        </div>
      </div>
    </header>
  );
}
