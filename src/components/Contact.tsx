import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Contact() {
  const { ref } = useSectionInView('Contact', 0.5)
  return (
    <motion.section
      ref={ref}
      id='contact'
      className='mb-20 max-w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28 '
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className='text-gray-700'>
        Please contact me directy at{' '}
        <a
          className='text-slate-600 hover:text-purple-800'
          href='mailto:alicansan2606@gmail.com'
        >
          alicansan2606@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form className='mt-10 flex flex-col' action=''>
        <input
          className='h-14 rounded-lg border border-black/10 px-4 '
          type='email'
          placeholder='Your Email'
        />
        <textarea
          name=''
          id=''
          className='h-52 my-3 rounded-lg border border-black/10 px-2'
          placeholder='Your message'
        ></textarea>
        <button
          type='submit'
          className='group flex place-items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-800 text-white rounded-full outlin-none transition-all hover:bg-gray-900'
        >
          Submit{' '}
          <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 ' />
        </button>
      </form>
    </motion.section>
  )
}
