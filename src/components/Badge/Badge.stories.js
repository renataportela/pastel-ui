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
      <Badge content="12" round color="info">
        round
      </Badge>
      <Badge
        content={<Icon name="activity" size={16} color="red" />}
        bgColor="transparent"
      >
        icon
      </Badge>
      <Badge content="1234">BADGE</Badge>
      <Badge content="1234" color="warning" textColor="info">
        badge
      </Badge>
      <Badge dot color="danger">
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
      <Badge content="12" round color="primary">
        primary
      </Badge>
      <Badge content="12" round color="secondary">
        secondary
      </Badge>
      <Badge content="12" round color="success">
        success
      </Badge>
      <Badge content="12" round color="warning">
        warning
      </Badge>
      <Badge content="12" round color="danger">
        danger
      </Badge>
      <Badge content="12" round color="info">
        info
      </Badge>
      <Badge content="12" round color="sub">
        sub
      </Badge>
      <Badge content="12" round color="neutral">
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