import React from 'react'
import renderer from 'react-test-renderer'

import { Theme, Tag } from '~/components'

describe('Tag component', () => {
  it('renders a tag with default background and text colors and text Hello', () => {
    const tree = renderer
      .create(<Theme><Tag>Hello</Tag></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})