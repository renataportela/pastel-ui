import React from 'react'
import styled from '@emotion/styled'

import { colors } from '~/pastel-ui/theming'

const Outer = styled.div`
  display: inline-block;
  width: 100%;
`

const ProgressLine = styled.div`
  position: relative;
  border-radius: 100px;
`

const EmptyProgress = styled(ProgressLine)`
  display: inline-block;
  width: 100%;
  overflow: hidden;
  vertical-align: middle;
  background-color: ${colors.grey_300};
`

const ProgressValue = styled(ProgressLine)`
  background-color: ${props => props.color || colors.secondary};
  transition: all .4s cubic-bezier(.08,.82,.17,1) 0s;
  height: 6px;
  width: ${props => props.progress}%;
`

function Progress(props){
  return (
    <Outer>
      <EmptyProgress>
        <ProgressValue color={props.color} progress={props.progress} />
      </EmptyProgress>
    </Outer>
  )
}

export default Progress