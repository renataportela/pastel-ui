import React, { useState } from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Input } from '~/components'

export default {
  title: 'Input',
  decorators: [withKnobs],
}

export const input = () => {
  const [value, setValue] = useState('Some input');
  const handleChange = e => {
    setValue(e.target.value);
  }

  return (
    <Input 
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
