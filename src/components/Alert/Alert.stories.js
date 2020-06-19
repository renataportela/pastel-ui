import React, { useState } from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import Alert, { ALERT_COLORS } from '~/components/Alert'

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
      {ALERT_COLORS.map(kind => {
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
      {ALERT_COLORS.map(kind => (
        <Alert key={kind} kind={kind} icon={boolean('Icon', true)}>
          {text('Content', 'This an alert.')}
        </Alert>
      ))}
    </>
  )
}
