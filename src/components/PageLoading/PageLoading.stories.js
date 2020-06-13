import React, { useState } from 'react'

import { Button, PageLoading } from '~/components'

export default {
  title: 'PageLoading',
}

export const pageLoading = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button label="Open" onClick={() => setOpen(true)} />
      {open && <PageLoading onClick={() => setOpen(false)} />}
    </>
  )
}
