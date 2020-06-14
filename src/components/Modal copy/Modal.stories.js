import React, { useState } from 'react'

import { Button, Modal } from '~/components'

export default {
  title: 'Modal',
}

export const modal = () => {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  return (
    <>
      <Button label="Open" onClick={() => setOpen(true)} />
      <Modal open={open} setOpen={setOpen}>
        <p>Hello!</p>
        <Button label="Open" onClick={() => setOpen2(true)} />

        <Modal open={open2} setOpen={setOpen2}>
          <p>Hello again!</p>
        </Modal>
      </Modal>
    </>
  )
}
