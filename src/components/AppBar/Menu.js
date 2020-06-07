import React from 'react';
import styled from '@emotion/styled';

import { Menu } from '~/pastel-ui';
import Button from './Button';

const Outer = styled.div`
  height: 100%;
`;

function AppBarMenu(props){
  return (
    <Outer>
      <Menu activator={
        <Button>{props.label}</Button>
      }>
        {props.children}
      </Menu>
    </Outer>
  );
}

export default AppBarMenu;