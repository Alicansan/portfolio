'use client'
import { certificatesData } from '@/lib/data'
import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index },
  }),
}

export default function Certificates() {
  const { ref } = useSectionInView('Certificates', 0.2)
  return (
    <section
      ref={ref}
      id='certificates'
      className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'
    >
      <SectionHeading>Certificates</SectionHeading>
      <ul>
        {certificatesData.map((certificate, index) => (
          <a
            key={index}
            href={certificate.url}
            className='mt-4'
            target='_blank '
          >
            <motion.li
              variants={fadeInAnimationVariants}
              initial='initial'
              whileInView='animate'
              viewport={{
                once: true,
              }}
              key={index}
              className='visited:text-purple-600 text-gray-500 flex flex-col items-center hover:scale-105 transition-transform hover:text-slate-900'
            >
              <p className='mt-4 text-center'>
                {certificate.title}
              </p>
            </motion.li>
          </a>
        ))}
      </ul>
    </section>
  )
}
