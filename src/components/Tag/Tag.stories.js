import React from 'react'

import { Tag } from '~/components'
import { PALLETE } from '~/constants'

export default {
  title: 'Tag',
}

export const tags = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        marginBottom: 15,
      }}
    >
      {PALLETE.map(pallete => <Tag key={pallete} color={pallete}>{pallete}</Tag>)}
      <Tag bgColor="lightgreen" textColor="blue">
        Color
      </Tag>
    </div>
  )
}
