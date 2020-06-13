import React, { useState } from 'react'

import { Button, Overlay } from '~/components'

export default {
  title: 'Overlay',
}

export const overlay = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button label="Open" onClick={() => setOpen(true)} />
      {open && <Overlay onClick={() => setOpen(false)} />}
    </>
  )
}
