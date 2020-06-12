import React from 'react'
import styled, { css } from 'styled-components'

import { GUTTER_FORM } from '~/styles/params'
import useCloneInput from './useCloneInput'
import Flex from '~/components/Grid/Flex'

function FormFields({ errors, onChangeField, submitting, values, ...props }) {
  const gutter = React.Children.count(props.children) > 1
  const cloneChild = useCloneInput({ values, errors, onChangeField, submitting, gutter })

  const formFields = React.Children.map(props.children, child => {
    if (!child) return null

    switch (child.type.displayName) {
      case 'Form.Button': return React.cloneElement(child, { submitting });
      case 'FormField': {
        return cloneChild(child, child.props.inputField.props.name)
      }
      default: return (child.props.name) ? cloneChild(child, child.props.name) : child;
    }
  })

  return (
    <Outer $gutter={gutter} {...props}>{formFields}</Outer>
  )
}

const Outer = styled(Flex)`
  ${props => props.$gutter && css`
    margin-right: -${GUTTER_FORM};
    margin-left: -${GUTTER_FORM};
  `}
`

FormFields.displayName = 'Form.Fields'

export default FormFields
