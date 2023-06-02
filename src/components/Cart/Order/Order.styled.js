import styled from 'styled-components';
import theme from 'theme';

export const OrderList = styled.ul`
  flex: 80%;
  gap: ${theme.space[3]};
  margin-bottom: ${theme.space[5]};
`;

export const EmptyCart = styled.p`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.accent};
  text-align: center;
`;
