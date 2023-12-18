"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in <span className="font-medium">Engineering</span>, I decided to pursue my
        passion for programming. My first work opportunity was at a startup where I learned how to apply programming 
        skill to engineering through modeling of physical systems. I then enrolled in three online certification 
        programs and learned{" "}<span className="font-medium">Full-Stack Web Development</span>{" "}
        as well as <span className="font-medium">Applied Data Science</span>{" "} and
        <span className="font-medium">Machine Learning Foundations</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I{" "}
        <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core
        stack is <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am also familiar with
        TypeScript, Prisma, SQL, Python, Django, and a multitude of related tools. I believe it is important to understand 
        programming on a foundational and principal level and how software interacts with the world, so I have worked 
        to maximize my breadth of skills and knowledge in these tools. I am always looking to learn new technologies. 
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy watching movies, I get creative with my guitar, and I learn and hone new recipes in the kitchen. I am a musician and a student of history.
        <span className="font-medium"> I am constantly learning.</span> I devoutly seek to know more about anything that inspires and moves people, and everything that drives 
        change in the world. This is what motivates me and is the reason I sought to become a software developer in the 
        tech spaces that are changing the world.
      </p>
    </motion.section>
  );
}
