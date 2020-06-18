import React from 'react'
import renderer from 'react-test-renderer'

import Theme from './Theme'
import BaseColors from './BaseColors'

describe('Div with background and text colors', () => {
  it('renders colors by pallete name', () => {
    const tree = renderer
      .create(<Theme><BaseColors color="warning" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders colors by pallete name separately', () => {
    const tree = renderer
      .create(<Theme><BaseColors bgColor="primary" textColor="warning" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders colors by hexadecimal number', () => {
    const tree = renderer
      .create(<Theme><BaseColors bgColor="#ad0" textColor="#000" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })  
})