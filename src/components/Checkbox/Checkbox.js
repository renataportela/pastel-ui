import React from 'react'

import CheckInput from '~/components/CheckInput'

function Checkbox({ onChange, ...props }) {
  const isArray = Array.isArray(props.value)
  const isChecked = isArray
    ? props.value.includes(props.optionValue)
    : '' + props.value === '' + props.optionValue

  const handleChange = selected => {
    if (isArray) {
      if (isChecked) {
        const newValue = [...props.value];
        const index = newValue.indexOf(props.optionValue)

        if (index !== -1) {
          newValue.splice(index, 1)
          onChange(newValue)
        }
      }
      else {
        onChange([...props.value, selected])
      }
    }
    else {
      onChange( isChecked ? null : selected)
    }
  }

  return (
    <CheckInput
      inputType="checkbox"
      isChecked={isChecked}
      onChange={handleChange}
      {...props}
    />
  )
}

export default Checkbox
