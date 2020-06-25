import React, { useEffect, useLayoutEffect, useState } from 'react'

function Animate({ children, open, onClose }) {
  const [animate, setAnimate] = useState(false)

  useLayoutEffect(() => {
    if (open) {
      // starts animation on the next tick
      setTimeout(function(){ setAnimate(true) }, 0);
    }
    else {
      setAnimate(false)
    }
  }, [open])

  if (!open) return null

  return React.cloneElement(children, { 
    className: animate ? 'visible' : '',
  })
}

export default Animate