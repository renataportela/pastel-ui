import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { BaseColors } from '~/components/layout/Theme'

const TagStyle = styled(BaseColors).attrs(() => ({
  forwardedAs: 'span',
}))`
  font-size: 0.7rem;
  padding: 0.1rem 0.4rem;
  border-radius: 2px;
  display: inline-block;
`;

function Tag({ children, ...props}) {
  return (
    <TagStyle {...props}>{children}</TagStyle>
  )
}

Tag.defaultProps = {
  bgColor: 'primary',
}

Tag.propTypes = {
  content: PropTypes.node,
  title: PropTypes.string,
}

export default Tag