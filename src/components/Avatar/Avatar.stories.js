import React from 'react'

import { Avatar } from '~/components'

export default {
  title: 'Avatar',
}

export const sizes = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
      <Avatar size="sm" text="Aleks" color="secondary" />
      <Avatar size="md" text="Renata" color="warning" />
      <Avatar size="lg" icon="user" color="info" />
      <Avatar size="xl" text="Aleks" image="https://image.freepik.com/free-vector/cute-panda-waving-hand-icon-illustration-panda-mascot-cartoon-character-animal-icon-concept-isolated_138676-843.jpg" />
    </div>
  )
}