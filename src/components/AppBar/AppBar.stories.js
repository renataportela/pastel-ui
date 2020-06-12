import React, { useState } from 'react'
import styled from 'styled-components'

import { AppBar } from '~/components'
import Menu from '../Menu/Menu'

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
            <AppBar.Menu label="Login" />
            <AppBar.Menu label="Register" />
          </>
        )}
      />
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        kind="secondary"
        left={<div>left</div>}
        right={
          <AppBar.Menu label="Options">
            <Menu.Item onClick={() => {}}>Option 1</Menu.Item>
            <Menu.Item onClick={() => {}}>Option 2</Menu.Item>
            <Menu.Item onClick={() => {}}>Option 3</Menu.Item>
          </AppBar.Menu>
        }        
      />
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        left={<div>left</div>}
        right={<div>right</div>}
        kind="success"
      />
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        left={<div>left</div>}
        right={<div>right</div>}
        kind="warning"
      />
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        left={<div>left</div>}
        right={<div>right</div>}
        kind="danger"
      />
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        left={<div>left</div>}
        right={<div>right</div>}
        kind="info"
      />
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        left={<div>left</div>}
        right={<div>right</div>}
        kind="neutral"
      />
      <AppBar 
        brand={<span>Brand</span>}
        onToggleMenu={onToggleMenu}
        left={<div>left</div>}
        right={<div>right</div>}
        kind="dark"
      />
    </Container>
  )
}

const Container = styled.div`
  > div {
    margin-bottom: 30px;
  }
`;