import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useTheme from '~/components/Theme/useTheme'
import TextFieldStyle from './TextFieldStyle'

function TextField({ disabled, error, flat, rows, type, ...props }) {
  const { colors } = useTheme()
  const [isFocused, setIsFocused] = useState(false)
  const hasError = !!error

  const handleFocus = () => setIsFocused(true)
  const handleBlur = () => setIsFocused(false)

  return (
    <Outer hasError={hasError}>
      <TextFieldStyle
        colors={colors}
        hasError={hasError}
        disabled={disabled}
        isFocused={isFocused}
      >
        <InputStyle
          hasError={hasError}
          disabled={disabled}
          colors={colors}
          as={!!rows ? 'textarea' : null}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </TextFieldStyle>

      {hasError && (
        <ErrorMessage textColor={colors.danger}>{error}</ErrorMessage>
      )}
    </Outer>
  )
}

const Outer = styled.div`
  margin-bottom: ${props => props.hasError ? '0.5em' : '1em'};
`

const InputStyle = styled.input`
  outline: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background-color: transparent;
  padding: .7rem .8rem;
  font-size: 1.02rem;
  color: ${props => props.hasError ? props.colors.danger : (props.disabled ? props.colors.disabledContrast : props.colors.text)};
`

const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: ${props => props.textColor};
  margin-top: 0.6em;
`

TextField.defaultProps = {
  kind: 'default',
  error: '',
  type: 'text',
}

TextField.propTypes = {
  error: PropTypes.string,
  flat: PropTypes.bool,
  rows: PropTypes.number,
  type: PropTypes.string,
}

export default TextField
