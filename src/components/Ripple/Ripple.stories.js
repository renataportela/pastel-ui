import React from 'react'
import { number, text, withKnobs } from '@storybook/addon-knobs'

import { Ripple } from '~/components'

export default {
  title: 'Ripple',
  decorators: [withKnobs],
}

const KINDS = ['success', 'warning', 'danger', 'info'];

export const ripple = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: 100,
        height: 100,
        border: '1px solid currentColor',
      }}
    >
      <Ripple color={text('Color')} duration={number('Duration')} />
    </div>
  )
}
