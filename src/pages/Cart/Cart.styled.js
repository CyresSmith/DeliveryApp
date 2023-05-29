import styled from 'styled-components';
import theme from 'theme';

export const CartBox = styled.div`
  padding: ${theme.space[5]};
  background-color: ${theme.colors.primary};
  border-radius: ${theme.radii.high};
  position: relative;
`;

export const OrderPrice = styled.p`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.accent};
  text-align: right;
  margin-bottom: ${theme.space[5]};
`;
