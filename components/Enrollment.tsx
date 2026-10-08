"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Enrollment() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const headerGroupRef = useRef<HTMLDivElement>(null);
  const pricingGroupRef = useRef<HTMLDivElement>(null);
  const couponGroupRef = useRef<HTMLDivElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      gsap.set([
        headerGroupRef.current, pricingGroupRef.current, 
        couponGroupRef.current, ctaGroupRef.current
      ], { opacity: 1 });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(headerGroupRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
      .fromTo(pricingGroupRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")
      .fromTo(couponGroupRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")
      .fromTo(ctaGroupRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5");

  }, { scope: sectionRef });

  const handleCopy = () => {
    navigator.clipboard.writeText("EARLYBIRDS").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <section ref={sectionRef} className="w-full bg-surface py-space-xl" id="enrollment">
      <div className="max-w-4xl mx-auto px-margin md:px-margin-desktop">
        <div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-2xl shadow-xl flex flex-col space-y-space-lg">
          
          <div ref={headerGroupRef} className="text-center space-y-space-xs opacity-0">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
              Institutional Enrollment &amp; Access
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal" style={{color: "#0f4049", fontWeight: 500}}>
              Limited-Time Enrollment Offer
            </h2>
          </div>
          
          <div ref={pricingGroupRef} className="opacity-0 flex flex-col md:flex-row items-center justify-center gap-space-lg py-space-md bg-surface-container-low rounded-xl px-space-lg">
            <div className="text-center md:text-left">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block mb-1">Standard Tuition</span>
              <span className="font-title-lg text-title-lg line-through text-outline font-normal" style={{color: "#9c6c5a"}}>₹22,000</span>
            </div>
            <div className="h-8 w-px bg-outline-variant hidden md:block"></div>
            <div className="text-center md:text-left">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant block mb-1">Special Enrollment Price</span>
              <span className="font-display text-display text-on-surface font-medium tracking-tight" style={{color: "#0f4049", fontWeight: 600}}>₹9,999</span>
            </div>
          </div>
          
          <div ref={couponGroupRef} className="opacity-0 bg-surface-container p-space-md md:p-space-lg rounded-xl flex flex-col sm:flex-row items-center justify-between gap-space-md" style={{backgroundColor: "#f1ede4", border: "1px solid #dfd7c9"}}>
            <div className="space-y-1 text-center sm:text-left">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant font-bold block">
                EARLYBIRD CODE
              </span>
              <span className="font-headline-sm text-headline-sm text-on-surface tracking-widest font-semibold block" style={{color: "#133e48"}}>
                EARLYBIRDS
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Apply this code during enrollment for the early-bird discount.
              </p>
            </div>
            <button 
              onClick={handleCopy}
              className={`inline-flex items-center gap-2 px-space-md py-space-sm rounded-lg font-label-md text-label-md uppercase tracking-wider shadow-sm transition-colors duration-150 ${copied ? "bg-surface-container-high text-on-surface" : "bg-surface-container-lowest text-on-surface hover:bg-surface-container-high"}`}
            >
              <span className="material-symbols-outlined text-sm">{copied ? "check" : "content_copy"}</span>
              <span>{copied ? "Copied!" : "Copy Code"}</span>
            </button>
          </div>
          
          <div ref={ctaGroupRef} className="opacity-0 flex flex-col items-center space-y-space-sm pt-space-xs">
            <a className="w-full max-w-md inline-flex items-center justify-center font-label-md text-label-md uppercase tracking-wider bg-primary text-on-primary hover:bg-inverse-surface hover:text-inverse-on-surface py-3.5 px-space-lg rounded-lg shadow-md transition-colors duration-200" href="https://dr-raut-dss.prepvidya.com/learner-dashboard/courses/j579hdykvg16p2an6ykqp87ryn8frpkx" target="_blank" rel="noopener noreferrer" style={{backgroundColor: "#0f4049", color: "#ffffff"}}>
              Enroll
            </a>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-center max-w-md leading-relaxed">
              Direct on-demand access via secure educational portal. No recurring monthly subscriptions.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
