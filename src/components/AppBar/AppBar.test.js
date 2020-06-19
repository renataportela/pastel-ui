import React from 'react'
import renderer from 'react-test-renderer'

import { Theme, AppBar, Menu } from '~/components'

describe('AppBar component', () => {
  it('renders an AppBar with brand Brand, text "left" and a Login button on the right', () => {
    const tree = renderer.create(
      <Theme>
        <AppBar 
          brand={<span>Brand</span>}
          onToggleMenu={() => {}}
          left="left"
          right={(
            <AppBar.Button label="Login" />
          )}
        />
      </Theme>
      ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders an AppBar with brand Brand, text "left" and a menu on the right', () => {
    const tree = renderer.create(
      <Theme>
        <AppBar 
          brand={<span>Brand</span>}
          onToggleMenu={() => {}}
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
      </Theme>
      ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})