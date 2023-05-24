import styled from 'styled-components';
import theme from 'theme';

export const CartBox = styled.div`
  height: 764px;
  display: flex;
  gap: ${theme.space[5]};
  padding: ${theme.space[5]};
  background-color: ${theme.colors.primary};
  border-radius: ${theme.radii.high};
`;
