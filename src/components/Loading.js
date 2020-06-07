import React from 'react'
import { colors, Icon, Overlay } from '~/pastel-ui'

function Loading(props){
  return (
    <Overlay>
      <Icon name="loading" width={30} fill={props.color || colors.secondary} />
    </Overlay>
  )
}

export default Loading