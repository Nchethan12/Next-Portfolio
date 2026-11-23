"use client";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { DiTechcrunch } from "react-icons/di";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { TbBulbFilled } from "react-icons/tb";

import MobileNavbar from "./SidebarMobile";
import { NavbarMenu } from "./NavbarItems";
import NavbarMobile from "./NavbarMobile";

import { ThemeContext } from "@/context/themeContext";

const Navbar = () => {
  const [top, setTop] = useState("0");
  const [showMenu, setShowMenu] = useState(false);

  const { setThemeFun, theme } = useContext(ThemeContext);

  // Logic for Navbar Hide and Show on scrolling behaviour
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollPos > currentScrollPos) {
        setTop("0"); // Show the navbar
      } else {
        setTop("-80px"); // Hide the navbar
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup: Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      {/* Desktop Header */}
      <div
        className='w-full h-[70px] px-8 bg-[rgba(255,255,255,0.8)] dark:bg-[rgba(0,0,0,0.8)] backdrop-filter backdrop-blur-lg hidden md:flex justify-between items-center gap-4 shadow-sm shadow-gray-300 dark:shadow-gray-800 fixed z-10 transition-all duration-500'
        style={{ top: top }}
      >
        {/* Name Logo */}
        <div className='flex items-center gap-2 font-orbitron'>
          <span className='w-2.5 h-2.5 rounded-sm bg-[#00f0ff] animate-ping' />
          <span className='text-xs text-[#00f0ff] font-mono tracking-widest'>[ 覚醒 ]</span>
          <span className='text-lg font-black tracking-widest text-white'>CHETHAN NAIDU</span>
          <span className='text-[10px] text-[#ff007f] font-mono hidden lg:inline tracking-wider'>// チェタン・ナイドゥ</span>
        </div>
        <div className='h-full flex gap-3 lg:gap-5 items-center font-orbitron'>
          {/* Navbar Links */}
          {NavbarMenu.map((navbar) => (
            <Link
              className={"text-zinc-300 hover:text-[#00f0ff] font-bold text-xs tracking-widest transition-all"}
              href={navbar.link}
              key={navbar.name}
            >
              <div className='h-full pb-1 hover:pb-0 px-2 flex items-center hover:border-b-2 border-[#00f0ff] hover:text-[#00f0ff] transition-all'>
                {navbar.name}
              </div>
            </Link>
          ))}
          {/* Direct Resume Pill */}
          <a
            href='/Chethan_Naidu_Resume.pdf'
            download='Chethan_Naidu_Resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='anime-pill text-[10px] hover:border-[#ff007f] hover:text-[#ff007f] transition-all'
          >
            [ CV.PDF ]
          </a>
        </div>
        {/* Toggle Theme button */}
        <div className='flex items-center gap-4'>
          <button
            className='text-xl text-[#c72c6c] dark:text-[#07d0e5] hover:scale-110'
            onClick={setThemeFun}
          >
            {theme === "dark" ? (
              <TbBulbFilled />
            ) : (
              <BsFillLightningChargeFill />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <NavbarMobile
        setShowMenu={setShowMenu}
        setThemeFun={setThemeFun}
        showMenu={showMenu}
        theme={theme}
        top={top}
      />

      {/* SideMenu For Mobile Screen */}
      <MobileNavbar setShowMenu={setShowMenu} showMenu={showMenu} />
    </Fragment>
  );
};

export default Navbar;
