import type { SectionName } from './types'
import { useActiveSectionContext } from '@/context/ActiveSection'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

type useSectionInViewProps = {
  SectionName: SectionName
}

export function useSectionInView(
  sectionName: SectionName,
  threshold = 0.75
) {
  const { ref, inView } = useInView({ threshold })
  const {
    activeSection,
    setActiveSection,
    timeOfLastClick,
  } = useActiveSectionContext()

  useEffect(() => {
    if (inView && timeOfLastClick < Date.now() - 1000) {
      setActiveSection(sectionName)
    }
  }, [
    inView,
    setActiveSection,
    timeOfLastClick,
    sectionName,
  ])

  return {
    ref,
  }
}
