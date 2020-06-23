import { useState, useLayoutEffect } from 'react'

function useToggleAnimation(open, onClose) {
  const [animate, setAnimate] = useState(false)
  const onAnimateClose = () => setAnimate(false)

  const onTransitionEnd = () => {
    if (!animate) onClose()
  }

  useLayoutEffect(() => {
    if (open) {
      setTimeout(function(){ setAnimate(true) }, 0);
    }
    else {
      setAnimate(false)
    }
  }, [open])

  return [animate, onAnimateClose, onTransitionEnd];
}

export default useToggleAnimation