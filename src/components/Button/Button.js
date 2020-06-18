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
    disabled = false,
    icon = null,
    color = 'primary',
    label = null,
    loading = false,
    loaderColor = 'primary',
    size = 'md',
    submitting = false,
    kind = 'default',
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
      color={color}
      size={size}
      kind={kind}
      ref={ref}
      {...props}
    >
      {icon && !loading && <Icon name={icon} />}
      {(loading || submitting) && <Icon name="loader" color={loaderColor} />}
      {label}
    </ButtonStyle>
  )
}

export default forwardRef(Button)
