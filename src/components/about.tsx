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
        After graduating with a degree in <span className="font-medium">Engineering and Computer Science</span>
        {/* , I decided to pursue my passion for programming. */}, I devoted myself to innovation through software so
        that I might marry my knowledge of engineering with all the skills I have since aquired in programming. My
        mission is to accelerate the coupling of engineering to the flourishing innovation happening now in{" "}
        <span className="font-medium">Software and Tech.</span>{" "}
      </p>

      <p className="mb-3">
        At Hyperwave Solutions I was introduced to the development of computational solutions and modeling of fluid 
        systems through programming. Our mission was to create new poroducts and patented technology by an iterative 
        design process powereed by software. My responsibilities included developing the software by applying the 
        axioms of fluid dynamics analyzing the data with visualization in Matlab, and iterating the design based on 
        results.
        {/* was at a startup where I learned how to apply programming skill to engineering through */}
        {/* modeling of physical systems. */}
        </p>
        <p className="mb-3">
        Since then, I have completed various bootcamps and accredited certification programs{" "}
        <span className="font-medium">Full-Stack Web Development</span> as well as{" "}
        <span className="font-medium">Applied Data Science</span> and
        <span className="font-medium"> Machine Learning Foundations</span>.{" "}
        {/* <span className="italic">My favorite part of programming</span> is the problem-solving aspect. I{" "} */}
        {/* <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. */}
        My core stack is <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am also familiar
        with TypeScript, Prisma, SQL, Python, Django, and a multitude of related tools. I believe it is important to
        understand programming on a foundational and principal level and how software interacts with the world, so I
        have worked to maximize my breadth of skills and knowledge in these tools. I am always looking to learn new
        technologies. I am currently looking for a <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I hit the gym, I get creative with my
        guitar, and I learn and hone new recipes in the kitchen. I am movie buff and a student of history.
        <span className="font-medium"> I am constantly learning.</span> I devoutly seek to know more about anything that
        inspires and moves people, and everything that drives change in the world. This is what motivates me and is the
        reason <span className="font-medium">I pursue software development in the tech spaces that are changing the 
        world.</span>
      </p>
    </motion.section>
  );
}
