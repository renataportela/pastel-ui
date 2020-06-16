import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { useTheme } from '~/components/Theme'

function Progress({ color, percent, ...props }){
  const { colors } = useTheme()
  const bgColor = colors[color] ? colors[color].bg : color;

  return (
    <Outer {...props}>
      <EmptyProgress $color={colors.sub.bg}>
        <ProgressValue bgColor={bgColor} percent={percent} />
      </EmptyProgress>
    </Outer>
  )
}

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
  background-color: ${props => props.$color};
`

const ProgressValue = styled(ProgressLine)`
  background-color: ${props => props.bgColor};
  transition: all .4s cubic-bezier(.08,.82,.17,1) 0s;
  height: 6px;
  width: ${props => Math.min(props.percent, 100)}%;
`

Progress.propTypes = {
  color: PropTypes.string,
  percent: PropTypes.number,
}

export default Progress