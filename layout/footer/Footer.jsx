import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="p-6 bg-[#070913] border-t border-[#00f0ff]/20 font-orbitron text-xs text-center text-zinc-400 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-5xl mx-auto gap-3">
          <div className="flex items-center gap-2 text-[#00f0ff]">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
            <span className="font-mono text-[11px]">[ 交信終了 // TRANSMISSION LOGGED ]</span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} CHETHAN NAIDU // S-RANK DEVELOPER &amp; AI ENGINEER
          </div>
          <div className="text-[10px] text-zinc-500 font-mono">
            CYBER-SYSTEM RUNTIME v2.6.0
          </div>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
