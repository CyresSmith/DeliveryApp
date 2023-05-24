import styled from 'styled-components';

import theme from 'theme';

export const OffersBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.space[5]};
  width: 100%;
  height: 764px;
  background-color: ${theme.colors.primary};
  border-radius: ${theme.radii.high};
  padding: ${theme.space[5]};
  overflow-y: scroll;

  @supports (scrollbar-gutter: stable) {
    overflow: auto;
    scrollbar-gutter: stable;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: 'transperent';
    border-radius: 4px;
    overflow: 'hidden';
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.accent};
    border-radius: 4px;
  }
`;
