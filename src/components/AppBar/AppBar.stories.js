import React, { useState } from 'react'

import { AppBar } from '~/components'

export default {
  title: 'AppBar',
}

export const appBar = () => {
  const [open, setOpen] = useState(false)
  const onToggleMenu = () => setOpen(prev => !prev)

  return (
    <AppBar 
      brand={<span>Brand</span>}
      onToggleMenu={onToggleMenu}
      left={<div>left</div>}
      right={<div>right</div>}
    />
  )
}
