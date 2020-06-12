import React, { useState } from 'react'

import { Form, RadioButton, TextField } from '~/components'

export default {
  title: 'Form',
}

export const form = () => {
  const [values, setValues] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: '',
    radio: null,
  })

  const handleChangeField = fieldName => value => {
    setValues({
      ...values,
      [fieldName]: value,
    })
  }

  const onSubmit = async values => {
    return await new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log('submitted', values)
        resolve()
      }, 2000)
    })
  }

  return (
    <Form 
      values={values}
      onChangeField={handleChangeField}
      onSubmit={onSubmit}
    >
      <Form.Fields justify="start">
        <Form.Field 
          label="First Name"
          inputField={<TextField name="firstName" />}
        />
        <Form.Field 
          label="Last Name"
          inputField={<TextField name="lastName" />}
          fill
        />
      </Form.Fields>
      
      <Form.Field 
        label="Email"
        inputField={
          <TextField name="email" type="email" placeholder="Email" />
        }
      />

      <Form.Field
        label="Radio"
        inputField={<RadioButton name="radio" optionValue="1" label="Option 1" />}
      />

      <Form.Field
        inputField={<RadioButton name="radio" optionValue="2" label="Option 2" />}
      />

      <Form.Button label="Submit" />
    </Form>
  )
}
