import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import useTheme from '~/components/Theme/useTheme'
import ElementStyle from './ElementStyle'

function TextField({
  disabled,
  error,
  flat,
  left,
  right,
  rows,
  type,
  onChange,
  ...props
}) {
  const { colors } = useTheme()
  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)
  const handleChange = e => onChange(e.target.value)

  return (
    <ElementStyle
      $colors={colors}
      $error={error}
      disabled={disabled}
      $isFocused={isFocused}
      left={left}
      right={right}
    >
      <InputStyle
        $error={error}
        disabled={disabled}
        $colors={colors}
        as={!!rows ? 'textarea' : null}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />
    </ElementStyle>
  )
}

const InputStyle = styled.input`
  outline: 0;
  flex: 1;
  border: 0;
  background-color: transparent;
  padding: .7rem .8rem;
  font-size: 1.02rem;
  color: currentColor;
  cursor: inherit;

  ${({ $colors, disabled, $error }) => css`
    &::placeholder {
      color: ${$error ? $colors.danger.bg : (disabled ? $colors.disabled.text : $colors.primaryLight.hover)};
    }
  `}
`

TextField.defaultProps = {
  kind: 'default',
  type: 'text',
  value: '',
}

TextField.propTypes = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  flat: PropTypes.bool,
  rows: PropTypes.number,
  type: PropTypes.string,
}

export default TextField
