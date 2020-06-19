import React from 'react'
import renderer from 'react-test-renderer'

import { Theme, Avatar } from '~/components'

describe('Avatar component', () => {
  it('renders a small Avatar with AL initials and secondary color', () => {
    const tree = renderer.create(
      <Theme>
        <Avatar size="sm" text="Aleks" color="secondary" />
      </Theme>
      ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a medium Avatar with RE initials and warning color', () => {
    const tree = renderer.create(
      <Theme>
        <Avatar size="md" text="Renata" color="warning" />
      </Theme>
      ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders a large Avatar with user icon and info color', () => {
    const tree = renderer.create(
      <Theme>
      <Avatar size="lg" icon="user" color="info" />      
      </Theme>
      ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders an xLarge Avatar with an image', () => {
    const tree = renderer.create(
      <Theme>
        <Avatar size="xl" text="Alternative" image="https://image.freepik.com/free-vector/cute-panda-waving-hand-icon-illustration-panda-mascot-cartoon-character-animal-icon-concept-isolated_138676-843.jpg" />
      </Theme>
      ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})