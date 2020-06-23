import React, { useState } from 'react'

import { Button, Input, useToast, withToastProvider } from '~/components'

export default {
  title: 'Toast',
}

export const toast = withToastProvider(() => {
  const [toastConfig, setToastConfig] = useState(JSON.stringify({ message: 'Hello ' }))
  const handleChangeToast = value => setToastConfig(value)
  const { addToast } = useToast()
  const showToast = kind => () => {
    const t = JSON.parse(toastConfig)
    t.color = kind
    addToast(t)
  }
  
  return (
    <>
      <Input value={toastConfig} onChange={handleChangeToast} />
      <Button label="Dark Toast" onClick={showToast('dark')} />      
      <Button label="Success Toast" onClick={showToast('success')} />      
      <Button label="Warning Toast" onClick={showToast('warning')} />      
      <Button label="Danger Toast" onClick={showToast('danger')} />      
      <Button label="Info Toast" onClick={showToast('info')} />      
    </>
  )
}, 'topRight')