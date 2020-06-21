import React, { forwardRef } from 'react'
import styled from 'styled-components'

import { scaleUp } from '~/styles/transitions'
import { shadowLg } from '~/styles/shadows'

function MenuBox(props, ref) {
  const menuItems = React.Children.map(props.children, (child => React.cloneElement(child, { close: props.close })));

  return (
    <Outer ref={ref} style={props.style}>
      {props.top !== null && (
        <MenuBoxStyle>
          {menuItems}
        </MenuBoxStyle>
      )}
    </Outer>
  );
}

const Outer = styled.div`
  position: absolute;
`

const MenuBoxStyle = styled.div`
  z-index: 100;
  animation: ${scaleUp} .1s;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: ${shadowLg};
`

export default forwardRef(MenuBox)