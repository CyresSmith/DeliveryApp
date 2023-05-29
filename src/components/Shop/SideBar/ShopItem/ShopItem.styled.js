import styled from 'styled-components';

import theme from 'theme';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.space[2]} ${theme.space[3]};
  color: ${p =>
    p.seller === p.active ? theme.colors.primary : theme.colors.background};
  background-color: ${p =>
    p.seller === p.active ? theme.colors.accent : theme.colors.primary};
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
  font-weight: ${theme.fontWeights.regular};
  /* color: ${theme.colors.background}; */
`;
