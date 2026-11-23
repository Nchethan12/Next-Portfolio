"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FaBlackTie, FaUserCheck } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import { BsMenuAppFill } from "react-icons/bs";

const About = () => {
  const [isAbout, setIsAbout] = useState(false);

  const aboutRef = useRef();
  const profile2Ref = useRef();
  const aboutInfoRef = useRef();

  // Scroll Animation
  useEffect(() => {
    if (aboutRef.current) {
      const getScreenWidth = () =>
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const aboutObserver = new IntersectionObserver(
        ([aboutEntry]) => {
          setIsAbout(aboutEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      aboutObserver.observe(aboutRef.current);

      if (isAbout) {
        profile2Ref.current.classList.add("slide-in");
        aboutInfoRef.current.classList.add("slide-in");
      } else {
        profile2Ref.current.classList.remove("slide-in");
        aboutInfoRef.current.classList.remove("slide-in");
      }
    }
  }, [isAbout, aboutRef]);

  return (
    <Fragment>
      <section
        className='relative py-12 px-4 sm:px-6 overflow-x-hidden border-t border-b border-[#00f0ff]/10 bg-[#080a17]'
        id='about'
        ref={aboutRef}
      >
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff05_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center pt-4 pb-8 relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#00f0ff] font-bold tracking-widest">[ 自己紹介 ]</span>
            <h2 className="text-3xl md:text-5xl font-orbitron font-black text-white tracking-wider">
              CHARACTER <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff007f]">PROFILE</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-[#ff007f] tracking-widest mt-1">
            // CODENAME: Nchethan12 // STATUS: AWAKENED SOFTWARE ARCHITECT
          </p>
        </div>

        <div className='pb-[30px] px-[20px] md:px-[100px] lg:px-[180px] md:flex items-center gap-[50px] relative z-10'>
          {/* Person Image with Mecha HUD Frame */}
          <div className='m-auto shrink-0 relative'>
            <div className='p-2 rounded-2xl bg-gradient-to-b from-[#00f0ff]/40 via-zinc-800 to-[#ff007f]/40 p-[2px] shadow-[0_0_30px_rgba(0,240,255,0.25)]'>
              <Image
                alt='Chethan Naidu'
                className={
                  "transition-all duration-700 translate-x-[-900px] bg-zinc-900 bg-cover bg-no-repeat rounded-xl object-cover shadow-2xl"
                }
                height={350}
                ref={profile2Ref}
                src='/images/chethan-portrait.jpg'
                width={300}
              />
            </div>
            {/* Holographic Badge */}
            <div className='absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0c0f20] border border-[#00f0ff] rounded-md shadow-[0_0_15px_#00f0ff] text-[10px] font-orbitron font-bold text-[#00f0ff] whitespace-nowrap'>
              [ RANK: S-TIER MCA ]
            </div>
          </div>

          <div
            className='text-lg translate-x-[900px] opacity-0 transition-all duration-700 mt-8 md:mt-0 md:w-[60%] text-center md:text-left'
            ref={aboutInfoRef}
          >
            {/* Full Name */}
            <p className='text-3xl md:text-4xl font-orbitron font-extrabold text-white'>
              Chethan Sreedhar Naidu
            </p>
            {/* Profile Title */}
            <p className='text-sm md:text-base font-orbitron font-bold text-[#00f0ff] mt-1 tracking-wider'>
              ⚡ Software Developer &amp; Applied AI Vision Engineer
            </p>

            {/* Mecha Stat Tiles */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6'>
              
              {/* Location Tile */}
              <div className='p-3 rounded-xl bg-[#0c0f20]/90 border border-[#00f0ff]/30 flex flex-col gap-1 text-left hover:border-[#00f0ff] transition-all'>
                <div className='flex items-center justify-between text-[#00f0ff] font-orbitron text-xs font-bold'>
                  <span>[ 拠点 // BASE ]</span>
                  <ImLocation className='text-[#ff007f]' />
                </div>
                <p className='text-xs text-zinc-300 font-mono'>
                  Near Infosys Gate 2 Industrial Area Hebbal, Mysuru
                </p>
              </div>

              {/* Age Tile */}
              <div className='p-3 rounded-xl bg-[#0c0f20]/90 border border-[#00f0ff]/30 flex flex-col gap-1 text-left hover:border-[#00f0ff] transition-all'>
                <div className='flex items-center justify-between text-[#00f0ff] font-orbitron text-xs font-bold'>
                  <span>[ 年齢 // CHRONO ]</span>
                  <IoPerson className='text-[#ff007f]' />
                </div>
                <p className='text-xs text-zinc-300 font-mono'>
                  22 Years Old (DOB: 2004)
                </p>
              </div>

              {/* Education Tile */}
              <div className='p-3 rounded-xl bg-[#0c0f20]/90 border border-[#00f0ff]/30 flex flex-col gap-1 text-left hover:border-[#00f0ff] transition-all'>
                <div className='flex items-center justify-between text-[#00f0ff] font-orbitron text-xs font-bold'>
                  <span>[ 所属 // GUILD ]</span>
                  <FaBlackTie className='text-[#ff007f]' />
                </div>
                <p className='text-xs text-zinc-300 font-mono'>
                  MCA – NIE College, Mysuru (CGPA: 8.0)
                </p>
              </div>

              {/* Quests Tile */}
              <div className='p-3 rounded-xl bg-[#0c0f20]/90 border border-[#00f0ff]/30 flex flex-col gap-1 text-left hover:border-[#00f0ff] transition-all'>
                <div className='flex items-center justify-between text-[#00f0ff] font-orbitron text-xs font-bold'>
                  <span>[ 召喚術 // ARTIFACTS ]</span>
                  <BsMenuAppFill className='text-[#ff007f]' />
                </div>
                <p className='text-xs text-zinc-300 font-mono'>
                  4+ Major Full-Stack &amp; AI Deployments
                </p>
              </div>

            </div>

            {/* Character Lore / Bio */}
            <div className='mt-6 text-left p-4 rounded-xl bg-[#070913]/90 border-l-4 border-[#00f0ff] shadow-sm'>
              <p className='text-zinc-300 leading-relaxed text-sm font-sans'>
                Aspiring Software Developer with a strong foundation in Python, Data Structures, and Object-Oriented Programming, seeking an opportunity to build scalable applications and grow in a product-based environment. Master of Computer Applications (MCA) graduate from NIE College with hands-on experience building computer vision deep learning pipelines (Vision Transformers, ResNet-50) and full-stack web applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default About;
