import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { BaseColors } from '~/components/Theme'
import { Avatar, Close } from '~/components'

function Chip({ avatar, children, onDelete, ...props}) {
  return (
    <ChipStyle contrast={true} {...props}>
      {avatar && <Avatar size="sm" {...avatar} />}
      <Content>{children}</Content>
      {onDelete && <Close size="sm" />}
    </ChipStyle>
  )
}

const ChipStyle = styled(BaseColors)`
  border-radius: 1.1rem;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  outline: none;
  cursor: default;
`;

const Content = styled.span`
  padding: 0.2rem 0.5rem;
`;

Chip.defaultProps = {
  bgColor: 'light',
}

Chip.propTypes = {
  avatar: PropTypes.shape({
    bgColor: PropTypes.string,
    icon: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    textColor: PropTypes.string,
  }),
  bgColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func,
  textColor: PropTypes.string,
}

export default Chip