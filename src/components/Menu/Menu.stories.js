import React from 'react'

import { Button, Menu } from '~/components'

export default {
  title: 'Menu',
}

export const menu = () => {
  return (
    <>
      <Menu activator={(
        <Button label="Activator" />
      )}>
        <Menu.Item onClick={() => {}}>Option 1</Menu.Item>
        <Menu.Item onClick={() => {}}>Option 2</Menu.Item>
        <Menu.Item onClick={() => {}}>Option 3</Menu.Item>
      </Menu>
    </>
  )
}