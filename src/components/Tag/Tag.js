import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { BaseColors, BASE_COLORS_PROPS } from '~/components/Theme'

function Tag({ children, ...props}) {
  return (
    <TagStyle {...props}>{children}</TagStyle>
  )
}

const TagStyle = styled(BaseColors).attrs(() => ({
  forwardedAs: 'span',
}))`
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  border-radius: 2px;
  display: inline-block;
`;

Tag.defaultProps = {
  color: 'primary',
}

Tag.propTypes = {
  children: PropTypes.node.isRequired,
  ...BASE_COLORS_PROPS,
}

export default Tag