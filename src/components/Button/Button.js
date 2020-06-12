import React, { forwardRef } from 'react'

import useTheme from '~/components/Theme/useTheme'
import Icon from '~/components/Icon'
import ButtonStyle from './ButtonStyle'

/*
 * Loading is controlled by the user
 * Submitting is controlled by the Form component
 */
function Button(
  {
    disabled,
    icon,
    kind = 'primary',
    label,
    loading,
    loaderColor = 'primary',
    size = 'md',
    submitting,
    variant = 'default',
    ...props
  },
  ref
) {
  const { colors } = useTheme()

  return (
    <ButtonStyle
      disabled={disabled || loading || submitting}
      hasLabel={!!label}
      colors={colors}
      kind={kind}
      size={size}
      variant={variant}
      ref={ref}
      {...props}
    >
      {icon && !loading && <Icon name={icon} />}
      {(loading || submitting) && <Icon name="loader" color={loaderColor} />}
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
