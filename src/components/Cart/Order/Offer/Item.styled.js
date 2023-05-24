import styled from 'styled-components';
import theme from 'theme';

export const Item = styled.li`
  display: flex;
  height: 100px;
  background-color: ${theme.colors.white};
  border-radius: ${theme.radii.normal};
  overflow: hidden;
  box-shadow: ${theme.shadow.low};

  &:not(:last-child) {
    margin-bottom: ${theme.space[5]};
  }
`;

export const Image = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
`;

export const Name = styled.p`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
  margin-bottom: ${theme.space[3]};
`;

export const Price = styled.p`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.primary};
`;

export const Desc = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.regular};
  margin-bottom: ${theme.space[4]};
`;
