import React from 'react'

export default function Footer() {
  return (
    <footer className='mb-10 px-4 text-center text-gray-500'>
      <small className='mb-2 text-xs block'>
        © 2024 Alican San
      </small>
      <p className='text-xs '>
        <span className='font-semibold'>
          Made with React & NextJs (App Router & Server
          Actions),TypeScript, Tailwind Css, Framer Motion,
          React Email & Resend, Hosted on Vercel{' '}
        </span>{' '}
        by Alican San
      </p>
    </footer>
  )
}
