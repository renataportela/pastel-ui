import React from 'react'
import styled from 'styled-components'

import Text from './Text'

const PStyle = styled(Text)`
  margin-bottom: 0.8rem;
`;

function Paragraph({ children, ...props }) {
  return (
    <PStyle forwardedAs="p" {...props}>
      {children}
    </PStyle>
  )
}

export default Paragraph
