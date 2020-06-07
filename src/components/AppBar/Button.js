import styled from 'styled-components';

import { colors, easeInColors } from '~/pastel-ui/theming';
import { BaseButton } from '~/pastel-ui/components/Button';

const AppBarButton = styled(BaseButton)`  
  color: white;
  background-color: transparent;
  border: 0;
  transition: ${easeInColors};
  text-transform: uppercase;
  border-radius: 0;
  height: 100%;
  
  &:hover:enabled, &.opened: {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:disabled: {
    color: ${colors.grey_300};
  }

  &:focus: {
    box-shadow: none;
    color: ${colors.highlight_200};
  }
`;

export default AppBarButton;