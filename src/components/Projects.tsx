import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading'
import Project from './Project'
import { projectsData } from '@/lib/data'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/ActiveSection'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const { setActiveSection } = useActiveSectionContext()

  useEffect(() => {
    if (inView) {
      setActiveSection('Projects')
    }
  }, [inView, setActiveSection])

  return (
    <section
      ref={ref}
      id='projects'
      className='scroll-mt-28'
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}
