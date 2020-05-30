import PropTypes from 'prop-types'
import styled from 'styled-components'

import BaseColors from '~/components/Theme/BaseColors'

const Text = styled(BaseColors)(props => {
  return {
    fontFamily: props.family,
    fontSize: props.size,
    fontStyle: props.italic ? 'italic' : null,
    fontWeight: props.weight || (props.bold ? 'bold' : null),
    textTransform: textTransform(props),
    textDecoration: textDecoration(props),
  }
})

function textDecoration(props) {
  if (props.underline) return 'underline'
  if (props.line) return 'line-through'
  return null
}

function textTransform(props) {
  if (props.upper) return 'uppercase'
  if (props.lower) return 'lowercase'
  if (props.capitalize) return 'capitalize'
  return null
}

Text.defaultProps = {
  bgColor: null,
  family: null,
  forwardedAs: 'span',
  size: null,
  textColor: 'currentColor',
  transform: null,
  weight: null,
}

Text.propTypes = {
  bgColor: PropTypes.string,
  bold: PropTypes.bool,
  capitalize: PropTypes.bool,
  textColor: PropTypes.string,
  family: PropTypes.string,
  italic: PropTypes.bool,
  lower: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  stroke: PropTypes.bool,
  underline: PropTypes.bool,
  upper: PropTypes.bool,
  weight: PropTypes.oneOf([
    'normal',
    'bold',
    'lighter',
    'bolder',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]),
}

export default Text
