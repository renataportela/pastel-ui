import React, { useState } from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { TextField } from '~/components'

export default {
  title: 'TextField',
  decorators: [withKnobs],
}

export const textField = () => {
  const [value, setValue] = useState('Some input');
  const handleChange = e => {
    setValue(e.target.value);
  }

  return (
    <TextField 
      placeholder={text('Placeholder', 'Input')} 
      value={value} 
      onChange={handleChange}
      error={boolean('Error', false)}
      disabled={boolean('Disabled', false)}
      rows={number('Rows', null)}
      left={text('Left', '')} 
      right={text('Right', '')} 
    />
  )
}
