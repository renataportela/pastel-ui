import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'

import { Theme, Button, Dialog } from '~/components'

describe('Dialog component', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element
    })
  })

  afterEach(() => {
    ReactDOM.createPortal.mockClear()
  })

  it('renders a dialog with a Close and OK buttons', () => {
    const tree = renderer.create(
      <Theme>
        <Dialog 
          open
          close={() => {}} 
          title={<p>Hi</p>}
          message={<p>Hello!</p>}
        >        
          <Button label="OK" onClick={() => {}} />
        </Dialog>
      </Theme>
    )
    .toJSON()
    expect(tree).toMatchSnapshot()
  })
})