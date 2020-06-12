import React, { useLayoutEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

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

  let menuContent = null

  if (isOpen) {
    menuContent = ReactDOM.createPortal(
      <MenuBox ref={menuRef} style={position} close={close}>
        {children}
      </MenuBox>,
      document.body
    )
  }

  const clonnedButton = React.cloneElement(activator, {
    ref: activatorRef,
    onClick: open,
    className: isOpen ? 'opened' : null,
  })

  useOutsideClose(menuRef, close)

  useLayoutEffect(() => {
    if (activatorRef.current) {
      const rect = activatorRef.current.getBoundingClientRect();
      setActivatorSize(rect)
    }
  }, [activatorRef])

  useLayoutEffect(() => {
    if (isOpen && activatorSize) {
      console.log('activatorSize', activatorSize);
      const menuWidth = menuRef.current.getBoundingClientRect().width;
      console.log('menuWidth', menuWidth);
      setPosition(calculatePosition(activatorSize, menuWidth, cover));
    }
  }, [isOpen, activatorSize])

  return (
    <>
      {clonnedButton}
      {menuContent}
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
