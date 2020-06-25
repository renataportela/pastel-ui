import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import { Theme, Checkbox } from '~/components'

describe('Checkbox component', () => {
  it('renders a unchecked checkbox with label "Option A"', () => {
    const checkbox = shallow(<Theme><Checkbox name="checkbox[]" optionValue="A" label="Option A" value="" onChange={() => {}} /></Theme>)
    expect(shallowToJson(checkbox)).toMatchSnapshot()
  })

  it('renders a checked checkbox with label "Option A"', () => {
    const checkbox = shallow(<Theme><Checkbox name="checkbox[]" optionValue="A" label="Option A" value="A" onChange={() => {}} /></Theme>)
    expect(shallowToJson(checkbox)).toMatchSnapshot()
  })
})