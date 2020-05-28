import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

import { roundShape } from '~/styles/mixins'
import { BaseColors } from '~/components/layout/Theme'

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 currentColor;
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

const Outer = styled.div`
  position: relative;
`

const squareBadge = css`
  top: -1rem;
  padding: 0 0.2rem;
  border-radius: 2px;
`;

const roundBadge = css`
  ${roundShape}
  top: -1.3rem;
`;

const dotBadge = css`
  ${roundShape}
  top: -0.3em;
  right: -0.3em;
  box-shadow: 0 0 0 0 currentColor;
  transform: scale(1);
  animation: ${pulse} 2s infinite;
`;

const BadgeIcon = styled(BaseColors).attrs(props => ({
  diameter: props.dot ? '.75em' : '1.9em',
  forwardedAs: 'span',
}))`
  position: absolute;
  right: -1rem;
  font-size: 0.7rem;
  z-index: 1;
  ${props => props.round ? roundBadge : (props.dot ? dotBadge : squareBadge)}
`;

function Badge({ bgColor, children, content, dot, textColor, round, ...props}) {
  if (!content && !dot) return children;

  return (
    <Outer {...props}>
      <BadgeIcon 
        bgColor={bgColor} 
        textColor={dot ? bgColor : textColor + 'Contrast'}
        round={round}
        dot={dot}
      >
        {''}{content}
      </BadgeIcon>
      {children}
    </Outer>
  )
}

Badge.defaultProps = {
  bgColor: 'primary',
}

Badge.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  content: PropTypes.node,
  dot: PropTypes.bool,
  round: PropTypes.bool,
  textColor: PropTypes.string,
}

export default Badge