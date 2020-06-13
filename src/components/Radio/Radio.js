import React from 'react'

import CheckInput from '~/components/CheckInput'

function Radio(props) {
  const isChecked = ''+props.value === ''+props.optionValue

  return (
    <CheckInput inputType="radio" isChecked={isChecked} {...props} />
  )
}

export default Radio
