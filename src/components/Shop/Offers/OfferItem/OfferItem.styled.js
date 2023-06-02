import styled from 'styled-components';

import theme from 'theme';

export const ItemBox = styled.li`
  width: ${p => {
    switch (p.mediaType) {
      case 'desktop':
        return `calc((100% - (${theme.space[5]} * 2)) / 3)`;

      case 'tablet':
        return `calc((100% - ${theme.space[5]}) / 2)`;

      default:
        break;
    }
  }};
  height: 100%;
  background-color: ${theme.colors.white};
  border-radius: ${theme.radii.normal};
  overflow: hidden;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;
  box-shadow: ${theme.shadow.medium};

  &:hover {
    scale: ${p => (p.mediaType === 'desktop' ? 1.1 : 'none')};
    box-shadow: ${theme.shadow.high};
  }
`;

export const Image = styled.img`
  height: 300px;
  width: 100%;
  background-color: ${theme.colors.muted};
  object-fit: cover;
`;

export const ItemFooter = styled.div`
  height: 40%;
  padding: ${theme.space[4]};
`;

export const Name = styled.p`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.space[1]};
`;

export const Price = styled.p`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.space[2]};
  color: ${theme.colors.primary};
`;

export const Desc = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.regular};
  margin-bottom: ${theme.space[4]};
`;
