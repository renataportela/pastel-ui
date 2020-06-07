import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

import { scale, shadowLg } from '~/pastel-ui/theming';

const Outer = styled.div`
  position: absolute;
`;

const MenuBoxStyle = styled.div`
  z-index: 100;
  animation: ${scale} .1s;
  box-shadow: ${shadowLg};
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MenuBox = forwardRef(function (props, ref){
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
});

export default MenuBox;