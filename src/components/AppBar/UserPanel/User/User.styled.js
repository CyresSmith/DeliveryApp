import styled from 'styled-components';

import theme from 'theme';

export const UserName = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.accent};
  margin-right: ${p => (p.mediaType === 'mobile' ? 'auto' : theme.space[4])};
`;
