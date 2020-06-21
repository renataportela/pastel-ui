import React from 'react'
import styled from 'styled-components'

import { GUTTER_FORM } from '~/styles/tokens'
import { Flex } from '~/components/Grid'

function FormFooter({ children, ...props }) {
  return (
    <Outer alignItems="center" gap={GUTTER_FORM} {...props}>{children}</Outer>
  )
}

const Outer = styled(Flex)`
  margin: 1.2rem auto 1.2rem;
  text-align: center;
  width: 100%;
`

FormFooter.defaultProps = {
  justify: 'center',
}

FormFooter.displayName = 'Form.Footer'

export default FormFooter