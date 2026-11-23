import { AiFillHtml5 } from "react-icons/ai";
import {
  SiNodedotjs,
  SiNextdotjs,
  SiVercel,
  SiTailwindcss,
  SiPython,
  SiPytorch,
  SiDjango,
  SiFlask,
} from "react-icons/si";
import { DiJavascript1, DiReact } from "react-icons/di";
import { BsGit, BsGithub } from "react-icons/bs";
import { FaBootstrap, FaCss3Alt, FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

export const TechStackData = [
  {
    Advance: [
      {
        name: "Python",
        icon: <SiPython className="md:text-4xl text-2xl" color="#3776ab" />,
      },
      {
        name: "Java",
        icon: <FaJava className="md:text-4xl text-2xl" color="#f89820" />,
      },
      {
        name: "PyTorch & ViT",
        icon: <SiPytorch className="md:text-4xl text-2xl" color="#ee4c2c" />,
      },
      {
        name: "ReactJS",
        icon: <DiReact className="md:text-4xl text-2xl" color="#53c1de" />,
      },
      {
        name: "Django",
        icon: <SiDjango className="md:text-4xl text-2xl" color="#092e20" />,
      },
      {
        name: "Flask",
        icon: <SiFlask className="md:text-4xl text-2xl" color="#000000" />,
      },
      {
        name: "MySQL & SQL",
        icon: <GrMysql className="md:text-4xl text-2xl" color="#4479a1" />,
      },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="md:text-4xl text-2xl" color="#ffd600" />,
      },
      {
        name: "HTML5",
        icon: <AiFillHtml5 className="md:text-4xl text-2xl" color="#fa6700" />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="md:text-4xl text-2xl" color={"#039be5"} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Git",
        icon: <BsGit className="md:text-4xl text-2xl" color="#f4511e" />,
      },
      {
        name: "Github",
        icon: <BsGithub className="md:text-4xl text-2xl" color="#c9d1d9" />,
      },
    ],
    Good: [
      {
        name: "NextJS",
        icon: <SiNextdotjs className="md:text-4xl text-2xl dark:text-white text-black" />,
      },
      {
        name: "NodeJS",
        icon: <SiNodedotjs className="md:text-4xl text-2xl" color="#4caf50" />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className="md:text-4xl text-2xl" color="#673ab7" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel className="dark:text-white text-black md:text-4xl text-2xl" />,
      },
    ],
  },
];

export const SkillsData = TechStackData;
