'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import photo from '@/public/photo.png'
export default function Intro() {
  return (
    <section className=''>
      <div className='flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'tween', duration: 0.5 }}
        >
          <Image
            src={photo}
            alt='photo'
            width={192}
            height={192}
            quality={95}
            priority={true}
            className='h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl'
          />
        </motion.div>
      </div>
      <p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
        <span className='font-bold'>
          Hello, I'm Alican.
        </span>{' '}
        I'm a{' '}
        <span className='font-bold'>
          Front-End Developer
        </span>{' '}
        with <span className='font-bold'>1.5 year</span> of
        experience. I enjoy building{' '}
        <span className='italic'>sites & apps</span>. My
        focus is{' '}
        <span className='underline'>React (Next.js)</span>.
      </p>
    </section>
  )
}
