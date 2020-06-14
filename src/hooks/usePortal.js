import { useLayoutEffect, useState } from 'react'

const modalRoot = document.getElementById('modal-root')

function usePortal() {
  const [el] = useState(document.createElement('div'))
  
  useLayoutEffect(() => {
    modalRoot.prepend(el)
    return () => modalRoot.removeChild(el)
  }, [])

  return el
}

export default usePortal
