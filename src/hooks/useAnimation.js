import { useState, useLayoutEffect, useEffect } from 'react'

function useAnimation(open) {
  const [animate, setAnimate] = useState(false)
  const [closing, setClosing] = useState(false)

  const onTransitionEnd = e => {
    if (!open) setClosing(false)
  }

  useLayoutEffect(() => {
    if (open) {
      setTimeout(function(){ setAnimate(true) }, 0);
    }
    else {
      setAnimate(false)
    }
  }, [open])

  useEffect(() => {
    if (!open && animate) {
      setClosing(true)
    }
  }, [animate, open])

  return {
    animating: animate || closing, 
    onTransitionEnd
  };
}

export default useAnimation