import PropTypes from 'prop-types'

const VALUE_INPUT_TYPES = [
  PropTypes.string,
  PropTypes.number,
  PropTypes.array,
  PropTypes.object,
  PropTypes.bool,
]

export const INPUT_PROPS = {
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType(VALUE_INPUT_TYPES),
}

export const CHECKS_INPUT_PROPS = {
  ...INPUT_PROPS,
  optionValue: PropTypes.oneOfType(VALUE_INPUT_TYPES).isRequired,
}