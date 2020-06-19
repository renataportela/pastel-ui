import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { Flex, useTheme } from '~/components'
import CheckedIcon from './CheckedIcon'
import { shadowOutline } from '~/styles/shadows'
import { INPUT_PROPS } from '~/components/Input'

function CheckInput({
  children,
  disabled,
  inputType,
  isChecked,
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
    <Flex inline>
      <Inner
        $colors={colors}
        onClick={onClick}
        className={classNames}
        $disabled={disabled}
        isFocused={isFocused}
        {...props}
      >
        <HiddenInputContainer>
          <input
            name={name}
            ref={inputEl}
            type={inputType}
            value={optionValue}
            onBlur={onBlur}
            onFocus={onFocus}
          />
        </HiddenInputContainer>

        <CheckedIcon         
          inputType={inputType}
          isChecked={isChecked}
          isFocused={isFocused}
          $colors={colors}
          {...props} 
        />

        {label && <Label textColor={labelColor}>{label}</Label>}
      </Inner>
    </Flex>
  )
}

const Label = styled.span`
  margin-left: 8px;
  color: ${props => props.textColor};
`

const Inner = styled.div`
  transition: box-shadow .2s ease;  
  cursor: ${props => props.$disabled ? 'default' : 'pointer'};
  box-shadow: ${props => props.isFocused ? shadowOutline : 'none'};
  border-radius: 4px;
  padding: 2px;
  user-select: none;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  ${props => !props.$disabled && css`
    &:hover > .box {
      border-color: ${props.$error ? 'currentColor' : props.$colors.primaryAlt.bg};
    }
  `}
`

export const HiddenInputContainer = styled.div`
  border: 0;
  padding: 0;
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
`

CheckInput.propTypes = {
  ...INPUT_PROPS,
  inputType: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  isChecked: PropTypes.bool.isRequired,  
}

export default CheckInput
