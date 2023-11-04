import { useEffect } from "react"

export const usePreventSwipeback = () => {
  const handler = (e: TouchEvent) => {

    // is not near edge of view, exit
    if (e.touches[0].pageX > 10 && e.touches[0].pageX < window.innerWidth - 10) return;

    // prevent swipe to navigate gesture
    e.preventDefault();
  }

  useEffect(() => {
    const root = document.getElementById('__next')
    root!.addEventListener('touchstart', handler);

    return () => root!.removeEventListener('touchstart', handler)
  }, [])
}