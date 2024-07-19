import React from 'react'

interface SectionHeadignProps {
  children: React.ReactNode
}
export default function SectionHeading({
  children,
}: SectionHeadignProps) {
  return (
    <h2 className='text-3xl font-medium capitalize mb-8 text-center '>
      {children}
    </h2>
  )
}
