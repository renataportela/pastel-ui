import { useState, useLayoutEffect } from 'react'

function useToggleAnimation(open, close) {
  const [animate, setAnimate] = useState(false)
  const onAnimateClose = () => setAnimate(false)

  const onTransitionEnd = () => {
    if (!animate) close()
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