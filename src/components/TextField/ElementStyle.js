import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { shadowOutline } from '~/styles/shadows'

function ElementStyle({ children, left, right, ...props }) {
  return (
    <InputStyle {...props}>
      {left && <LeftSlot>{left}</LeftSlot>}
      {children}
      {right && <RightSlot>{right}</RightSlot>}
    </InputStyle>
  );
}

const LeftSlot = styled.div`
  margin-right: 8px;
`;

const RightSlot = styled.div`
  margin-left: 8px;
`;

export const inputStyles = css`
  display: flex;
  flex-direction: row;  
  align-items: center;
  transition: border-color .2s ease-in-out, box-shadow .2s ease;
  outline: 0;  
  border: 2px solid;  

  ${({ $colors, disabled, $error, $isFocused }) => css`
    cursor: ${disabled ? 'not-allowed' : 'default'};
    border-color: ${$error 
      ? $colors.danger_light.bg 
      : (disabled ? $colors.input.disabledBorder : 
        ($isFocused ? $colors.input.borderFocused : $colors.input.border))
      };
    background-color: ${$isFocused ? $colors.bgColor : $colors.input.bg};    
    color: ${$error ? $colors.danger.hover : (disabled ? $colors.disabled.text : $colors.input.text)};    

    ${!$error && !disabled && css`
    &:hover {    
      border-color: ${$colors.input.borderHover};
    }
    `}
  `}
`;

const InputStyle = styled.div`  
  justify-content: space-between;
  position: relative;
  border-radius: 6px;
  box-shadow: ${props => props.$isFocused ? shadowOutline : 'none' };
  ${inputStyles}
`

ElementStyle.propTypes = {
  $colors: PropTypes.object,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  $isFocused: PropTypes.bool,
  left: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  right: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
}

export default ElementStyle