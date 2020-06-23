import { useLayoutEffect } from 'react'

function useEscClose(onClose, isOpen) {
  useLayoutEffect(() => {
    if (!isOpen) return;

    const handleEsc = e => e.key === 'Escape' && onClose()
    document.addEventListener('keyup', handleEsc)

    return () => {
      document.removeEventListener('keyup', handleEsc)
    }
  }, [isOpen, onClose])
}

export default useEscClose