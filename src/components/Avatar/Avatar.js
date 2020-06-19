import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { roundShape } from '~/styles/mixins'
import { FONT_SIZES } from '~/styles/tokens'
import { Icon } from '~/components'
import { BaseColors, BASE_COLORS_PROPS } from '~/components/Theme'

function Avatar({ icon, image, text, title, ...props }) {
  const avatarText = text ? (text.length > 2 ? text.substr(0, 2) : text) : null;

  return (
    <Round title={title || text} {...props}>
      {image && <Image src={image} />}
      {icon && !image && <Icon name={icon} />}
      {!icon && <Text>{avatarText}</Text>}
    </Round>
  )
}

const ROUND_SIZES = {
  sm: '1.55rem',
  md: '2.55rem',
  lg: '3.6rem',
  xl: '6rem',
}

const Round = styled(BaseColors).attrs(props => ({
  diameter: ROUND_SIZES[props.size],
  forwardedAs: 'span',
}))`
  ${roundShape}
  font-size: ${props => FONT_SIZES[props.size]};
  position: relative;
`;

const Image = styled.img`
  height: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
`;

const Text = styled.span`
  z-index: 0;
`;

Avatar.defaultProps = {
  color: 'primary',
  size: 'md',
}

Avatar.propTypes = {
  ...BASE_COLORS_PROPS,
  icon: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(ROUND_SIZES)),
  text: PropTypes.string,
  title: PropTypes.string,
}

export default Avatar