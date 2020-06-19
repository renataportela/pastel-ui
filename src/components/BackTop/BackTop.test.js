import React from 'react'
import renderer from 'react-test-renderer'

import { Theme, BackTop } from '~/components'

describe('BackTop component', () => {
  it('renders a default BackTop button', () => {
    const tree = renderer.create(
      <Theme>
        <BackTop />
      </Theme>
      ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})