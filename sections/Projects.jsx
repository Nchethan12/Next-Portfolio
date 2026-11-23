"use client";
import React, { Fragment, useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { HiExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

import { ProjectsData } from "@/constants";

const Project = () => {
  const [height1, setHeight1] = useState("");
  const [isProjects, setIsProjects] = useState(false);
  const projectRef = useRef();
  const projectBoxesRef = useRef();

  useEffect(() => {
    if (projectRef.current) {
      const projectsObserver = new IntersectionObserver(
        ([projectsEntry]) => {
          setIsProjects(projectsEntry.isIntersecting);
        },
        {
          rootMargin: "-100px",
        }
      );

      projectsObserver.observe(projectRef.current);

      if (isProjects) {
        projectBoxesRef.current.classList.add("pop-up-child");
      } else {
        projectBoxesRef.current.classList.remove("pop-up-child");
      }
    }
  }, [isProjects, projectRef]);

  return (
    <Fragment>
      <section id='project' ref={projectRef} className="py-16 relative bg-[#070913] border-b border-[#00f0ff]/10">
        
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f0ff05_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Section Header */}
        <div className="flex flex-col items-center justify-center pt-4 pb-12 relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-mono text-[#00f0ff] font-bold tracking-widest">[ 開発実績 ]</span>
            <h2 className="text-3xl md:text-5xl font-orbitron font-black text-white tracking-wider">
              MISSION <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#ff007f]">LOGS</span>
            </h2>
          </div>
          <p className="text-xs font-mono text-[#00f0ff] tracking-widest mt-1">
            // PRODUCTION REPOSITORIES &amp; DEPLOYED AI ALGORITHMS
          </p>
        </div>

        <div
          className='min-h-[400px] pop-down-child pb-[30px] flex flex-wrap px-[20px] md:px-[60px] gap-8 justify-center items-stretch relative z-10'
          ref={projectBoxesRef}
        >
          {ProjectsData.map((project, idx) => (
            <div
              className='transition-all duration-700 w-full sm:w-[350px] md:w-[380px] p-5 rounded-2xl bg-[#0c0f20]/90 border border-[#00f0ff]/30 hover:border-[#00f0ff] hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] flex flex-col justify-between group'
              key={project.projectName}
            >
              <div>
                {/* Top Card Bar with Quest Number */}
                <div className='flex items-center justify-between mb-3 font-mono text-xs text-[#00f0ff]'>
                  <span className='font-bold'>[ QUEST 0{idx + 1} ]</span>
                  <span className='text-[10px] text-[#ff007f] font-bold'>// ACTIVE ARTIFACT</span>
                </div>

                {/* Project Image */}
                <div
                  className="w-full h-48 bg-cover bg-center rounded-xl overflow-hidden relative border border-white/10 group-hover:border-[#00f0ff]/50 transition-all"
                  style={{
                    backgroundImage: `url(${project?.projectImage?.imageUrl || ""})`,
                  }}
                >
                  <div className='absolute inset-0 bg-gradient-to-t from-[#0c0f20] via-transparent to-transparent opacity-80' />
                </div>

                {/* Project Title */}
                <h3 className='font-orbitron font-bold text-lg text-white mt-4 group-hover:text-[#00f0ff] transition-colors'>
                  {project.projectName}
                </h3>

                {/* Tech Pills */}
                <div className='flex flex-wrap gap-1.5 mt-3'>
                  {project.techs.map((tech) => (
                    <span
                      className='anime-pill text-[10px]'
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className='mt-5 pt-4 border-t border-[#00f0ff]/20 flex items-center gap-3 font-orbitron'>
                {project.liveUrl && (
                  <Link
                    className='flex-1 py-2 px-3 rounded-lg text-xs font-bold text-black bg-[#00f0ff] hover:bg-white flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all'
                    href={project.liveUrl}
                    target='_blank'
                  >
                    <span>LAUNCH APP</span>
                    <HiExternalLink className='text-sm' />
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    className='flex-1 py-2 px-3 rounded-lg text-xs font-bold text-zinc-300 border border-zinc-700 hover:border-[#ff007f] hover:text-[#ff007f] hover:bg-[#ff007f]/10 flex items-center justify-center gap-1.5 transition-all'
                    href={project.githubUrl}
                    target='_blank'
                  >
                    <BsGithub className='text-sm' />
                    <span>CODE</span>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Project;
