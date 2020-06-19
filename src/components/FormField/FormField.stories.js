import React, { useState } from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { FormField, Input } from '~/components'

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
      inputField={(
        <Input 
          placeholder={text('Placeholder', 'Input')}           
          rows={number('Rows', null)}
          left={text('Left', '')} 
          right={text('Right', '')} 
          disabled={boolean('Disabled', false)} 
        />
      )}
    />
  )
}
