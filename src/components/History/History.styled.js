import styled from 'styled-components';
import theme from 'theme';

export const HistoryItems = styled.ul`
  padding: ${p =>
    p.mediaType === 'desktop' ? theme.space[5] : theme.space[4]};
  background-color: ${theme.colors.primary};

  border-radius: ${theme.radii.high};
`;

export const OrderBox = styled.li`
  padding: ${theme.space[4]};
  background-color: ${theme.colors.white};
  border-radius: ${theme.radii.normal};
  display: flex;
  flex-direction: ${p => (p.mediaType === 'mobile' ? 'column' : 'row')};
  align-items: ${p => (p.mediaType === 'mobile' ? 'flex-end' : 'flex-start')};
  gap: ${p => (p.mediaType === 'desktop' ? theme.space[5] : theme.space[4])};

  &:not(:last-child) {
    margin-bottom: ${theme.space[5]};
  }
`;

export const Info = styled.p`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.primary};
  display: flex;
  flex-direction: column;
`;

export const TotalPrice = styled.span`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
  margin-top: ${theme.space[4]};
`;

export const Id = styled.span`
  font-size: ${theme.fontSizes.s};
  margin-bottom: ${theme.space[4]};
`;

export const Items = styled.ul`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.r};
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${theme.space[4]};
`;

export const Item = styled.li`
  color: ${theme.colors.primary};
  background-color: ${theme.colors.background};
  padding: ${theme.space[3]};
  border-radius: ${theme.radii.normal};
  width: 100%;

  display: ${p => (p.mediaType === 'mobile' ? 'column' : ' flex')};
  align-items: baseline;
  gap: ${theme.space[4]};

  /* &:not(:last-child) {
    margin-bottom: ${theme.space[4]};
  } */
`;

export const Product = styled.p`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
`;
