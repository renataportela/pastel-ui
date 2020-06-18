import React from 'react'
import renderer from 'react-test-renderer'

import { Theme, Close } from '~/components'

describe('Close component', () => {
  it('renders a close button with large size', () => {
    const tree = renderer
      .create(<Theme><Close size="lg" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})