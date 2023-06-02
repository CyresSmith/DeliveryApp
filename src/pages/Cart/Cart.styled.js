import styled from 'styled-components';
import theme from 'theme';

export const CartBox = styled.div`
  padding: ${p =>
    p.mediaType === 'desktop' ? theme.space[5] : theme.space[4]};
  background-color: ${theme.colors.primary};
  border-radius: ${theme.radii.high};
  position: relative;
  display: flex;
  flex-direction: ${p => (p.mediaType === 'desktop' ? 'row' : 'column')};
  gap: ${p => (p.mediaType === 'desktop' ? theme.space[6] : 'none')};
`;

export const OrderPrice = styled.p`
  font-size: ${theme.fontSizes.xl};
  color: ${theme.colors.accent};
  text-align: right;
  margin-bottom: ${theme.space[6]};
`;
