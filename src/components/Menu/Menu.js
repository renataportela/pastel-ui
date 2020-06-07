import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

import useOutsideCloser from '~/pastel-ui/hooks/useOutsideCloser';
import MenuBox from './MenuBox';
import MenuItem from './MenuItem';

function calculatePosition({ left, top, height }, menuWidth, cover) {
  const positionStyle = { top: cover ? top : top + height };

  if (left + menuWidth + 20 <= window.innerWidth) {
    positionStyle.left = left;
  } 
  else {
    positionStyle.right = 0;
  }

  return positionStyle;
}

function Menu({ activator, children, cover }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activatorSize, setActivatorSize] = useState(null);
  const [position, setPosition] = useState({
    top: null,
    left: null,
  });
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const activatorRef = useRef();
  const menuRef = useRef();

  let menuContent = null;

  useOutsideCloser(menuRef, close);

  if (isOpen) {
    menuContent = ReactDOM.createPortal(
      <MenuBox ref={menuRef} style={position} close={close}>
        {children}
      </MenuBox>,
      document.body
    );
  }

  const clonnedButton = React.cloneElement(activator, {
    ref: activatorRef,
    onClick: open,
    className: isOpen ? 'opened' : null,
  });

  useEffect(() => {
    if (isOpen) {
      const menuWidth = menuRef.current.getBoundingClientRect().width;
      setPosition(calculatePosition(activatorSize, menuWidth, cover));
    }
  }, [isOpen]);

  useLayoutEffect(() => {
    if (activatorRef.current) {
      const rect = activatorRef.current.getBoundingClientRect();
      setActivatorSize(rect);
    }
  }, [activatorRef]);

  return (
    <>
      {clonnedButton}
      {menuContent}
    </>
  );
}

Menu.Box = MenuBox;
Menu.Item = MenuItem;

export default Menu;
