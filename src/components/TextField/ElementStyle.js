import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { shadowMd, shadowSm } from '~/styles/shadows'

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

const borderColor = props => {
  let color = props.$colors.sub.bg;

  if (props.$error) color = props.$colors.danger_light.bg;
  else if (props.disabled) color = props.$colors.disabled.border;
  else if (props.$isFocused) color = props.$colors.primary_light.bg + ' !important';

  return css`border-color: ${color};`;
}

export const InputStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 4px;
  transition: border-color .2s ease-in-out, box-shadow .2s ease;
  outline: 0;  
  border: 1px solid;
  ${borderColor}

  ${({ $colors, disabled, $error, $isFocused }) => css`
    background-color: ${disabled ? $colors.disabled.bg : $colors.bgColor};
    box-shadow: ${$isFocused ? shadowMd : shadowSm };

    &::placeholder {
      color: ${$error ? $colors.danger : (disabled ? $colors.disabledContrast : $colors.primaryTint)};
    }

    ${!$error && !disabled && css`
    &:hover {    
      border-color: ${$colors.sub.hover};      
    }
    `}
  `}
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