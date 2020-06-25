import { useLayoutEffect } from 'react'

function useClickOutsideClose(elementRef, onClose, open){
  useLayoutEffect(() => {
    console.log('useClickOutsideClose', open);
    console.log('elementRef.current', elementRef.current);

    if (!elementRef.current || open !== true) return;

    const handleClick = e => {
      elementRef.current && !elementRef.current.contains(e.target) && onClose(e)
    }

    document.addEventListener('click', handleClick)
    document.addEventListener('touchstart', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [onClose, open, elementRef]);
}

export default useClickOutsideClose