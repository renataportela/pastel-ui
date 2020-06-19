import React from 'react'

import { Checkbox } from '~/components'

export default {
  title: 'Checkbox',
}

export const checkbox = () => {
  return (
    <>
      <Checkbox name="checkbox[]" optionValue="A" label="Option A" value="" onChange={() => {}} />
      <Checkbox name="checkbox[]" optionValue="B" label="Option B" value="B" onChange={() => {}} />
    </>
  )
}
