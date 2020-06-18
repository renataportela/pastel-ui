import React from 'react'
import renderer from 'react-test-renderer'

import { Theme, Icon } from '~/components'

describe('Icon component', () => {
  it('renders activity icon with default color', () => {
    const tree = renderer
      .create(<Theme><Icon name="activity" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders loader icon with pallete color and size 48', () => {
    const tree = renderer
      .create(<Theme><Icon name="loader" color="info" width="48" height="48" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders arrow up icon with fill and stroke colors and stroke width 4', () => {
    const tree = renderer
      .create(<Theme><Icon name="arrow-up" fill="#c00" stroke="#0f9" strokeWidth="4" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })   
})