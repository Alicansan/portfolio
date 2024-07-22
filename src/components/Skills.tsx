'use client'
import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import { delay, motion } from 'framer-motion'
import { init } from 'next/dist/compiled/webpack/webpack'

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
}

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.2)
  return (
    <section
      id='skills'
      ref={ref}
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800 '>
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index % 2 === 0}
            className='bg-white border border-black/[0.1] rounded-xl px-4 py-2 dark:bg-white/10 dark:text-white/80 dark:border-black/40'
            key={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
