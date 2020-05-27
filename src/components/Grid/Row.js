import styled from 'styled-components'
import PropTypes from 'prop-types'

import Flex from './Flex'

const RowStyles = styled(Flex)`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;

  &.no-gutter {
    margin-right: 0;
    margin-left: 0;
  }

  &.no-gutter > .col {
    padding-right: 0;
    padding-left: 0;
  }
`

function Row({ children, noGutter, ...props }) {
  return (
    <RowStyles className={noGutter ? 'no-gutter' : ''} {...props}>
      {children}
    </RowStyles>
  )
}

Row.propTypes = {
  children: PropTypes.node,
  noGutter: PropTypes.bool,
}

export default Row
