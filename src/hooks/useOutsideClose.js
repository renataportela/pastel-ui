import { useLayoutEffect } from 'react';

function useOutsideClose(elementRef, isOpen, close){
  useLayoutEffect(() => {
    if (!elementRef.current) return;
    if (!isOpen) return;

    const handleClick = e => {
      elementRef.current && !elementRef.current.contains(e.target) && close();
    }

    const handleEsc = e => {
      if (e.key === 'Escape') {
        close();
      }
    }

    document.addEventListener('click', handleClick);
    document.addEventListener('touchstart', handleClick);
    document.addEventListener('keyup', handleEsc);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchstart', handleClick);
      document.removeEventListener('keyup', handleEsc);
    }
  }, [isOpen, close, elementRef]);
}

export default useOutsideClose;