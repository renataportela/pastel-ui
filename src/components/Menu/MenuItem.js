import React from 'react';
import styled from '@emotion/styled';

import { colors, shadowOutline } from '~/pastel-ui/theming';

const MenuItemStyle = styled.button`
  border: 0;
  color: ${colors.textColor};
  display: flex;
  padding: .8rem 1.2rem;
  text-transform: uppercase;
  align-items: center;
  cursor: pointer;
  outline: 0;
  background-color: white;

  &:hover {
    background-color: ${colors.hightlight_100};
    color: ${colors.blue_900};
  }

  &:focus {
    box-shadow: inset ${shadowOutline};
  }
`;

function MenuItem({ children, close, onClick, ...rest }){
  const handleClick = () => {    
    close();
    onClick();
  };

  return (
    <MenuItemStyle onClick={handleClick} {...rest}>{children}</MenuItemStyle>
  );
}

export default MenuItem;