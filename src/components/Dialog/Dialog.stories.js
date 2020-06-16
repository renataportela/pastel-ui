import React, { useState } from 'react'

import { Button, Dialog } from '~/components'

export default {
  title: 'Dialog',
}

export const dialog = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  return (
    <>
      <Button label="Open" onClick={() => setOpen(true)} />
      <Dialog 
        open={open} 
        close={handleClose} 
        title={<p>Hi</p>}
        message={<p>Hello!</p>}
      >        
        <Button label="OK" onClick={() => {}} />
      </Dialog>
    </>
  )
}
