"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";

const Intro = () => {
  const [isHome, setIsHome] = useState(false);

  const homeRef = useRef();
  const introRef = useRef();
  const profileRef = useRef();

  // Intersection observer animation on scroll
  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Scroll Animation
    if (homeRef.current) {
      const homeObserver = new IntersectionObserver(
        ([homeEntry]) => {
          setIsHome(homeEntry.isIntersecting);
        },
        {
          rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
        }
      );

      homeObserver.observe(homeRef.current);

      if (isHome) {
        profileRef.current.classList.add("slide-in");
        introRef.current.classList.add("slide-in");
      } else {
        profileRef.current.classList.remove("slide-in");
        introRef.current.classList.remove("slide-in");
      }
    }
  }, [homeRef, isHome]);

  return (
    <Fragment>
      <Head>
        <title>CHETHAN NAIDU // S-Rank Software Developer &amp; AI Engineer</title>
      </Head>
      <section id='home' className="relative overflow-hidden bg-gradient-to-b from-[#070913] via-[#090d1f] to-[#070913]">
        {/* Subtle Cyber Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff08_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Glowing Ambient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00f0ff]/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff007f]/10 rounded-full blur-[130px] pointer-events-none" />

        <div
          className='min-h-[100vh] relative z-10 px-[20px] md:px-[100px] lg:px-[180px] pt-[90px] md:pt-0 md:flex items-center justify-between gap-12'
          ref={homeRef}
        >
          {/* Left Text / HUD Bio */}
          <div
            className='translate-x-[-500px] transition-all duration-700 opacity-0 max-w-xl'
            ref={introRef}
          >
            {/* Japanese Pre-header */}
            <div className='flex items-center gap-2 mb-3'>
              <span className='w-2 h-2 rounded-full bg-[#00f0ff] animate-ping' />
              <span className='font-mono text-xs font-bold text-[#00f0ff] tracking-widest uppercase'>
                // システム起動 // CYBERSPACE INITIALIZED [2026]
              </span>
            </div>

            {/* Main Character Header */}
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-orbitron font-black text-white tracking-tight leading-tight'>
              CHETHAN <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#ff007f]'>NAIDU</span>
            </h1>

            {/* Katakana Subtitle */}
            <p className='font-kanji text-sm text-[#ff007f] font-bold tracking-widest mt-1'>
              チェタン・ナイドゥ // S-RANK DEVELOPER
            </p>

            {/* Profile Role */}
            <div className='py-3 font-orbitron font-bold text-lg md:text-2xl text-zinc-200 flex items-center gap-2'>
              <span>SOFTWARE DEVELOPER &amp;</span>
              <span className='text-[#00f0ff] underline decoration-[#ff007f] underline-offset-4'>
                AI ENGINEER
              </span>
            </div>

            {/* Tactical Mission Brief */}
            <p className='text-sm md:text-base text-zinc-400 leading-relaxed font-sans'>
              Specializing in deep learning computer vision (Vision Transformers, ResNet-50) and high-concurrency full-stack architectures (React, Django, MySQL, Java DSA). Architecting intelligent software platforms from Hebbal, Mysuru.
            </p>

            {/* Mecha Telemetry Badges */}
            <div className='flex flex-wrap gap-2 my-5 font-mono text-[11px]'>
              <span className='anime-pill'>[CLASS: AI WARRIOR]</span>
              <span className='anime-pill'>[CORE: PYTORCH &amp; VIT]</span>
              <span className='anime-pill'>[GUILD: NIE COLLEGE]</span>
              <span className='anime-pill'>[EXP: 8.0 CGPA]</span>
            </div>

            {/* Action Buttons */}
            <div className='mt-6 flex flex-wrap items-center gap-3 font-orbitron'>
              {/* Hire Me Button */}
              <Link
                className='px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider text-black bg-gradient-to-r from-[#00f0ff] to-[#00c8ff] hover:from-[#38bdf8] hover:to-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:shadow-[0_0_30px_rgba(0,240,255,0.8)] transition-all transform hover:-translate-y-0.5'
                href={"#getInTouch"}
              >
                ⚔️ COMMENCE QUEST // HIRE
              </Link>
              {/* Download CV Button */}
              <a
                className='px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider text-[#00f0ff] border border-[#00f0ff]/60 hover:bg-[#00f0ff]/10 hover:border-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all flex items-center gap-1.5'
                href='/Chethan_Naidu_Resume.pdf'
                download='Chethan_Naidu_Resume.pdf'
                target='_blank'
                rel='noopener noreferrer'
              >
                📜 ARCHIVE // RESUME [PDF]
              </a>
              {/* GitHub Button */}
              <a
                className='px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider text-zinc-300 border border-zinc-700 hover:border-[#ff007f] hover:text-[#ff007f] hover:bg-[#ff007f]/10 transition-all'
                href='https://github.com/Nchethan12'
                target='_blank'
                rel='noopener noreferrer'
              >
                ⚡ GITHUB
              </a>
              {/* LinkedIn Button */}
              <a
                className='px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider text-zinc-300 border border-zinc-700 hover:border-[#0072b1] hover:text-[#38bdf8] hover:bg-[#0072b1]/10 transition-all'
                href='https://www.linkedin.com/feed/foryou/'
                target='_blank'
                rel='noopener noreferrer'
              >
                💼 LINKEDIN
              </a>
            </div>
          </div>

          {/* Right: The Legendary One Piece WANTED BOUNTY POSTER */}
          <div
            className='translate-x-[500px] transition-all opacity-0 duration-700 m-auto md:m-0 mt-[40px] md:mt-0 relative'
            ref={profileRef}
          >
            {/* Crackling Conqueror's Haki Aura */}
            <div className='wanted-poster w-[280px] sm:w-[320px] p-5 rounded-lg haki-aura transform hover:rotate-1 hover:scale-105 transition-all duration-300'>
              
              {/* Top Banner: WANTED */}
              <div className='text-center border-b-2 border-[#3b2314] pb-1 mb-3'>
                <h2 className='font-pirate text-5xl sm:text-6xl tracking-widest text-[#241308] leading-none font-black drop-shadow-sm'>
                  WANTED
                </h2>
              </div>

              {/* Photo Box with Beach Photo */}
              <div className='relative w-full h-[270px] sm:h-[310px] border-4 border-[#241308] overflow-hidden bg-[#241308] shadow-inner'>
                <div
                  className='w-full h-full bg-cover bg-no-repeat'
                  style={{
                    backgroundImage: "url(/images/chethan-hero-beach.jpg?v=2)",
                    backgroundPosition: "center 22%",
                  }}
                />
                {/* Marine Stamp / Watermark */}
                <div className='absolute bottom-2 right-2 px-2 py-0.5 rounded bg-red-700/90 text-white font-mono text-[9px] font-black tracking-widest uppercase transform rotate-[-6deg] shadow-lg'>
                  MARINE VERIFIED
                </div>
              </div>

              {/* DEAD OR ALIVE text */}
              <div className='text-center my-2'>
                <p className='font-pirate text-lg sm:text-xl font-bold tracking-widest text-[#241308] leading-tight'>
                  DEAD OR ALIVE
                </p>
              </div>

              {/* Captain Name */}
              <div className='text-center border-b-2 border-[#3b2314] pb-1 mb-2'>
                <h3 className='font-pirate text-2xl sm:text-3xl font-black text-[#1a0f00] tracking-wider leading-none'>
                  CHETHAN NAIDU
                </h3>
              </div>

              {/* Bounty Figure in Berries */}
              <div className='text-center'>
                <p className='font-pirate text-xl sm:text-2xl font-black text-[#851d1d] tracking-wider flex items-center justify-center gap-1'>
                  <span className='font-serif text-2xl'>฿</span>
                  <span>3,000,000,000 -</span>
                </p>
                <p className='text-[8px] font-mono text-[#5a3818] tracking-widest uppercase mt-0.5'>
                  MARINE HEADQUARTERS // REWARD FOR CODE &amp; AI
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </Fragment>
  );
};

export default Intro;
