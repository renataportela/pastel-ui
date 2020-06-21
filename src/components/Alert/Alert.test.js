import React from 'react'
import renderer from 'react-test-renderer'

import { Theme, Alert } from '~/components'

describe('Alert component', () => {
  it('renders a success alert', () => {
    const tree = renderer
      .create(<Theme><Alert kind="success" icon onClose={() => {}}>Alert text</Alert></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a dark alert', () => {
    const tree = renderer
      .create(<Theme><Alert kind="dark" icon onClose={() => {}}>Alert text</Alert></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})