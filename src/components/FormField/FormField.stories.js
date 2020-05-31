import React, { useState } from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { FormField, TextField } from '~/components'

export default {
  title: 'FormField',
  decorators: [withKnobs],
}

export const formField = () => {
  const [value, setValue] = useState('Some input');
  const handleChange = e => {
    setValue(e.target.value);
  }

  return (
    <FormField 
      label={text('Label', 'Label field')}
      value={value} 
      onChange={handleChange}
      error={text('Error', '')}
      disabled={boolean('Disabled', false)} 
      inputField={(
        <TextField 
          placeholder={text('Placeholder', 'Input')}           
          rows={number('Rows', null)}
          left={text('Left', '')} 
          right={text('Right', '')} 
        />
      )}
    />
  )
}
