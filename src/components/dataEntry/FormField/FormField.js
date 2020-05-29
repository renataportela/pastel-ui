import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import useTheme from '~/components/layout/Theme/useTheme'

function FormField({ error, label, name, inputField, value, onChange, ...props }) {
  const { colors } = useTheme()
  const hasError = !!error;
  const labelColor = hasError ? colors.danger : 'inherit';
  const cloneInput = {
    ...inputField,
    props: {
      ...inputField.props,
      name,
      error: hasError,
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
  color: ${props => props.hasError ? 'red' : 'inherit'};
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