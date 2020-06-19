import React, { useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import useOutsideClose from '~/hooks/useOutsideClose'
import MenuBox from './MenuBox'
import MenuItem from './MenuItem'

function Menu({ activator, children, cover }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activatorSize, setActivatorSize] = useState(null)
  const [position, setPosition] = useState({
    top: null,
    left: null,
  })

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const activatorRef = useRef()
  const menuRef = useRef()

  const clonnedButton = React.cloneElement(activator, {
    ref: activatorRef,
    onClick: open,
    className: isOpen ? 'opened' : null,
  })

  useOutsideClose(menuRef, isOpen, close)

  const menuEl = menuRef.current
  const activatorEl = activatorRef.current

  useLayoutEffect(() => {
    if (activatorEl) {
      setActivatorSize(activatorEl.getBoundingClientRect())
    }
  }, [activatorEl])

  useLayoutEffect(() => {
    if (activatorSize && menuEl) {
      const menuWidth = menuEl.getBoundingClientRect().width
      setPosition(calculatePosition(activatorSize, menuWidth, cover))
    }
  }, [activatorSize, menuEl, cover])

  return (
    <>
      {clonnedButton}
      {isOpen && (createPortal(
        <MenuBox ref={menuRef} style={position} close={close}>
          {children}
        </MenuBox>,
        document.body
      ))}
    </>
  )
}

const PADDING = 5;

function calculatePosition({ left, top, height }, menuWidth, cover) {
  const positionStyle = { top: cover ? top : top + height + PADDING }

  // Activator left position on screen + menuWidth + some padding space
  if (left + menuWidth + 20 <= window.innerWidth) {
    positionStyle.left = left
  } 
  else {
    positionStyle.right = 0
  }

  return positionStyle
}

Menu.Box = MenuBox
Menu.Item = MenuItem

export default Menu
