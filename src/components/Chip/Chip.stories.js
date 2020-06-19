import React from 'react'
import { text, withKnobs, select } from '@storybook/addon-knobs'

import { PALLETE } from '~/constants'
import { Chip } from '~/components'

export default {
  title: 'Chip',
  decorators: [withKnobs],
}

export const chips = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 15,
      }}
    >
      <Chip>Default chip</Chip>
      <Chip avatar={{ image: 'https://ps.w.org/wp-avatar/assets/icon-256x256.png' }} >
        Avatar chip
      </Chip>
      <Chip onDelete={() => {}}>Delete chip</Chip>
      <Chip
        onDelete={() => {}}
        avatar={{
          image: 'https://ps.w.org/wp-avatar/assets/icon-256x256.png',
        }}
      >
        Avatar delete chip
      </Chip>
      <Chip color="warning">Warning</Chip>
    </div>
  )
}

export const colors = () => {
  return (
    <Chip 
      onDelete={() => {}} 
      color={select('color', PALLETE, null)} 
      bgColor={text('BgColor', '#ad0')} 
      textColor={text('textColor', 'purple')} 
    >
      {text('Content', 'Color chip')}
    </Chip>
  )
}