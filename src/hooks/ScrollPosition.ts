import { useRef, useLayoutEffect } from 'react'

const isBrowser = typeof window !== `undefined`

const getScrollPosition = ({ element, useWindow }: { element:any, useWindow: boolean }): { x: number, y: number } =>  {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

type Position = {
    x: number,
    y: number
}

export const useScrollPosition = (effect: any, deps = [], element = false, useWindow = false, wait: number | null = null) => {
  const position = useRef(getScrollPosition({ element, useWindow }))
    console.log('init')
  let throttleTimeout: any = null

  const callBack = () => {
    const curPos = getScrollPosition({ element, useWindow })
    const data: { prevPos: Position, curPos: Position } = { prevPos: position.current, curPos }
    effect(data)
    position.current = curPos
    throttleTimeout = null
  }

  useLayoutEffect(() => {
      console.log('layout')
    if (!isBrowser) {
        console.log('!')
      return
    }

    const handleScroll = () => {
        console.log('handle')
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}
