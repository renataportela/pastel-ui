import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useTheme from '~/components/Theme/useTheme'

function FormField({ disabled, error, inputField, label, name, value, onChange, ...props }) {
  const { colors } = useTheme()
  const hasError = !!error;
  const labelColor = hasError ? colors.dangerTint : (disabled ? colors.disabledContrast : 'inherit' );
  const cloneInput = {
    ...inputField,
    props: {
      ...inputField.props,
      name,
      error: hasError,
      disabled,
      value,
      onChange
    }
  };

  return (
    <Outer {...props}>
      {label && <Label textColor={labelColor}>{label}</Label>}
      {cloneInput}
      {hasError && (
        <ErrorMessage textColor={colors.danger}>{error}</ErrorMessage>
      )}
    </Outer>
  )
}

const Outer = styled.div`
  margin-bottom: 8px;
`

const Label = styled.label`
  color: ${props => props.textColor};
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: ${props => props.textColor};
  margin-top: 0.4em;
  margin-bottom: 0;
`

FormField.displayName = 'FormField'

FormField.propTypes = {
  error: PropTypes.string,
  label: PropTypes.string,
}

export default FormField