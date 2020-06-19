import React from 'react'
import renderer from 'react-test-renderer'

import { Theme, Badge, Button, Icon } from '~/components'

describe('Badge component', () => {
  it('renders text "badge" with badge "1562" and default color', () => {
    const tree = renderer
      .create(<Theme><Badge content="1562">badge</Badge></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders text "round" with round badge "12" and info color', () => {
    const tree = renderer
      .create(<Theme><Badge content="12" round color="info">round</Badge></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders text "icon" with Activity icon in a transparent badge', () => {
    const tree = renderer
      .create(
        <Theme>
          <Badge
            content={<Icon name="activity" size={16} color="red" />}
            bgColor="transparent"
          >
            icon
          </Badge>
        </Theme>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a button with a dot badge with danger color', () => {
    const tree = renderer
      .create(
        <Theme>
          <Badge dot color="danger">
            <Button label="Button" />
          </Badge>
        </Theme>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})