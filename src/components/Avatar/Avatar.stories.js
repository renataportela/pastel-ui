import React from 'react'
import { select, text, withKnobs } from '@storybook/addon-knobs'

import { Avatar } from '~/components'

const sizeOptions = ['sm', 'md', 'lg', 'xl'];
const kindOptions = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'neutral'];

export default {
  title: 'Avatar',
  decorators: [withKnobs],
}

export const avatar = () => {
  return (
    <Avatar 
      size={select('Size', sizeOptions, 'md')}
      kind={select('Kind', kindOptions, 'primary')}
      text={text('Text', 'Username')} 
      icon={text('Icon', '')} 
      image={text('Image', 'https://image.freepik.com/free-vector/cute-panda-waving-hand-icon-illustration-panda-mascot-cartoon-character-animal-icon-concept-isolated_138676-843.jpg')} 
    />
  )
}

export const sizes = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Avatar size="sm" text="Aleks" kind="secondary" />
      <Avatar size="md" text="Renata" kind="warning" />
      <Avatar size="lg" icon="user" kind="info" />
      <Avatar size="xl" text="Aleks" image="https://image.freepik.com/free-vector/cute-panda-waving-hand-icon-illustration-panda-mascot-cartoon-character-animal-icon-concept-isolated_138676-843.jpg" />
    </div>
  )
}