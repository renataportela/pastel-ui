import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { useTheme } from '~/components'
import { InputStyle } from '~/components/TextField/ElementStyle'
import CheckedIcon from './CheckedIcon'

function RadioButton({
  children,
  disabled,
  label,
  name,
  value,
  optionValue,
  onChange,
  ...props
}) {
  const { colors } = useTheme()
  const [isFocused, setIsFocused] = useState(false)
  const inputEl = useRef(null)
  const labelColor = props.error ? colors.danger.bg : (disabled ? colors.disabled.text : colors.text)
  const isChecked = ''+value === ''+optionValue

  const onFocus = () => setIsFocused(true)
  const onBlur = () => setIsFocused(false)

  let classNames = []

  if (isChecked) classNames.push('selected')
  if (isFocused) classNames.push('focused')

  const onClick = () => {
    if (!disabled && onChange) {
      inputEl.current.checked = isChecked
      inputEl.current.focus()
      onChange(optionValue)
    }
  }

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.checked = isChecked
    }
  }, [inputEl, isChecked])

  return (
    <Outer
      $colors={colors}
      onClick={onClick}
      className={classNames}
      $disabled={disabled}
      {...props}
    >
      <HiddenInputContainer>
        <input
          name={name}
          ref={inputEl}
          type="radio"
          value={optionValue}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </HiddenInputContainer>

      <CheckedIcon         
        inputType="radio" 
        isChecked={isChecked}
        isFocused={isFocused}
        $colors={colors}
        {...props} 
      />

      {label && <Label textColor={labelColor}>{label}</Label>}
    </Outer>
  )
}

const Label = styled.span`
  margin-left: 8px;
  color: ${props => props.textColor};
`

const Outer = styled.div`
  user-select: none;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: border-color .2s ease-in-out, box-shadow .2s ease;
  cursor: ${props => props.$disabled ? 'default' : 'pointer'};
  ${props => !props.$disabled && css`
    &:hover > .box {
      border-color: ${props.$error ? 'currentColor' : props.$colors.primary_light.bg};
    }
  `}
`

// const RadioButtonStyle = styled(InputStyle)`
//   padding: .6rem .8rem;

//   &.selected {
//     background-color: ${props => props.$colors.secondary.bg} !important;
//     color: ${props => props.$colors.primary.bg};
//   }

//   &:hover:enabled,
//   &:hover:not(.disabled) {
//     cursor: pointer;
//   }
// `

const HiddenInputContainer = styled.div`
  border: 0;
  padding: 0;
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
`
const VALUE_INPUT_TYPES = [
  PropTypes.string,
  PropTypes.number,
  PropTypes.array,
  PropTypes.object,
  PropTypes.bool,
]

RadioButton.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  optionValue: PropTypes.oneOfType(VALUE_INPUT_TYPES).isRequired,
  value: PropTypes.oneOfType(VALUE_INPUT_TYPES),
}

export default RadioButton
