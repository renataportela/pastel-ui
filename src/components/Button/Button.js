import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import useTheme from '~/components/Theme/useTheme'
import { SIZES } from '~/styles/params'
import Icon from '~/components/Icon'
import ButtonStyle from './ButtonStyle'

function Button(
  {
    disabled,
    icon,
    kind = 'primary',
    label,
    loading,
    size = 'md',
    variant = 'default',
    ...props
  },
  ref
) {
  const { colors } = useTheme()

  return (
    <ButtonStyle
      disabled={disabled || loading}
      hasLabel={!!label}
      colors={colors}
      kind={kind}
      size={size}
      variant={variant}
      ref={ref}
      {...props}
    >
      {icon && !loading && <Icon name={icon} />}
      {loading && <Icon name="loader" color="primary" />}
      {label}
    </ButtonStyle>
  )
}

// Button.propTypes = {
//   disabled: PropTypes.bool,
//   icon: PropTypes.string,
//   inverse: PropTypes.bool,
//   label: PropTypes.string,
//   loading: PropTypes.bool,
//   kind: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'neutral', 'dark']),
//   round: PropTypes.bool,
//   size: PropTypes.oneOf(SIZES),
//   variant: PropTypes.oneOf(['default', 'outline', 'ghost']),
// }

export default forwardRef(Button)
