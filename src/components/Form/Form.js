import React, { useState } from 'react'

import useCloneInput from './useCloneInput'
import FormField from '~/components/FormField'
import FormFields from './FormFields'
import FormButton from './FormButton'

function Form({ errors, onChangeField, values, onSubmit, ...props }) {
  const [submitting, setSubmitting] = useState(false)
  const cloneChild = useCloneInput({ values, errors, onChangeField, submitting })

  const formFields = React.Children.map(props.children, child => {
    if (!child) return null

    switch (child.type.displayName) {
      case 'Form.Button': return React.cloneElement(child, { submitting })

      case 'FormField': return cloneChild(child, child.props.inputField.props.name)
        
      case 'Form.Fields': 
        return React.cloneElement(child, {
          errors,
          values,
          onChangeField,
          submitting
        })

      default: {
        return (child.props.name) ? cloneChild(child, child.props.name) : child;
      }
    }
  })

  const handleSubmit = event => {
    event.preventDefault()
    setSubmitting(true)
    onSubmit(values)
      .then(() => setSubmitting(false))
      .catch(error => {
        setSubmitting(false)
        throw error
      })
  }

  return (
    <form onSubmit={handleSubmit} {...props}>{formFields}</form>
  )
}

Form.defaultProps = {
  errors: {},
  values: {},
}

Form.Button = FormButton
Form.Field = FormField
Form.Fields = FormFields

export default Form
