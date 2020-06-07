import React from 'react'

import { FormField } from '~/pastel-ui'

function FormItem(props) {
  const { error, label, onChange, value } = props;

  const formField = React.cloneElement(props.field, {
    error,
    value,
    onChange,
  });

  return <FormField label={label}>{formField}</FormField>
}

FormItem.displayName = 'Form.Field'

export default FormItem
