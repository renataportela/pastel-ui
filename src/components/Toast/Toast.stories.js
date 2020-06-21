import React, { useState } from 'react'

import { Button, Input, useToast, withToastProvider } from '~/components'

export default {
  title: 'Toast',
}

export const toast = withToastProvider(() => {
  const [count, setCount] = useState(1);
  const [toastConfig, setToastConfig] = useState(JSON.stringify({ message: 'Hello ' }))
  const handleChangeToast = value => setToastConfig(value)
  const { addToast } = useToast()
  const showToast = () => {
    const t = JSON.parse(toastConfig)
    t.message += ' ' + count;
    addToast(t)
    setCount(prev => prev + 1)
  }
  
  return (
    <>
      <Input value={toastConfig} onChange={handleChangeToast} />
      <Button label="Toast" onClick={showToast} />      
    </>
  )
}, 'topRight')