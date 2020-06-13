import React from 'react'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'

import { Paper } from '~/components'

export default {
  title: 'Paper',
  decorators: [withKnobs],
}

export const paper = () => {
  return (
    <Paper 
      bgColor={text('BgColor', 'white')}
      textColor={text('TextColor', 'currentColor')}
      shadow={select('Shadow', ['xs', 'sm', 'md', 'lg'], 'md')}
      gutter={text('Gutter', '15px')}
      borderColor={text('Border Color', 'sub')}
    >
      {text('Content', 'Paper content')}
    </Paper>
  )
}
