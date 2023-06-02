import styled from 'styled-components';
import theme from 'theme';

export const BadgeBox = styled.div`
  position: absolute;
  top: -15px;
  left: -10px;
  height: 20px;
  width: 20px;
  background-color: ${theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.radii.round};
  z-index: 1;
  box-shadow: ${theme.shadow.medium};
`;

export const BadgeNumber = styled.span`
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
`;
