import React from 'react'
import renderer from 'react-test-renderer'

import { Theme, Checkbox } from '~/components'

describe('Checkbox component', () => {
  it('renders a unchecked checkbox with label "Option A"', () => {
    const tree = renderer
      .create(<Theme><Checkbox name="checkbox[]" optionValue="A" label="Option A" value="" onChange={() => {}} /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a checked checkbox with label "Option A"', () => {
    const tree = renderer
      .create(<Theme><Checkbox name="checkbox[]" optionValue="A" label="Option A" value="A" onChange={() => {}} /></Theme>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})