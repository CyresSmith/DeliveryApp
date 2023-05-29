import styled from 'styled-components';
import theme from 'theme';

export const OrderList = styled.ul`
  flex: 80%;
  gap: ${theme.space[3]};
  padding: ${theme.space[5]};
  background-color: ${theme.colors.background};
  border-radius: ${theme.radii.normal};
  overflow-y: scroll;

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

export const EmptyCart = styled.p`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.primary};
  text-align: center;
`;
