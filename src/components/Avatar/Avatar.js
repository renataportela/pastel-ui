import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { roundShape } from '~/styles/mixins'
import { PALLETES, SIZES, FONT_SIZES } from '~/styles/params'
import { Icon } from '~/components'
import { BaseColors } from '~/components/Theme'

function Avatar({ icon, image, kind, text, title, ...props }) {
  const avatarText = text ? (text.length > 2 ? text.substr(0, 2) : text) : null;

  return (
    <Round 
      title={title || text}
      pallete={kind}
      {...props}
    >
      {image && <Image src={image} />}
      {icon && !image && <Icon name={icon} />}
      {!icon && <Text>{avatarText}</Text>}
    </Round>
  )
}

const roundSizes = {
  sm: '1.55rem',
  md: '2.55rem',
  lg: '3.6rem',
  xl: '6rem',
}

const Round = styled(BaseColors).attrs(props => ({
  diameter: roundSizes[props.size],
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
  bgColor: null,
  icon: null,
  image: null,
  kind: 'primary',
  size: 'medium',
  text: null,
  textColor: null,
  title: null,
}

Avatar.propTypes = {
  bgColor: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string,
  kind: PropTypes.oneOf(PALLETES),
  size: PropTypes.oneOf(SIZES),
  text: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string,
}

export default Avatar