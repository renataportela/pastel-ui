import React, { useState } from 'react'

import { Button, Modal, Paragraph } from '~/components'

export default {
  title: 'Modal',
}

export const modal = () => {
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const handleClose = () => setOpen(false)
  const handleClose2 = () => setOpen2(false)

  return (
    <>
      <Button label="Open" onClick={() => setOpen(true)} />
      <Modal open={open} onClose={handleClose}>
        <p>Hello!</p>
        <p>Hello!</p>
        <p>Hello!</p>
        <p>Hello!</p>
        <p>Hello!</p>
        <p>Hello!</p>
        <p>Hello!</p>
        <p>Hello!</p>
        <p>Hello!</p>
        <p>Hello!</p>
        <p>Hello!</p>
        <Button label="Open" onClick={() => setOpen2(true)} />

        <Modal open={open2} onClose={handleClose2}>
          <p>Hello again!</p>
        </Modal>
      </Modal>

      <Paragraph>
        Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi,
        sou preto inteiris, inteiris. Quem num gosta di mé, boa gentis num é.
        Delegadis gente finis, bibendum egestas augue arcu ut est. Quem num
        gosta di mim que vai caçá sua turmis!
      </Paragraph>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      <Paragraph>
        Cevadis im ampola pa arma uma pindureta. Nec orci ornare consequat.
        Praesent lacinia ultrices consectetur. Sed non ipsum felis. Atirei o pau
        no gatis, per gatis num morreus. Si num tem leite então bota uma pinga
        aí cumpadi!
      </Paragraph>
    </>
  )
}
