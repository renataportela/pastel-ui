import React, { useState } from 'react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

import { Button, Container, Drawer } from '~/components'

export default {
  component: Drawer,
  title: 'Drawer',
  decorators: [withKnobs],
}

export const drawer = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen(prev => !prev)

  return (
    <Container>
      <Button label="Open Drawer" onClick={handleToggle} />
      <Drawer 
        open={isOpen} 
        close={handleToggle} 
        position={select('Position', ['left', 'right', 'top', 'bottom'], 'left')}
        docked={boolean('Docked', false)}
      >
        <p>Drawer content</p>
        <button onClick={handleToggle}>Close</button>
      </Drawer>
    </Container>
  )
}
