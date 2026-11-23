import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import About from "@/sections/about";
import Education from "@/sections/education";
import Experience from "@/sections/experience";
const Navbar = dynamic(() => import("@/layout/navbar/Navbar"))
const Footer = dynamic(() => import("@/layout/footer/Footer"))
const Intro = dynamic(() => import("@/sections/Intro"))
const Skills = dynamic(() => import("@/sections/Skills"))
const Projects = dynamic(() => import("@/sections/Projects"))
const Apps = dynamic(() => import("@/sections/Apps"))
const SendMail = dynamic(() => import("@/utils/SendMail"))
const SocialMedia = dynamic(() => import("@/utils/SocialMedia"))
const ChatSystem = dynamic(() => import("@/utils/ChatSystem"))
const Feedback = dynamic(() => import("@/utils/Feedback"))

const Home = () => {

  return (
    <Fragment>
      <Head>
        <title>Chethan Naidu // Software Developer &amp; AI Engineer</title>
        {/* <!-- Primary Meta Tags --> */}
        <meta content="Chethan Naidu - Portfolio &amp; Resume" name="title" />
        <meta content="Portfolio of Chethan Naidu, MCA graduate from NIE College specializing in Python, PyTorch AI/ML, and Full-Stack Web Development." name="description" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta content="website" property="og:type" />
        <meta content="https://github.com/Nchethan12" property="og:url" />
        <meta content="Chethan Naidu // Software Developer &amp; AI Engineer" property="og:title" />
        <meta content="Portfolio of Chethan Naidu, MCA graduate from NIE College specializing in Python, PyTorch AI/ML, and Full-Stack Web Development." property="og:description" />
        <meta content="/images/chethan-portrait.jpg" property="og:image" />

        {/* <!-- Twitter --> */}
        <meta content="/images/chethan-portrait.jpg" property="twitter:card" />
        <meta content="https://github.com/Nchethan12" property="twitter:url" />
        <meta content="Chethan Naidu - Portfolio" property="twitter:title" />
        <meta content="Portfolio of Chethan Naidu, MCA graduate from NIE College specializing in Python, PyTorch AI/ML, and Full-Stack Web Development." property="twitter:description" />
        <meta content="/images/chethan-portrait.jpg" property="twitter:image" />

        {/* <!-- Other Meta Tags --> */}
        <meta content="Chethan Naidu, portfolio, AI Engineer, Python, PyTorch, React.js, Next.js, NIE College, software developer" name="keywords" />
        <meta content="Chethan Naidu" name="author" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        {/* <!-- Favicon --> */}
        <link href="/images/chethan-portrait.jpg" rel="icon" type="image/jpeg" />

      </Head>
      <div>
        <div>
          {/* Desktop Navbar */}
          <Navbar />
          {/* Welcome Page */}
          <Intro />
          {/* About */}
          <About />
          {/* Skills  */}
          <Skills />
          {/* Education */}
          <Education />
          {/* Experience */}
          <Experience />
          {/* Projects */}
          <Projects />
          {/* SocialMedia */}
          <SocialMedia />

          {/* Apps */}
          <Apps />
          {/* Send Mail */}
          <SendMail />
          {/* Footer */}
          <Footer />
          <div className="z-40">
            {/* tawk.to Chat System */}
            <ChatSystem />
          </div>
          {/* Feedback Modal */}
          <Feedback />
        </div>
      </div>
    </Fragment>
  );
}

export default Home
