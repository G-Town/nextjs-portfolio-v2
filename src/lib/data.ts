import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import bedImg from "@/../public/bed_example.png";
import blogImg from "@/../public/blog.png";
import sumzImg from "@/../public/sumz.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated, B.S.",
    location: "University of Wisconsin - Madison",
    description:
      "I graduated with 196 credit hours through the Department of Engineering Physics with double major in Nuclear Engineering and Computer Science.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Software Developer, Data Analyst",
    location: "Chicago, IL",
    description:
      "I worked at a startup LLC called HyperWave where my role was to develop computational fluid dynamics software for the purpose of modeling a given product. I also assessed data output to inform our design process.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2021",
  },
  // {
  //   title: "Independant Content Creation",
  //   location: "Chicago, IL",
  //   description:
  //     "",
  //   icon: React.createElement(FaReact),
  //   date: "2020 - present",
  // },
  {
    title: "Data Science, Software Development Certifications",
    location: "Chicago, IL",
    description:
      "I graduated from 3 bootcamps offered by The University of Michigan, The University of Washington, and Hong Kong University of Technology, earning certificates in Data Science with Python, Machine Learning, and Web Development with React, respectively.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
  {
    title: "Freelance Web Dev, Data Analyst",
    location: "Chicago, IL",
    description:
      "Freelancing contracts for web/software development through services like Upwork.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Fluidized Bed",
    description:
      "I applied Computational Fluid Dynamics through FORTRAN to model a fluidized bed of solids for various air treatment applications.",
    tags: ["FORTRAN", "Matlab", "GNU Compiler"],
    imageUrl: bedImg,
  },
  {
    title: "blog",
    description:
      "Full stack blog web application using a NextJS Node Mongo Prisma stack in Typescript. Fully functioning, up for display while I fill it with content.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: blogImg,
  },
  {
    title: "GPT Summarizer Web App",
    description:
      "I created a web app connected to a LLM api that summarizes user-submitted article in a specified number of paragraphs",
    tags: ["React", "Redux", "Vite", "Tailwind", "Framer"],
    imageUrl: sumzImg,
  },
] as const;

export const devSkillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "REST API",
  "Django",
  "Python",
  "Pandas",
  "Matplotlib",
  "Julia",
  "ScikitLearn",
] as const;

export const engSkillsData = ["Modeling", "CAD", "Mechanics", "Heat Transfer", "Fluid Dynamics"] as const;
