import React, { useState } from 'react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Alert } from '~/components'

export default {
  title: 'Alert',
  decorators: [withKnobs],
}

const KINDS = ['success', 'warning', 'danger', 'info'];

export const closeable = () => {
  const [show, setShow] = useState({ success: true, warning: true, danger: true, info: true })
  const handleClose = kind => () => setShow(() => {
    return {
      ...show,
      [kind]: false
    }
  })

  return (
    <>
      {KINDS.map(kind => {
        if (!show[kind]) return null;
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
      {KINDS.map(kind => (
        <Alert key={kind} kind={kind} icon={boolean('Icon', false)}>
          {text('Content', 'This an alert.')}
        </Alert>
      ))}
    </>
  )
}
