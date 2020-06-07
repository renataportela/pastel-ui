import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import ReactDOM from "react-dom";

import { Paper } from '~/pastel-ui';

function Menu({ activator, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState({
    position: 'absolute',
    top: 0,
    left: 0,
  });
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const elRef = useRef();

  const setPosition = ({ left, top, height }) => {
    setStyle({ position: 'absolute', left, top: top + height, backgroundColor: 'yellow' });
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', close);
      return () => window.removeEventListener('click', close);
    }
  }, [isOpen]);

  const mappedChildren = React.Children.map(children, child => {
    if (isOpen) {
      return ReactDOM.createPortal(
        <span onClick={e => e.stopPropagation()} style={style}>
          {React.cloneElement(child)}
        </span>,
        document.body
      );
    }
    return null;
  });

  const clonnedButton = React.cloneElement(activator, { ref: elRef, onClick: open });

  useLayoutEffect(() => {
    const rect = elRef.current.getBoundingClientRect();
    setPosition(rect);
  }, [elRef]);

  return (
    <>
      {clonnedButton}
      {isOpen && (
        {mappedChildren}
      )}
    </>
  );
}

export default Menu;
