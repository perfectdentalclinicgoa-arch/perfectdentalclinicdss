"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Curriculum() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowsRef = useRef<Array<HTMLDivElement | null>>([]);

  const modules = [
    { num: "01", title: "Hardware, accessories, and digital workspace setup", category: "Foundation" },
    { num: "02", title: "Mastering layer-based design software on tablet & desktop", category: "Software Engine" },
    { num: "03", title: "Pre-configured aesthetic grid and tooth outline templates", category: "Asset Assets" },
    { num: "04", title: "Building personal custom libraries of dental shapes, textures, and surface anatomy", category: "Library Creation" },
    { num: "05", title: "The consultation playbook: Using digital simulations as an ethical sales and communication tool", category: "Communication" },
    { num: "06", title: "Virtual mock-ups: Simulating composite additions, diastema closures, and aesthetic gingivectomies", category: "Clinical Cases" },
    { num: "07", title: "Step-by-step master protocol from initial portrait photo to final plan", category: "Master Protocol" },
    { num: "08", title: "Laboratory communication: Handing off 2D guides for 3D wax-up predictability", category: "Lab Collaboration" },
  ];

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      rowsRef.current.forEach((row) => {
        if (!row) return;
        const num = row.querySelector(".module-num");
        const title = row.querySelector(".module-title");
        const cat = row.querySelector(".module-cat");
        gsap.set([num, title, cat], { opacity: 1 });
      });
      return;
    }

    rowsRef.current.forEach((row) => {
      if (!row) return;
      const num = row.querySelector(".module-num");
      const title = row.querySelector(".module-title");
      const cat = row.querySelector(".module-cat");

      gsap.fromTo([num, title, cat],
        { opacity: 0, x: -10 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: row,
            start: "top 90%",
            toggleActions: "play none none reverse",
          }
        }
      );
    });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="w-full bg-surface-container-low py-space-xl" id="curriculum">
      <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop space-y-space-lg">
        <div className="max-w-2xl space-y-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Course Modules</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-normal" style={{color: "#0f4049", fontWeight: 500}}>
            Curriculum Breakdown
          </h2>
        </div>
        
        <div className="w-full bg-surface-container-lowest rounded-xl shadow-sm divide-y divide-surface-container overflow-hidden">
          {modules.map((module, idx) => (
            <div 
              key={idx} 
              ref={el => { rowsRef.current[idx] = el }}
              className="group p-space-md md:p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-sm hover:bg-surface-container-low/40 transition-colors"
            >
              <div className="flex items-start md:items-center gap-space-md">
                <span className="module-num opacity-0 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold min-w-[5rem] transition-colors group-hover:text-primary">
                  MODULE {module.num}
                </span>
                <span className="module-title opacity-0 font-title-md text-title-md text-on-surface font-medium transition-transform group-hover:translate-x-1">
                  {module.title}
                </span>
              </div>
              <span 
                className="module-cat opacity-0 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant/70 self-end md:self-auto transition-opacity group-hover:opacity-100" 
                style={idx === 0 ? {color: "#1a5661", fontWeight: 600} : {}}
              >
                {module.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
