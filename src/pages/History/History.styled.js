import styled from 'styled-components';
import theme from 'theme';

export const HistoryBox = styled.div`
  padding: ${theme.space[5]};
  background-color: ${theme.colors.primary};
  border-radius: ${theme.radii.high};
  width: 100%;
  height: 764px;
  overflow-y: scroll;

  &:not(:last-child) {
    margin-bottom: ${theme.space[5]};
  }

  @supports (scrollbar-gutter: stable) {
    overflow: auto;
    scrollbar-gutter: stable;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: 'transparent';
    border-radius: 4px;
    overflow: 'hidden';
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.accent};
    border-radius: 4px;
  }
`;

export const OrderBox = styled.li`
  padding: ${theme.space[5]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.radii.normal};
  width: 100%;

  &:not(:last-child) {
    margin-bottom: ${theme.space[5]};
  }
`;

export const Title = styled.p`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
`;

export const SubTitle = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.primary};
`;

export const Items = styled.ul`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.r};
`;

export const Item = styled.li`
  color: ${theme.colors.primary};
  background-color: ${theme.colors.background};
  padding: ${theme.space[3]};
  border-radius: ${theme.radii.normal};
  display: flex;

  &:not(:last-child) {
    margin-bottom: ${theme.space[3]};
  }
`;
