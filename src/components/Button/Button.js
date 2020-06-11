import React from 'react'
import PropTypes from 'prop-types'

import useTheme from '~/components/Theme/useTheme'
import { AVAILABLE_SIZES } from '~/styles/params'
import Icon from '~/components/Icon'
import ButtonStyle from './ButtonStyle'

function Button({ disabled, icon, label, loading, ...props }) {
  const { colors } = useTheme()
  return (
    <ButtonStyle 
      disabled={disabled || loading} 
      hasLabel={!!label}
      colors={colors}
      {...props}
    >
      {icon && !loading && <Icon name={icon} />}
      {loading && <Icon name="loader" color="primary" />}
      {label}
    </ButtonStyle>
  )
}

Button.defaultProps = {
  kind: 'primary',
  size: 'md',
  variant: 'default',
}

Button.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  inverse: PropTypes.bool,
  label: PropTypes.string,
  loading: PropTypes.bool,
  kind: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'neutral']),
  round: PropTypes.bool,  
  size: PropTypes.oneOf(AVAILABLE_SIZES),
  variant: PropTypes.oneOf(['default', 'outline', 'ghost']),
}

export default Button