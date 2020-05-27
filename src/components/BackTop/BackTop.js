import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { opacityInOut } from '~/styles/transitions'
import Button from '~/components/Button'

const BackTopButton = styled(Button)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  transition: ${opacityInOut};
  opacity: 0;

  &.show {
    opacity: 1;
  }
`;

function BackTop({ topPosition, visibilityHeight, ...props }) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollDown = document.body.scrollTop > visibilityHeight || document.documentElement.scrollTop > visibilityHeight;
      setShowButton(scrollDown);      
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scroll({
      top: topPosition,
      left: 0,
      behavior: 'smooth'
    });
  }

  return (
    <BackTopButton className={showButton ? 'show' : ''} round {...props} onClick={handleClick} />
  )
}

BackTop.defaultProps = {
  color: 'info',
  icon: 'arrowUp',
  title: 'Back to top',
  topPosition: 0,
  visibilityHeight: 100,
}

BackTop.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  topPosition: PropTypes.number,
  visibilityHeight: PropTypes.number,
}

export default BackTop