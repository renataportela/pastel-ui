import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { Tag } from '~/components'

export default {
  title: 'Tag',
  decorators: [withKnobs],
}

export const tags = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom: 15,
      }}
    >
      <Tag>Primary</Tag>
      <Tag bgColor="success">Success</Tag>
      <Tag bgColor="warning">Warning</Tag>
      <Tag bgColor="danger">Danger</Tag>
      <Tag bgColor="info">Info</Tag>
      <Tag bgColor="lightgreen" textColor="blue">
        Color
      </Tag>
    </div>
  )
}

export const color = () => {
  return (
    <Tag bgColor={text('BgColor', 'lightgreen')} textColor={text('TextColor', 'blue')}>{text('Content', 'Content')}</Tag>
  )
}
