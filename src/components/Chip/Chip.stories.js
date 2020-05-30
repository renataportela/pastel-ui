import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'

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
    </div>
  )
}

export const color = () => {
  return (
    <Chip onDelete={() => {}} bgColor={text('BgColor', 'danger')}>{text('Content', 'Color chip')}</Chip>
  )
}