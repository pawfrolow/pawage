import { IAnimationOptions } from "types/animation.types"

export const slideFromLeft = (options?: IAnimationOptions) => {
  return {
    initial: { x: options?.initialX ?? -300 },
    animate: { x: options?.transitionXTo ?? 0 },
    transition: { duration: options?.duration ?? 0.5 }
  }
}

export const slideFromRight = (options?: IAnimationOptions) => {
  return {
    initial: { x: options?.initialX ?? '100%' },
    animate: { x: options?.transitionXTo ?? 0 },
    transition: { duration: options?.duration ?? 0.5 }
  }
}

export const scaleOnHover = (options?: IAnimationOptions) => {
  return {
    whileHover: { scale: options?.scaleTo ?? 1.1 },
    whileTap: { scale: options?.scaleFrom ?? 0.9 }
  }
}

export const slideFromBottom = (options?: IAnimationOptions) => {
  return {
    initial: { y: options?.initialY ?? '100%' },
    animate: { y: options?.transitionYTo ?? 0 },
    transition: { duration: options?.duration ?? 0.5 }
  }
}

export const switchFadeWithSlide = (options?: IAnimationOptions) => {
  return {
    initial: { y: options?.transitionYFrom ?? 20, opacity: 0 },
    animate: { y: options?.transitionYTo ?? 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
    transition: { duration: options?.duration ?? 0.4 },
  }
}

export const fade = (options?: IAnimationOptions) => {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: options?.duration ?? 0.4 },
  }
}