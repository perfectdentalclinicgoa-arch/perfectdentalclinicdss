"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const elementsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set(elementsRef.current, { opacity: 1 });
      return;
    }

    gsap.fromTo(elementsRef.current,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="w-full bg-surface-container-low">
      <div ref={elementsRef} className="max-w-7xl mx-auto px-margin md:px-margin-desktop py-space-xl opacity-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter-desktop items-start">
          <div className="md:col-span-5 flex flex-col">
            <div className="font-headline-sm text-headline-sm tracking-tight text-on-surface">DR RAUT DSS</div>
            <p className="font-label-sm text-label-sm uppercase tracking-[0.16em] text-on-surface-variant mt-space-xs">Digital Smile Simulation</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-md max-w-sm leading-relaxed">Advanced aesthetic calibration and digital smile workflow monograph for postgraduate dental surgeons and prosthodontic clinicians.</p>
          </div>
          <div className="md:col-span-7 flex flex-col md:flex-row md:justify-end gap-space-xl">
            <div className="flex flex-col space-y-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Program</span>
              <nav className="flex flex-col space-y-space-xs">
                <Link href="#course" className="transition-colors text-on-surface font-semibold">Course Overview</Link>
                <Link href="#whos-it-for" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Candidate Criteria</Link>
                <Link href="#how-it-works" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Clinical Workflow</Link>
                <Link href="#curriculum" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Syllabus &amp; Modules</Link>
                <Link href="#enrollment" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Enrollment Portal</Link>
              </nav>
            </div>
            <div className="flex flex-col space-y-space-sm">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">Governance</span>
              <nav className="flex flex-col space-y-space-xs">
                <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Privacy Policy</Link>
                <Link href="#" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Terms &amp; Conditions</Link>
                <Link href="#enrollment" className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors">Institutional Inquiries</Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="mt-space-xl pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-on-surface-variant">
          <p>© 2024 Dr Raut DSS. Clinical monographic rights reserved.</p>
          <p className="tracking-wide uppercase">Postgraduate Aesthetic &amp; Restorative Academy</p>
        </div>
      </div>
    </footer>
  );
}
