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
      <Tag kind="success">Success</Tag>
      <Tag kind="warning">Warning</Tag>
      <Tag kind="danger">Danger</Tag>
      <Tag kind="info">Info</Tag>
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
