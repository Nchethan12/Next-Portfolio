"use client";
import React, { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { IoSchoolSharp } from "react-icons/io5";

import { EducationData } from "@/constants/EducationData";

const Education = () => {
  const [isEducation, setIsEducation] = useState(false);
  const educationRef = useRef();
  const educationBoxesRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const educationObserver = new IntersectionObserver(
      ([educationEntry]) => {
        setIsEducation(educationEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
      }
    );

    educationObserver.observe(educationRef.current);

    if (isEducation) {
      educationBoxesRef.current.classList.add("pop-up-child");
    } else {
      educationBoxesRef.current.classList.remove("pop-up-child");
    }
  }, [isEducation]);

  return (
    <Fragment>
      <section
        className='py-16 relative bg-[#070913] border-b border-[#00f0ff]/10 overflow-x-hidden'
        id='education'
        ref={educationRef}
      >
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff05_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center pt-4 pb-10 relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#00f0ff] font-bold tracking-widest">[ 修業履歴 ]</span>
            <h2 className="text-3xl md:text-5xl font-orbitron font-black text-white tracking-wider">
              ACADEMIC <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff007f]">ARC</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-[#ff007f] tracking-widest mt-1">
            // MASTER OF COMPUTER APPLICATIONS // NIE COLLEGE GRADUATE
          </p>
        </div>

        <div
          className='pop-down-child pb-[30px] px-[20px] md:px-[120px] lg:px-[220px] flex flex-col gap-5 relative z-10'
          ref={educationBoxesRef}
        >
          {EducationData.map((education, idx) => (
            <div
              className='transition-all duration-300 p-5 rounded-2xl bg-[#0c0f20]/90 border border-[#00f0ff]/25 hover:border-[#00f0ff] hover:shadow-[0_0_25px_rgba(0,240,255,0.2)] flex flex-col md:flex-row md:items-center justify-between gap-4 group'
              key={education.name}
            >
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 rounded-xl bg-zinc-900 border border-[#00f0ff]/40 flex items-center justify-center text-[#00f0ff] font-mono text-sm font-bold shrink-0 mt-1'>
                  0{idx + 1}
                </div>
                <div>
                  <h3 className='font-orbitron font-bold text-base md:text-lg text-white group-hover:text-[#00f0ff] transition-colors'>
                    {education.name}
                  </h3>
                  <p className='text-zinc-400 font-sans text-xs md:text-sm mt-1'>
                    {education.schoolOrCollege}
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-3 shrink-0 self-start md:self-center font-mono text-xs'>
                <span className='text-zinc-500 font-medium'>{education.fromTo}</span>
                <span className='anime-pill text-xs font-bold border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/10'>
                  {education.statusOrPrecentage}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Education;
