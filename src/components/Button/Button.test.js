import React from 'react'
import renderer from 'react-test-renderer'

import { Theme, Button } from '~/components'

describe('Button component', () => {
  it('renders a default button', () => {
    const tree = renderer
      .create(<Theme><Button label="Hello" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a danger button', () => {
    const tree = renderer
      .create(<Theme><Button label="Hello" color="danger" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a round button with menu icon', () => {
    const tree = renderer
      .create(<Theme><Button round icon="menu" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a loading button', () => {
    const tree = renderer
      .create(<Theme><Button label="Hello" loading /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a small button', () => {
    const tree = renderer
      .create(<Theme><Button label="Hello" size="sm" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a large button', () => {
    const tree = renderer
      .create(<Theme><Button label="Hello" size="lg" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a extra large button', () => {
    const tree = renderer
      .create(<Theme><Button label="Hello" size="xl" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a outline button', () => {
    const tree = renderer
      .create(<Theme><Button label="Hello" color="secondary" kind="outline" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a ghost button', () => {
    const tree = renderer
      .create(<Theme><Button label="Hello" color="info" kind="ghost" /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})