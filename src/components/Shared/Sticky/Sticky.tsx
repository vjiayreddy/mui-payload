'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { ReactNode } from 'react'

import { StyledRoot } from './style'

interface StickyProps {
  fixedOn: number;
  children: ReactNode;
  onSticky?: (isSticky: boolean) => void;
  scrollDistance?: number;
}

const Sticky = ({ fixedOn, children, onSticky, scrollDistance = 0 }: StickyProps) => {
  const [height, setHeight] = useState(0)
  const [fixed, setFixed] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const scrollListener = useCallback(() => {
    const isFixed = window.scrollY >= fixedOn + scrollDistance
    if (isFixed !== fixed) setFixed(isFixed)
  }, [fixed, fixedOn, scrollDistance])
  useEffect(() => {
    const handleScrollAndResize = scrollListener
    window.addEventListener('scroll', handleScrollAndResize)
    window.addEventListener('resize', handleScrollAndResize)
    return () => {
      window.removeEventListener('scroll', handleScrollAndResize)
      window.removeEventListener('resize', handleScrollAndResize)
    }
  }, [scrollListener])
  useEffect(() => {
    if (onSticky) onSticky(fixed)
  }, [fixed, onSticky])
  useEffect(() => {
    if (elementRef.current) {
      setHeight(elementRef.current.offsetHeight)
      scrollListener()
    }
  }, [scrollListener])
  return (
    <StyledRoot fixedOn={fixedOn} componentHeight={height} fixed={fixed}>
      <div
        ref={elementRef}
        className={clsx({
          hold: !fixed,
          fixed: fixed,
        })}
      >
        {children}
      </div>
    </StyledRoot>
  )
}

export default Sticky
