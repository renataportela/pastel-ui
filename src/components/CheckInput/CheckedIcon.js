import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Icon } from '~/components'

function CheckedIcon({ inputType, ...props }) {
  return (
    <Box className="box" inputType={inputType} {...props}>
      {inputType == 'radio' && <RadioIcon {...props} />}
      {inputType == 'checkbox' && <CheckboxIcon {...props} />}
    </Box>
  )
}

const borderColor = props => {
  let color = props.$colors.sub.bg;

  if (props.$error) color = props.$colors.danger_light.bg;
  else if (props.disabled) color = props.$colors.disabled.border;
  else if (props.$isFocused) color = props.$colors.primary_light.bg;
  else if (props.isChecked) color = props.$colors.primary.bg;

  return css`border-color: ${color};`;
}

const Box = styled.div`
  width: 24px;
  min-width: 24px;
  height: 24px;
  min-height: 24px;
  border: 2px solid;
  border-radius: ${props => props.inputType === 'radio' ? '50%' : '4px'};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.2s;
  ${borderColor}
`

const resolveColor = props => {
  return props.isChecked ? (props.$disabled || props.$error ? 'currentColor' : props.$colors.primary.bg) : 'transparent';
}

const RadioIcon = styled.span`
  display: block;
  min-width: 0.8em;
  width: 0.8em;
  height: 0.8em;
  min-height: 0.8em;
  background-color: ${resolveColor};
  transition: background-color 0.2s;
  border-radius: 50%;
`;

const CheckboxIcon = (props) => {
  if (!props.isChecked) return null

  const color = resolveColor(props)

  return <Icon name="check" color={color} strokeWidth={3} />
}

CheckedIcon.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  isFocused: PropTypes.bool.isRequired,
  inputType: PropTypes.string.isRequired,
}

export default CheckedIcon
