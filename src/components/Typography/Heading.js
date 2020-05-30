import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Text from './Text'

function Heading({ children, size, ...props }) {
  return (
    <HeadingStyle as={size} fontSize={size} {...props}>
      {children}
    </HeadingStyle>
  )
}


const fontSizes = {
  h1: '2.2rem',
  h2: '1.7rem',
  h3: '1.45rem',
  h4: '1.2rem',
  h5: '1.1rem',
  h6: '1rem',
}

const fontSizesMd = {
  h1: '2.5rem',
  h2: '2rem',
  h3: '1.75rem',
  h4: '1.5rem',
  h5: '1.25rem',
  h6: '1rem',
}

const HeadingStyle = styled(Text)`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: ${props => fontSizes[props.fontSize]};

  @media (min-width: 768px) {
    font-size: ${props => fontSizesMd[props.fontSize]};
  }
`;

Heading.defaultProps = {
  size: 'h1',
  weight: 'bolder',
}

Heading.propTypes = {
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
}

export default Heading
