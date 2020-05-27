import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { roundShape } from '~/styles/mixins'
import { fontSizes } from '~/styles/params'
import { Icon } from '~/components'
import { BaseColors } from '~/components/Theme'

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
  font-size: ${props => fontSizes[props.size]};
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

function Avatar({ icon, image, text, title, ...props }) {
  const avatarText = text ? (text.length > 2 ? text.substr(0, 2) : text) : null;

  return (
    <Round 
      title={title || text}
      {...props}
    >
      {image && <Image src={image} />}
      {icon && !image && <Icon name={icon} />}
      {!icon && <Text>{avatarText}</Text>}
    </Round>
  )
}

Avatar.defaultProps = {
  bgColor: 'primary',
  icon: null,
  image: null,
  size: 'medium',
  text: null,
  textColor: null,
  title: null,
}

Avatar.propTypes = {
  bgColor: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  text: PropTypes.string,
  textColor: PropTypes.string,
  title: PropTypes.string,
}

export default Avatar