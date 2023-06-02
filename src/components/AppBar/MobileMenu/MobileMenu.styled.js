import styled from 'styled-components';

import theme from 'theme';

export const MobileMenuBox = styled.div`
  padding: ${theme.space[5]};
  background-color: ${theme.colors.primary};
  position: absolute;
  top: 0;
  right: 0;
  width: ${p => (p.mediaType === 'mobile' ? '100vw' : '320px')};
  height: 100vh;
  z-index: 999;
  transition: ${theme.transition.primary};
  /* transform: ${p => {
    return p.MobileMenuOpen ? 'translateX(+200%)' : 'translateX(0)';
  }}; */
`;
