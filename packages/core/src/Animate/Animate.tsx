import { HTMLMotionProps, motion, Transition } from 'framer-motion'
import React from 'react'

export type TransitionVariant = 'default' | 'spring' | 'comeAndGo' | 'slow'

export const TransitionVariants: Record<TransitionVariant, Transition> = {
  default: { duration: 0.25, ease: 'easeInOut' },
  spring: { type: 'spring', duration: 0.75, bounce: 0.5 },
  slow: { duration: 3 },
  comeAndGo: { repeat: 1, repeatType: 'reverse', duration: 0.25 },
}

export type MotionVariant =
  | 'expandDown'
  | 'fadeIn'
  // | 'schwoop'
  | 'growFromTopLeft'
  | 'pulse'
  | 'scaleFromCenter'
  | 'scaleFromTopLeft'
  | 'scaleOnHover'
  | 'scaleOnTap'
  | 'slideOutLeft'
  | 'slideInLeft'

export const MotionVariants: Record<MotionVariant, HTMLMotionProps<'div'>> = {
  expandDown: {
    initial: { scaleY: 0, originY: 0, height: 0 },
    animate: { scaleY: 1, height: 'auto' },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  // schwoop: {
  //   initial: { scale: 0, width: 0, height: 0 },
  //   animate: { scale: 1, width: 'auto', height: 'auto' },
  // },
  growFromTopLeft: {
    initial: { scale: 0, originY: 0, originX: 0, width: 0, height: 0 },
    animate: { scale: 1, width: 'auto', height: 'auto' },
  },
  pulse: {
    initial: { borderRadius: '100%', boxShadow: '0 0 0 0px rgba(0, 0, 0, 0.0)' },
    animate: { boxShadow: '0 0 0 4px rgba(0, 0, 0, 0.3)' },
    transition: { duration: 1, repeat: Infinity, repeatType: 'reverse' },
  },
  scaleFromCenter: {
    initial: { scale: 0 },
    animate: { scale: 1 },
  },
  scaleFromTopLeft: {
    initial: { scale: 0, originY: 0, originX: 0 },
    animate: { scale: 1 },
  },
  scaleOnHover: {
    whileHover: { scale: 1.1 },
  },
  scaleOnTap: {
    whileTap: { scale: 0.9 },
  },
  slideOutLeft: {
    initial: { opacity: 1, x: 0 },
    animate: { opacity: 0, x: '-100%' },
  },
  slideInLeft: {
    initial: { opacity: 0, x: '-100%' },
    animate: { opacity: 1, x: 0 },
  },
}

export interface IAnimateProps {
  children: React.ReactNode
  variant: MotionVariant
  transition?: TransitionVariant
  override?: HTMLMotionProps<'div'>
}

export const Animate = (props: IAnimateProps) => {
  const { children, variant, transition, override } = props
  return (
    <motion.div
      transition={TransitionVariants[transition ?? 'default']}
      {...MotionVariants[variant]}
      {...override}
    >
      {children}
    </motion.div>
  )
}
