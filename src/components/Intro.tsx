'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import photo from '@/public/photo.png'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { useSectionInView } from '@/lib/hooks'

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5)

  return (
    <section ref={ref} className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28' id='home'>
      <div className='flex items-center justify-center '>
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
            className='h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl object-cover'
          />
        </motion.div>
      </div>
      <motion.h1
        className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='font-bold'>Hello, I'm Alican.</span> I'm a{' '}
        <span className='font-bold'>Front-End Developer</span> with <span className='font-bold'>1 year</span> of
        experience. I enjoy building <span className='italic'>sites & apps</span>. My focus is{' '}
        <span className='underline'>React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className='flex  flex-col  sm:flex-row gap-3 items-center justify-center text-lg'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link
          href='#contact'
          className='group bg-gray-900 text-white px-4 py-2 rounded-full flex items-center gap-2 
           font-medium outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 
          active:scale-105 transition'
        >
          Contact Me <BsArrowRight className='opacity-70 group-hover:translate-x-1 ' />
        </Link>
        <a
          href='https://docs.google.com/document/d/1stMTRyXrgiUvBUEPhZjAiiYUqLRHJDud/edit?usp=drive_link&ouid=103695135287697822757&rtpof=true&sd=true'
          download={true}
          className='group bg-white text-gray-900 px-7 py-2 rounded-full flex items-center gap-2 
          outline-none focus:scale-110 hover:scale-110  
          active:scale-105 transition border border-black/10'
        >
          Download CV <HiDownload className='group-hover:translate-y-1' />
        </a>
        <a
          className='bg-white text-gray-700 p-4 rounded-full flex items-center gap-2 
          text-[1.25rem] outline-none focus:scale-[1.15] hover:scale-[1.15]  
          active:scale-105 transition border border-black/10 hover:text-gray-950'
          href='https://www.linkedin.com/in/alican-%C5%9Fan-a96abb217/'
          target='_blank'
        >
          <BsLinkedin />{' '}
        </a>
        <a
          className='bg-white text-gray-700 p-4 rounded-full flex items-center gap-2 
          text-[1.25rem] outline-none focus:scale-[1.15] hover:scale-[1.15]  
          active:scale-105 transition border border-black/10 hover:text-gray-950'
          href='https://github.com/Alicansan'
          target='_blank'
        >
          <BsGithub />{' '}
        </a>
      </motion.div>
    </section>
  )
}
