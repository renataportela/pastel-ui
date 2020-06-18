import React, { useState } from 'react'
import styled from 'styled-components'

import { AppBar, Menu } from '~/components'

export default {
  title: 'AppBar',
}

export const appBar = () => {
  const [open, setOpen] = useState(false)
  const onToggleMenu = () => setOpen(prev => !prev)

  return (
    <Container>
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        left="left"
        right={(
          <>
            <AppBar.Button label="Login" />
            <AppBar.Button label="Register" />
          </>
        )}
      />
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        color="secondary"
        left={<div>left</div>}
        right={
          <Menu activator={<AppBar.Button label="Options" />}>
            <Menu.Item onClick={() => {}}>Option 1</Menu.Item>
            <Menu.Item onClick={() => {}}>Option 2</Menu.Item>
            <Menu.Item onClick={() => {}}>Option 3</Menu.Item>
          </Menu>
        }        
      />
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        left={<div>left</div>}
        right={<div>right</div>}
        color="success"
      />
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        left={<div>left</div>}
        right={<div>right</div>}
        color="warning"
      />
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        left={<div>left</div>}
        right={<div>right</div>}
        color="danger"
      />
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        left={<div>left</div>}
        right={<div>right</div>}
        color="info"
      />
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        left={<div>left</div>}
        right={<div>right</div>}
        color="neutral"
      />
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        left={<div>left</div>}
        right={<div>right</div>}
        color="dark"
      />
    </Container>
  )
}

const Container = styled.div`
  > div {
    margin-bottom: 30px;
  }
`;