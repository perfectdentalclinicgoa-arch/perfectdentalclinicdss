"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef1 = useRef<HTMLParagraphElement>(null);
  const bodyRef2 = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const tl = gsap.timeline();

    if (prefersReducedMotion) {
      tl.to([eyebrowRef.current, headlineRef.current, bodyRef1.current, bodyRef2.current, ctaRef.current, mainImageRef.current, portraitRef.current, captionRef.current], {
        opacity: 1,
        duration: 0.5,
      });
      return;
    }

    tl.fromTo(eyebrowRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 0.5)
      .fromTo(headlineRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
      .fromTo([bodyRef1.current, bodyRef2.current], { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.1 }, "-=0.5")
      .fromTo(ctaRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, "-=0.4")
      .fromTo(mainImageRef.current, 
        { opacity: 0, scale: 1.04, clipPath: "inset(0 100% 0 0)" }, 
        { opacity: 1, scale: 1, clipPath: "inset(0 0% 0 0)", duration: 1.0, ease: "power3.out" }, "-=0.6")
      .fromTo(portraitRef.current, { opacity: 0, scale: 0.96, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.4")
      .fromTo(captionRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.5");

    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      gsap.to(mainImageRef.current, {
        y: 12,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(portraitRef.current, {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });
    }
  }, { scope: heroRef });

  return (
    <section ref={heroRef} className="w-full bg-surface py-space-xl" id="course">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          
          <div className="lg:col-span-6 flex flex-col space-y-space-md">
            <div ref={eyebrowRef} className="inline-flex items-center gap-2 self-start bg-surface-container px-3 py-1 rounded opacity-0">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" style={{backgroundColor: "#c25e3e"}}></span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Professional Dental Education</span>
            </div>
            <h1 ref={headlineRef} className="font-display text-display text-on-surface font-normal leading-tight opacity-0" style={{color: "#0f4049", fontWeight: 500}}>
              Transform Your Aesthetic Consultations with Digital Smile Simulation
            </h1>
            <p ref={bodyRef1} className="font-body-lg text-body-lg text-on-surface-variant font-normal leading-relaxed opacity-0">
              A practical digital smile design protocol using layered illustration tools on tablets (iPad / Android) and laptops. Create lifelike aesthetic simulations directly over facial photography, tailor each design to your clinical workflow, and select the digital setup that fits you best.
            </p>
            <p ref={bodyRef2} className="font-body-md text-body-md text-on-surface-variant font-normal leading-relaxed opacity-0">
              An essential framework for cosmetic and restorative dentists looking to elevate case presentation, boost acceptance rates on premium treatments, and streamline digital communication with dental laboratories.
            </p>
            <div ref={ctaRef} className="pt-space-sm flex flex-wrap items-center gap-space-lg opacity-0">
              <Link href="https://dr-raut-dss.prepvidya.com/learner-dashboard/courses/j579hdykvg16p2an6ykqp87ryn8frpkx" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider bg-primary text-on-primary hover:bg-inverse-surface hover:text-inverse-on-surface px-space-lg py-3 rounded-lg shadow-sm transition-colors duration-200">
                Enroll
              </Link>
              <Link href="#curriculum" className="inline-flex items-center gap-2 font-body-sm text-body-sm font-semibold text-on-surface hover:text-secondary transition-colors group">
                <span>Explore the Training</span>
                <span className="material-symbols-outlined text-sm transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              <div ref={mainImageRef} className="bg-surface-container-low p-3 md:p-4 rounded-xl shadow-md opacity-0">
                <div className="overflow-hidden rounded-lg bg-surface-container">
                  <img alt="Tablet smile simulation interface displaying dental proportion guides over clinical portrait" className="w-full h-auto object-cover block" src="/assets/hero-backdrop.jpg"/>
                </div>
              </div>
              
              <div ref={portraitRef} className="hidden sm:block absolute -bottom-8 -left-6 w-44 md:w-52 bg-surface-container-lowest p-2 rounded-lg shadow-xl opacity-0">
                <div className="relative aspect-square overflow-hidden rounded">
                  <img alt="Dr. Raut — Digital Smile Simulation Protocol instructor" className="w-full h-full object-cover block" src="/assets/dr-raut-portrait.png"/>
                </div>
                <div className="pt-2 px-1 text-center">
                  <span className="font-label-sm text-label-sm tracking-wider uppercase text-on-surface-variant font-semibold block">Dr. Raut</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant text-[11px] leading-tight block">Aesthetic Dentist</span>
                </div>
              </div>
              
              <div ref={captionRef} className="mt-4 sm:ml-48 text-right sm:text-left flex items-center justify-end sm:justify-start gap-2 opacity-0">
                <span className="w-2 h-px bg-outline-variant"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">
                  Dr. Raut — Digital Smile Simulation Protocol
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
