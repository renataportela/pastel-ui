import React, { useState } from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import { Alert } from '~/components'

export default {
  title: 'Alert',
  decorators: [withKnobs],
}

export const closeable = () => {
  const [show, setShow] = useState([true, true, true, true])
  const handleClose = index => () =>
    setShow(prevState => {
      const newState = [...prevState]
      newState[index] = false
      return newState
    })
  return (
    <>
      {show[0] && (
        <Alert kind="success" icon onClose={handleClose(0)}>
          Success
        </Alert>
      )}
      {show[1] && (
        <Alert kind="warning" icon onClose={handleClose(1)}>
          Warning
        </Alert>
      )}
      {show[2] && (
        <Alert kind="danger" icon onClose={handleClose(2)}>
          Danger
        </Alert>
      )}
      {show[3] && (
        <Alert kind="info" icon onClose={handleClose(3)}>
          Info
        </Alert>
      )}
    </>
  )
}

export const alerts = () => {
  const [showIcon, setShowIcon] = useState([false, false, false, false])
  const handleShowIcon = index => () =>
    setShowIcon(prevState => {
      const newState = [...prevState]
      newState[index] = !newState[index]
      return newState
    })

  return (
    <>
      <Alert kind="success" icon={boolean('Icon', false)}>
        {text('Content', 'This an alert.')}
      </Alert>
      <Alert kind="warning" icon={boolean('Icon', false)}>
        {text('Content', 'This an alert.')}
      </Alert>
      <Alert kind="danger" icon={boolean('Icon', false)}>
        {text('Content', 'This an alert.')}
      </Alert>
      <Alert kind="info" icon={boolean('Icon', false)}>
        {text('Content', 'This an alert.')}
      </Alert>
    </>
  )
}
