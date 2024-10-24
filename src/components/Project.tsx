'use client'
import { projectsData } from '@/lib/data'
import React, { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

type ProjectData = (typeof projectsData)[number]

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectData) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='group mb-3 sm:mb-7 last:mb-0'
    >
      <section className=' bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:max-h-[32rem] sm:h-[24rem]  hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20'>
        <Link href={link} target='_blank'>
          <div className='py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-8 sm:max-w-[58%] flex flex-col h-full sm:group-even:ml-[17.4rem]'>
            <h3 className='text-2xl font-semibold '>{title}</h3>
            <p className='mt-2 leading-relaxed text-gray-700 dark:text-white/70'>
              {description}
            </p>
            <ul className='flex flex-wrap  gap-2 mt-auto'>
              {tags.map((tag, index) => (
                <li
                  className='bg-black/[0.7] px-3 py-1 uppercase tracking-wider text-white rounded-full text-xs'
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src={imageUrl}
            alt={title}
            quality={90}
            className='relative sm:absolute top-8 sm:-right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
          group-even:right-[initial] sm:group-even:-left-40 group-hover-scale-110
          group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 transition
          group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 '
          />
        </Link>
      </section>
    </motion.div>
  )
}
