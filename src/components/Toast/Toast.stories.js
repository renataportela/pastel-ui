import React, { useState } from 'react'

import { Button, TextField, useToast, withToastProvider } from '~/components'

export default {
  title: 'Toast',
}

export const toast = withToastProvider(() => {
  const [toastConfig, setToastConfig] = useState(JSON.stringify({ message: 'Hello' }))
  const handleChangeToast = value => setToastConfig(value)
  const { addToast } = useToast()
  const showToast = () => addToast(JSON.parse(toastConfig))
  
  return (
    <>
      <TextField value={toastConfig} onChange={handleChangeToast} />
      <Button label="Toast" onClick={showToast} />      
    </>
  )
}, 'topRight')