import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import useTheme from '~/components/Theme/useTheme'
import { GUTTER_FORM } from '~/styles/tokens'
import Flex from '~/components/Grid/Flex'

function FormField({
  error,
  help,
  fill,
  inputField,
  label,
  value,
  onChange,
  ...props
}) {
  const { colors } = useTheme()
  const hasError = !!error
  const disabled = inputField.props.disabled
  const labelColor = hasError ? colors.danger.bg : disabled ? colors.disabled.text : colors.label
  const cloneInput = React.cloneElement(inputField, {
    error: hasError,
    value,
    onChange
  })

  return (
    <Outer fill={fill} {...props}>
      {label && <Label textColor={labelColor}>{label}</Label>}
      {cloneInput}
      {hasError && <Message textColor={colors.danger.text}>{error}</Message>}
      {!!help && <Message textColor={colors.sub.text}>{help}</Message>}
    </Outer>
  )
}

export const gutterMixin = props => props.gutter && css`
  padding-right: ${GUTTER_FORM};
  padding-left: ${GUTTER_FORM};
`

const Outer = styled(Flex).attrs(() => ({
  direction: 'column',
}))`
  margin-bottom: ${GUTTER_FORM};
  ${gutterMixin}
`

const Label = styled.label`
  color: ${props => props.textColor};
  font-weight: bold;
  margin-bottom: 0.2rem;
  padding-left: 0.2rem;
  font-size: 0.9rem;
`

const Message = styled.p`
  font-size: 0.8rem;
  color: ${props => props.textColor};
  margin-top: 0.4em;
  margin-bottom: 0;
`

FormField.displayName = 'FormField'

FormField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
}

export default FormField