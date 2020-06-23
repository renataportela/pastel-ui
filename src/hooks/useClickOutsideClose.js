import { useLayoutEffect } from 'react'

function useClickOutsideClose(elementRef, close, isOpen){
  useLayoutEffect(() => {
    if (!elementRef.current || isOpen) return

    const handleClick = e => {
      elementRef.current && !elementRef.current.contains(e.target) && close(e)
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('touchstart', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [close, isOpen, elementRef]);
}

export default useClickOutsideClose