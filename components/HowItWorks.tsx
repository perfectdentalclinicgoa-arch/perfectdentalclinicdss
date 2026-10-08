"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const showcaseImageRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set([
        showcaseImageRef.current, 
        stepsContainerRef.current?.children, 
        labelRef.current, headingRef.current, paragraphRef.current
      ], { opacity: 1 });
      return;
    }

    gsap.fromTo(stepsContainerRef.current?.children || [],
      { opacity: 0, x: -15, y: 5 },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: stepsContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    gsap.fromTo(showcaseImageRef.current,
      { opacity: 0, scale: 1.03, clipPath: "inset(0 100% 0 0)" },
      {
        opacity: 1,
        scale: 1,
        clipPath: "inset(0 0% 0 0)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: showcaseImageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      gsap.to(showcaseImageRef.current, {
        y: 15,
        ease: "none",
        scrollTrigger: {
          trigger: showcaseImageRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-surface py-space-xl" id="how-it-works">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop space-y-space-xl">
        <div className="max-w-3xl space-y-space-xs">
          <span ref={labelRef} className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Clinical Architecture</span>
          <h2 ref={headingRef} className="font-headline-lg text-headline-lg text-on-surface font-normal" style={{color: "#0f4049", fontWeight: 500}}>
            Streamlined Digital Planning in Minutes
          </h2>
          <p ref={paragraphRef} className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Learn how to build realistic 2D smile simulations and aesthetic case guides in just a few minutes of straightforward digital work.
          </p>
        </div>
        
        <div className="w-full bg-surface-container-lowest p-space-md md:p-space-lg rounded-xl shadow-sm">
          <div ref={stepsContainerRef} className="grid grid-cols-2 md:grid-cols-4 gap-space-md items-center">
            <div className="flex items-center gap-space-sm opacity-0">
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface font-bold">01</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">Facial Photography</span>
            </div>
            <div className="flex items-center gap-space-sm opacity-0">
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface font-bold">02</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">Digital Planning</span>
            </div>
            <div className="flex items-center gap-space-sm opacity-0">
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container text-on-surface font-bold">03</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">Smile Simulation</span>
            </div>
            <div className="flex items-center gap-space-sm opacity-0">
              <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-primary text-on-primary font-bold" style={{backgroundColor: "#0f4049", color: "#ffffff"}}>04</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold">Aesthetic Case Guide</span>
            </div>
          </div>
        </div>
        
        <div className="w-full bg-surface-container-low rounded-xl overflow-hidden p-space-md md:p-space-lg shadow-sm">
          <div ref={showcaseImageRef} className="overflow-hidden rounded-lg bg-surface-container-highest opacity-0">
            <img alt="Dental planning interface on laptop displaying 2D facial smile design protocol" className="w-full h-auto object-cover block" src="/assets/hero-backdrop.jpg"/>
          </div>
          <div className="mt-space-md flex flex-col md:flex-row md:items-center justify-between gap-space-sm text-on-surface-variant font-body-sm text-body-sm">
            <span>Dual-Device Operatory Setup: 2D Facial Smile Design Interface with Synchronized Procreate / Layer Workflow</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface font-semibold">Native Calibration Protocol</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
          <div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md">
            <div className="space-y-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Course Inclusions</span>
              <h3 className="font-headline-md text-headline-md text-on-surface font-medium">WHAT’S INCLUDED</h3>
            </div>
            <div className="bg-surface-container-low p-space-md rounded-lg space-y-space-xs">
              <span className="font-title-md text-title-md text-on-surface font-semibold block">6 months of On-Demand Access</span>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Study at your own pace from home or the clinic. Replay every practical step until the workflow becomes second nature.
              </p>
            </div>
            <div className="space-y-space-sm pt-space-xs">
              <div className="flex items-center justify-between py-2 bg-surface-container-low/50 px-3 rounded">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Course Language</span>
                <span className="font-body-sm text-body-sm text-on-surface font-semibold">English</span>
              </div>
              <div className="flex items-center justify-between py-2 bg-surface-container-low/50 px-3 rounded">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Delivery Format</span>
                <span className="font-body-sm text-body-sm text-on-surface font-semibold">Self-Paced High-Definition Video</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-space-md">
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary">laptop_mac</span>
                <h4 className="font-title-lg text-title-lg text-on-surface font-semibold uppercase tracking-wide">Desktop / Laptop Compatibility</h4>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Uses accessible, browser-based and free software options—no costly CAD subscriptions needed to get started.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-primary">tablet_mac</span>
                <h4 className="font-title-lg text-title-lg text-on-surface font-semibold uppercase tracking-wide">Tablets (iOS &amp; Android) Compatibility</h4>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Complete walkthrough covering app setup, custom canvas configuration, and downloadable smile template libraries. Utilizing a stylus/pencil gives you rapid, organic control over tooth anatomy and layered designs (using low-cost drawing apps with no recurring monthly subscriptions).
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm pt-space-xs">
              <div className="p-space-sm bg-surface-container-low rounded-lg text-center transition-transform hover:-translate-y-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-on-surface block">Stylus / Pencil Workflow</span>
              </div>
              <div className="p-space-sm bg-surface-container-low rounded-lg text-center transition-transform hover:-translate-y-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-on-surface block">Layered Designs</span>
              </div>
              <div className="p-space-sm bg-surface-container-low rounded-lg text-center transition-transform hover:-translate-y-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-on-surface block">Low-Cost Drawing Apps</span>
              </div>
              <div className="p-space-sm bg-surface-container-low rounded-lg text-center transition-transform hover:-translate-y-1" style={{backgroundColor: "#0f4049", color: "#ffffff"}}>
                <span className="font-label-sm text-label-sm uppercase tracking-wider font-semibold text-on-surface block">No Recurring Subscriptions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
