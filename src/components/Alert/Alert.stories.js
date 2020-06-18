import React, { useState } from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Alert } from '~/components'
import { ALERT_KINDS } from '~/constants'

export default {
  title: 'Alert',
  decorators: [withKnobs],
}

export const closeable = () => {
  const [show, setShow] = useState({ success: true, warning: true, danger: true, info: true, dark: true })
  const handleClose = kind => () => setShow(() => {
    return {
      ...show,
      [kind]: false
    }
  })

  return (
    <>
      {ALERT_KINDS.map(kind => {
        return (
          <Alert 
            key={kind} 
            kind={kind} 
            icon={boolean('Icon', false)} 
            onClose={handleClose(kind)}
            style={{ textTransform: 'capitalize' }}
          >
            {kind}
          </Alert>
        );
      })}
    </>
  )
}

export const alerts = () => {
  return (
    <>
      {ALERT_KINDS.map(kind => (
        <Alert key={kind} kind={kind} icon={boolean('Icon', true)}>
          {text('Content', 'This an alert.')}
        </Alert>
      ))}
    </>
  )
}
