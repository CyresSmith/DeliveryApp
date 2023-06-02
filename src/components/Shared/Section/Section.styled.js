import styled from 'styled-components';
import theme from 'theme';

export const SectionBox = styled.section`
  padding: ${theme.space[5]} 0;
`;

export const Container = styled.div`
  width: ${p => {
    switch (p.mediaType) {
      case 'desktop':
        return theme.mediaBreakpoints.desktop.width;

      case 'tablet':
        return theme.mediaBreakpoints.tablet.width;

      case 'mobile':
        return theme.mediaBreakpoints.mobile.width;

      default:
        break;
    }
  }};
  padding: 0 ${theme.space[4]};
  margin-left: auto;
  margin-right: auto;
`;
