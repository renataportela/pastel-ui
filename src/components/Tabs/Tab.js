import React from 'react';
import styled from '@emotion/styled';

import { Ripple } from '~/pastel-ui';
import { colors, slide } from '~/pastel-ui/theming';

const StyledTab = styled.div(({ active, activeColor, textColor }) => ({
  borderBottom: '2px solid',
  borderBottomColor: active ? activeColor || colors.secondary : 'transparent',
  color: textColor || 'black',
  cursor: active ? 'default' : 'pointer',
  opacity: active ? '1' : '.5',
  padding: '.8em 1.2em',
  position: 'relative',
  textTransform: 'uppercase',
  transition: slide + ', opacity 0.2s ease-in',
  '&:hover': {
    color: 'white',
    opacity: 1,
  },
}));

function Tab(props) {
  const { children, name, onChange, ...rest } = props;
  const handleTabChange = () => onChange(name);
  return (
    <StyledTab {...rest} onClick={handleTabChange}>
      {children || name}
      <Ripple />
    </StyledTab>
  );
}

export default Tab;
