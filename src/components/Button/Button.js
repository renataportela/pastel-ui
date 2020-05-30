import React from 'react'
import PropTypes from 'prop-types'

import useTheme from '~/components/Theme/useTheme'
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
  color: 'primary',
  kind: 'default',
  size: 'md',
  textColor: 'text',
}

Button.propTypes = {
  color: PropTypes.string,  
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  kind: PropTypes.oneOf(['default', 'outline']),
  label: PropTypes.string,
  loading: PropTypes.bool,
  round: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  textColor: PropTypes.string,
}

export default Button