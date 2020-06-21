import { useLayoutEffect } from 'react';

function useOutsideClose(elementRef, close){
  useLayoutEffect(() => {
    if (!elementRef.current) return;

    const handleClick = e => {
      elementRef.current && !elementRef.current.contains(e.target) && close(e);
    }

    const handleEsc = e => {
      if (e.key === 'Escape') {
        close(e);
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
  }, [close, elementRef]);
}

export default useOutsideClose;