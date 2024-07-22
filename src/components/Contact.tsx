'use client'
import React from 'react'
import SectionHeading from './SectionHeading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'
import SubmitButton from './SubmitButton'

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
      <form
        className='mt-10 flex flex-col'
        action={async (formData: FormData) => {
          await sendEmail(formData)
        }}
      >
        <input
          required
          name='senderEmail'
          maxLength={300}
          className='h-14 rounded-lg border border-black/10 px-4 '
          type='email'
          placeholder='Your Email'
        />
        <textarea
          maxLength={3600}
          required
          name='message'
          className='h-52 my-3 rounded-lg border border-black/10 px-2'
          placeholder='Your message'
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  )
}
