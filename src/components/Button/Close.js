import React from 'react'
import styled from 'styled-components'

import useTheme from '~/components/Theme/useTheme'
import Button from './Button'

function Close(props) {
  const { colors } = useTheme()
  return (
    <ButtonStyled icon="x" round kind="outline" colors={colors} {...props} />
  )
}

const ButtonStyled = styled(Button)`
  box-shadow: none;
  border-color: transparent;
  color: currentColor;

  &:hover {
    color: ${props => props.colors.text};
    background-color: ${props => props.colors.transparentDark} !important;
    border-color: transparent !important;
  }
`;

Close.defaultProps = {
  color: 'neutral',
  flat: true,
}

export default Close