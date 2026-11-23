"use client";
import React, { Fragment, useRef, useState, useEffect } from "react";
import { ImLocation } from "react-icons/im";

import { ExperienceData } from "@/constants/ExperienceData";

const Experience = () => {
  const [isExpe, setIsExpe] = useState(false);
  const expeRef = useRef();
  const expeBoxesRef = useRef();

  useEffect(() => {
    const expeObserver = new IntersectionObserver(
      ([expeEntry]) => {
        setIsExpe(expeEntry.isIntersecting);
      },
      {
        rootMargin: "-100px",
      }
    );

    if (expeRef.current) {
      expeObserver.observe(expeRef.current);
    }

    if (isExpe && expeBoxesRef.current) {
      expeBoxesRef.current.classList.add("pop-up-child");
    } else if (expeBoxesRef.current) {
      expeBoxesRef.current.classList.remove("pop-up-child");
    }
  }, [isExpe]);

  return (
    <Fragment>
      <section id='experience' ref={expeRef} className="py-16 relative bg-[#080a17] border-b border-[#00f0ff]/10">
        
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff05_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center pt-4 pb-10 relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#00f0ff] font-bold tracking-widest">[ 実戦修業 ]</span>
            <h2 className="text-3xl md:text-5xl font-orbitron font-black text-white tracking-wider">
              MISSIONS &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff007f]">TRAINING</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-[#00f0ff] tracking-widest mt-1">
            // CERTIFIED FULL-STACK DEVELOPMENT &amp; ACADEMIC RESEARCH MISSIONS
          </p>
        </div>

        <div
          className='pop-down-child pb-[30px] px-[20px] md:px-[120px] lg:px-[220px] flex flex-col gap-6 relative z-10'
          ref={expeBoxesRef}
        >
          {ExperienceData.map((experience, index) => (
            <div
              className='p-6 rounded-2xl bg-[#0c0f20]/90 border border-[#00f0ff]/25 hover:border-[#00f0ff] hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] transition-all'
              key={experience.companyName}
            >
              <div className='flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/10 pb-3'>
                <div>
                  <span className='font-mono text-[10px] text-[#ff007f] font-bold tracking-widest'>
                    [ MISSION 0{index + 1} ]
                  </span>
                  <h3 className='font-orbitron font-extrabold text-xl text-white mt-0.5'>
                    {experience.companyName}
                  </h3>
                  <p className='text-sm font-orbitron font-bold text-[#00f0ff] mt-0.5'>
                    {experience.role}
                  </p>
                </div>

                <div className='flex flex-col md:items-end text-xs font-mono text-zinc-400 gap-1'>
                  <span className='anime-pill text-[11px]'>{experience.fromTo}</span>
                  <span className='flex items-center gap-1 text-zinc-400'>
                    <ImLocation className='text-[#ff007f]' /> {experience.location}
                  </span>
                </div>
              </div>

              <p className='mt-4 text-zinc-300 font-sans text-sm leading-relaxed'>
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Experience;
