import styled, { css } from 'styled-components'

import { shadowMd, shadowSm } from '~/styles/shadows'

const border = props => {
  let color = props.colors.light;

  if (props.hasError) color = props.colors.danger;
  else if (props.disabled) color = props.colors.disabledTint;
  else if (props.isFocused) color = props.colors.primary + ' !important';

  return css`border: 1px solid ${color};`;
}

const TextFieldStyle = styled.div`  
  position: relative;
  border-radius: 4px;
  transition: border-color .2s ease-in-out, box-shadow .2s ease;
  outline: 0;  
  ${border}

  ${({ colors, disabled, hasError, isFocused }) => css`
    background-color: ${disabled ? colors.disabled : colors.bgColor};
    box-shadow: ${isFocused ? shadowMd : shadowSm };

    &::placeholder {
      color: ${hasError ? colors.danger : (disabled ? colors.disabledContrast : colors.primaryTint)};
    }

    ${!hasError && !disabled && css`
    &:hover {    
      border-color: ${colors.lightTint};      
    }
    `}
  `}
`

export default TextFieldStyle