"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Close to graduating with a degree in Archaeology, I decided to pursue a
        path in Front-end Development and enrolled in a{" "}
        <span className="font-medium">Web Design and Coding</span> degree
        program. After graduating, I explored game development for a while,
        which helped me gain a deeper understanding of programming. Eventually,
        I shifted my focus back to web development, where I found my passion for
        building scalable, high-performance applications.
        <span className="italic"> My favorite part of programming is</span>{" "}
        solving complex UI problems and overcoming technical challenges. I
        thrive in fast-paced environments and love the satisfaction of figuring
        out clean, efficient solutions. My core stack is{" "}
        <span className="font-medium">React and Next.js</span>, and I’m also
        confident with TypeScript, TailwindCSS, SQL, and Prisma ORM. I'm eager
        to continuously learn and adapt to new technologies, especially in
        high-traffic, multi-brand platforms where performance and user
        experience are key. I'm currently looking for a{" "}
        <span className="font-medium">full-time position</span> where I can
        contribute to adaptive front-end architectures, and grow into domains
        like gaming, entertainment, or fintech—particularly in environments that
        present regulatory or technical complexity.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and running. I also love{" "}
        <span className="font-medium">
          learning new things and discovering new ideas
        </span>
        . Currently, I’m sharpening my skills in the Next.js ecosystem with the
        goal of becoming a full-stack developer.
      </p>
    </motion.section>
  );
}
