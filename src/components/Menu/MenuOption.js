import React from 'react';
import styled from '@emotion/styled';

import { colors } from '~/pastel-ui/theming';
import { shadowInset, textColor, upper } from '~/pastel-ui/mixins';

const MenuItemStyle = styled.button`
  border: 0;
  padding: .8rem 1.2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: 0;
  background-color: white;
  ${textColor}
  ${upper}

  &:hover {
    background-color: ${colors.hightlight_100};
    color: ${colors.blue_900};
  }

  &:focus {
    ${shadowInset};
  }
`;

function MenuOption({ children, close, onClick, ...rest }){
  const handleClick = () => {    
    close();
    onClick();
  };

  return (
    <MenuItemStyle onClick={handleClick} {...rest}>{children}</MenuItemStyle>
  );
}

export default MenuOption;