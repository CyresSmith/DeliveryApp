import styled from 'styled-components';

import theme from 'theme';

export const HeaderBox = styled.header`
  padding: ${theme.space[4]} 0;
  background-color: ${theme.colors.secondary};
  width: 100%;
`;

export const HeaderContainer = styled.div`
  width: ${p => {
    switch (p.mediaType) {
      case 'mobile':
        return theme.mediaBreakpoints.mobile.width;

      case 'tablet':
        return theme.mediaBreakpoints.tablet.width;

      case 'desktop':
        return theme.mediaBreakpoints.desktop.width;

      default:
        break;
    }
  }};
  padding: 0 ${theme.space[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
`;
