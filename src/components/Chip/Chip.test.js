import React from 'react'
import renderer from 'react-test-renderer'

import { Theme, Chip } from '~/components'

describe('Chip component', () => {
  it('renders a chip with default color and close button', () => {
    const tree = renderer
      .create(<Theme><Chip onDelete={() => {}}>Default</Chip></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a chip with an Avatar image', () => {
    const tree = renderer
      .create(
        <Theme>
          <Chip avatar={{ image: 'https://ps.w.org/wp-avatar/assets/icon-256x256.png' }}>
            Avatar
          </Chip>
        </Theme>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a chip with warning color', () => {
    const tree = renderer
      .create(
        <Theme>
          <Chip color="warning">Warning</Chip>
        </Theme>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})