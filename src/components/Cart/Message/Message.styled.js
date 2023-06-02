import styled from 'styled-components';
import theme from 'theme';

export const MessageTxt = styled.p`
  display: block;
  width: 100%;
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
  text-align: center;
  color: ${theme.colors.primary};
  margin-bottom: ${theme.space[5]};
`;

export const MessageBox = styled.div`
  width: 100%;
`;
