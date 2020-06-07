import React from 'react'
import { text, withKnobs, boolean } from '@storybook/addon-knobs'

import { Badge, Button, Icon } from '~/components'

export default {
  title: 'Badge',
  decorators: [withKnobs],
}

export const badges = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom: 15,
      }}
    >
      <Badge content="12">badge</Badge>
      <Badge content="12" round kind="info">
        round
      </Badge>
      <Badge
        content={<Icon name="activity" size={16} />}
        bgColor="transparent"
      >
        icon
      </Badge>
      <Badge content="1234">BADGE</Badge>
      <Badge content="1234" kind="warning" textColor="info">
        badge
      </Badge>
      <Badge dot kind="danger">
        <Button label="Button" />
      </Badge>
    </div>
  )
}

export const colors = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom: 15,
      }}
    >
      <Badge content="12" round kind="primary">
        primary
      </Badge>
      <Badge content="12" round kind="secondary">
        secondary
      </Badge>
      <Badge content="12" round kind="success">
        success
      </Badge>
      <Badge content="12" round kind="warning">
        warning
      </Badge>
      <Badge content="12" round kind="danger">
        danger
      </Badge>
      <Badge content="12" round kind="info">
        info
      </Badge>
      <Badge content="12" round kind="sub">
        sub
      </Badge>
      <Badge content="12" round kind="neutral">
        neutral
      </Badge>  
    </div>
  )
}

export const badgeText = () => {
  return (
    <Badge 
      content={text('Badge', 12)} 
      round={boolean('Round', true)}
    >
      {text('Content', 'Content')}
    </Badge>
  )
}