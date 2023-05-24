import styled from 'styled-components';

import theme from 'theme';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.space[2]} ${theme.space[4]};
  color: ${theme.colors.background};
  background-color: ${theme.colors.primary};
  border-radius: ${theme.radii.high};
  cursor: pointer;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  &:hover {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.accent};
  }
`;

export const Name = styled.p`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
  /* color: ${theme.colors.background}; */
`;
