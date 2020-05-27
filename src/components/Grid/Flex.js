import styled from 'styled-components'
import PropTypes from 'prop-types'

const Flex = styled.div(props => ({
  alignItems: alignItems(props.alignItems),
  display: props.display || (isFlex(props) ? 'flex' : null),
  flexDirection: props.direction,
  justifyContent: justifyContent(props.justify),
  textAlign: props.textAlign || null,
}))

function isFlex(props) {
  return props.direction || props.justify || props.alignItems
}

const justifyContent = option => {
  switch (option) {
    case 'evenly':
      return 'space-evenly'
    case 'between':
      return 'space-between'
    case 'around':
      return 'space-around'
    case 'start':
      return 'flex-start'
    case 'end':
      return 'flex-end'
    case 'center':
      return 'center'
    default:
      return 'inherit'
  }
}

const alignItems = option => {
  switch (option) {
    case 'baseline':
      return 'baseline'
    case 'stretch':
      return 'stretch'
    case 'start':
      return 'flex-start'
    case 'end':
      return 'flex-end'
    case 'center':
      return 'center'
    default:
      return ''
  }
}

Flex.defaultProps = {
  alignItems: null,
  direction: null,
  display: null,
  justify: null,
  textAlign: null,
}

Flex.propTypes = {
  alignItems: PropTypes.oneOf(['baseline', 'stretch', 'start', 'end', 'center']),
  direction: PropTypes.oneOf(['column', 'row']),
  display: PropTypes.string,
  justify: PropTypes.oneOf(['around', 'between', 'center', 'end', 'evenly', 'start']),
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
}

export default Flex
