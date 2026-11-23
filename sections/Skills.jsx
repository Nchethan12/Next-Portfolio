"use client";
import React, { Fragment, useState, useEffect, useRef } from "react";
import { FaLaptopCode } from "react-icons/fa";

import { TechStackData } from "@/constants/SkillsData";

const TechStack = () => {
  const [section, setSection] = useState("Advance");
  const [sectionData, setSectionData] = useState([]);
  const [istechStack, setIsTechStack] = useState(false);
  const techStackRef = useRef();
  const techBoxesRef = useRef();
  const buttonsRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const techStackObserver = new IntersectionObserver(
      ([techStackEntry]) => {
        setIsTechStack(techStackEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-250px"}`,
      }
    );

    techStackObserver.observe(techStackRef.current);

    if (istechStack) {
      techBoxesRef.current.classList.add("pop-up-child");
      buttonsRef.current.classList.add("pop-up");
    } else {
      techBoxesRef.current.classList.remove("pop-up-child");
      buttonsRef.current.classList.remove("pop-up");
    }
  }, [istechStack]);

  useEffect(() => {
    const selectedSection = TechStackData.find((sections) =>
      sections.hasOwnProperty(section)
    );
    setSectionData(selectedSection ? selectedSection[section] : []);

    setTimeout(() => {
      techBoxesRef.current.classList.add("pop-up-child");
    }, 300);
  }, [section]);

  return (
    <Fragment>
      <section
        className='py-16 relative bg-[#080a17] border-b border-[#00f0ff]/10 overflow-hidden'
        id='techStack'
        ref={techStackRef}
      >
        {/* Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff05_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center pt-4 pb-8 relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#00f0ff] font-bold tracking-widest">[ 戦闘能力 ]</span>
            <h2 className="text-3xl md:text-5xl font-orbitron font-black text-white tracking-wider">
              TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff007f]">ARSENAL</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-[#ff007f] tracking-widest mt-1">
            // SPECIALIZED IN: PYTHON, PYTORCH AI/ML, DJANGO, REACT &amp; MYSQL
          </p>
        </div>

        {/* Anime Level Buttons */}
        <div
          className='pop-down transition-all w-fit duration-500 m-auto rounded-xl border border-[#00f0ff]/40 bg-[#0c0f20]/80 p-1 flex gap-2 font-orbitron text-xs font-bold relative z-10 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
          ref={buttonsRef}
        >
          <button
            className={`px-6 py-2.5 rounded-lg transition-all ${
              section === "Advance"
                ? "bg-gradient-to-r from-[#00f0ff] to-[#38bdf8] text-black shadow-[0_0_15px_#00f0ff]"
                : "text-zinc-400 hover:text-white"
            }`}
            onClick={() => {
              setSection("Advance");
              techBoxesRef.current.classList.remove("pop-up-child");
            }}
          >
            [ S-RANK MASTERIES ]
          </button>
          <button
            className={`px-6 py-2.5 rounded-lg transition-all ${
              section === "Good"
                ? "bg-gradient-to-r from-[#ff007f] to-[#f43f5e] text-white shadow-[0_0_15px_#ff007f]"
                : "text-zinc-400 hover:text-white"
            }`}
            onClick={() => {
              setSection("Good");
              techBoxesRef.current.classList.remove("pop-up-child");
            }}
          >
            [ EXPANDED TOOLKIT ]
          </button>
        </div>

        {/* Skills Grid */}
        <div
          className='pop-down-child flex min-h-[380px] py-[30px] px-[20px] md:px-[80px] flex-wrap justify-center items-center gap-4 relative z-10'
          ref={techBoxesRef}
        >
          {sectionData.map((tech) => (
            <div
              className='transition-all duration-300 p-4 w-[110px] md:w-[130px] rounded-2xl bg-[#0c0f20]/90 border border-[#00f0ff]/25 hover:border-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] flex flex-col items-center justify-center gap-2.5 group transform hover:-translate-y-1'
              key={tech.name}
            >
              <div className='p-2 rounded-xl bg-zinc-900/80 border border-white/10 group-hover:border-[#00f0ff]/50 transition-colors'>
                {tech.icon}
              </div>
              <p className='font-orbitron font-bold text-xs text-zinc-200 group-hover:text-[#00f0ff] transition-colors text-center'>
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default TechStack;
