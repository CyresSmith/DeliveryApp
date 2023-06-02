import styled from 'styled-components';

import theme from 'theme';

export const OffersBox = styled.ul`
  display: flex;
  flex-direction: ${p => (p.mediaType === 'mobile' ? 'column' : 'row')};
  flex-wrap: ${p => (p.mediaType === 'mobile' ? 'nowrap' : 'wrap')};
  gap: ${theme.space[5]};
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.primary};
  border-radius: ${theme.radii.high};
  padding: ${p => (p.mediaType === 'mobile' ? theme.space[4] : theme.space[5])};
`;
