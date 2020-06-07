import React from 'react';
import styled from '@emotion/styled';

const Outer = styled.div`
  display: flex;
  justify-content: center;
`;

function Tabs({
  activeTab,
  children,
  activeColor,
  onChange,
  textColor,
  ...props
}) {
  const tabs = React.Children.map(children, child => {
    if (!child) return;

    const isActive = child.props.name === activeTab;
    return React.cloneElement(child, {
      active: isActive,
      activeColor,
      textColor,
      onChange,
    });
  });

  return <Outer {...props}>{tabs}</Outer>;
}

export default Tabs;
