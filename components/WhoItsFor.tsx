"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhoItsFor() {
  const sectionRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set([eyebrowRef.current, headingRef.current, cardsRef.current?.children], { opacity: 1 });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(eyebrowRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
      .fromTo(headingRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.58");

    gsap.fromTo(cardsRef.current?.children || [], 
      { opacity: 0, y: 25 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "power3.out", 
        stagger: 0.15,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-surface-container-low py-space-xl" id="whos-it-for">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
        <div className="flex flex-col space-y-space-xs mb-space-lg">
          
          <h2 ref={headingRef} className="opacity-0 font-headline-lg text-headline-lg text-on-surface font-normal" style={{color: "#0f4049", fontWeight: 500}}>
            This course is for you if:
          </h2>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
          <div className="opacity-0 p-space-lg md:p-space-xl flex flex-col justify-between space-y-space-md bg-surface-container-lowest hover:bg-surface-container-low/40 transition-colors duration-200">
            <div>
              <span className="font-headline-lg text-headline-lg font-light text-on-surface-variant/40 block mb-space-sm" style={{color: "#b45309", opacity: 1, fontWeight: 400}}>
                01
              </span>
              <h3 className="font-title-lg text-title-lg text-on-surface uppercase tracking-wide font-semibold mb-space-sm">
                Master Aesthetic Diagnostics
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                You want a reproducible, guided workflow to plan aesthetic cases with confidence, bridging the gap between photographic planning, diagnostic wax-ups, and chairside mock-ups.
              </p>
            </div>
            <div className="pt-space-md flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">straighten</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider">Predictable Wax-Up Bridging</span>
            </div>
          </div>
          
          <div className="opacity-0 p-space-lg md:p-space-xl flex flex-col justify-between space-y-space-md bg-surface-container-lowest hover:bg-surface-container-low/40 transition-colors duration-200">
            <div>
              <span className="font-headline-lg text-headline-lg font-light text-on-surface-variant/40 block mb-space-sm" style={{color: "#b45309", opacity: 1, fontWeight: 400}}>
                02
              </span>
              <h3 className="font-title-lg text-title-lg text-on-surface uppercase tracking-wide font-semibold mb-space-sm">
                Elevate Case Acceptance
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                You want to turn consultations into booked treatments. High-fidelity smile simulations captivate patients during their very first visit, helping them visualize their final results while keeping your clinical workflow predictable and efficient.
              </p>
            </div>
            <div className="pt-space-md flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">visibility</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest">Chairside Conversion</span>
            </div>
          </div>
          
          <div className="opacity-0 p-space-lg md:p-space-xl flex flex-col justify-between space-y-space-md bg-surface-container-lowest hover:bg-surface-container-low/40 transition-colors duration-200">
            <div>
              <span className="font-headline-lg text-headline-lg font-light text-on-surface-variant/40 block mb-space-sm" style={{color: "#b45309", opacity: 1, fontWeight: 400}}>
                03
              </span>
              <h3 className="font-title-lg text-title-lg text-on-surface uppercase tracking-wide font-semibold mb-space-sm">
                Predict Clinical Outcomes
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                You want clear visualization and precision before touching a bur—whether for porcelain veneers, composite bonding, direct mock-ups, or cosmetic periodontal recontouring.
              </p>
            </div>
            <div className="pt-space-md flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">verified</span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest">Subtractive &amp; Additive Accuracy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
