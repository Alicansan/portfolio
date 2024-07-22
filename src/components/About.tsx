'use client'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About', 0.5)

  return (
    <motion.section
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
    >
      <SectionHeading>About Me</SectionHeading>
      <p className='mb-3'>
        Close to graduating with a degree in Archaeology, I
        decided to pursue a path in Front-end Development
        and enrolled in a{' '}
        <span className='font-medium'>
          Web Design and Coding
        </span>{' '}
        degree program. In the years following my
        graduation, I diverted my attention to game
        development for a while. After gaining a deeper
        understanding of coding in game development, I
        turned my focus back to web development.{' '}
        <span className='italic'>
          My favorite part of programming is
        </span>{' '}
        overcoming obstacles and the problem-solving aspect.
        The thrill of finally figuring out a solution to a
        problem has always been exciting for me. My core
        stack is{' '}
        <span className='font-medium'>
          React and Next.js
        </span>
        . I am also familiar with TypeScript, TailwindCSS,
        SQL, and Prisma ORM. I am always eager to learn new
        technologies. Currently, I am looking for a{' '}
        <span className='font-medium'>
          full-time position
        </span>{' '}
        as a software developer.
      </p>
      <p>
        <span className='italic'>When I'm not coding</span>,
        I enjoy playing video games, watching movies, and
        running. I also enjoy{' '}
        <span className='font-medium'>
          learning new things and discovering new ideas
        </span>
        . Currently, I am learning about economics and
        finance and reading about Keynes, Friedman.
      </p>
    </motion.section>
  )
}
