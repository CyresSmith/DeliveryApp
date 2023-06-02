import styled from 'styled-components';
import theme from 'theme';

export const Item = styled.li`
  display: flex;
  flex-direction: ${p => (p.mediaType === 'mobile' ? 'column' : 'row')};
  flex: ${p => (p.mediaType === 'mobile' ? '100%' : '80%')};
  height: ${p => (p.mediaType === 'mobile' ? 'auto' : '150px')};
  background-color: ${theme.colors.white};
  border-radius: ${theme.radii.normal};
  overflow: hidden;
  box-shadow: ${theme.shadow.low};

  &:not(:last-child) {
    margin-bottom: ${theme.space[5]};
  }
`;

export const Image = styled.img`
  height: ${p => (p.mediaType === 'mobile' ? '200px' : '100%')};
  width: ${p => (p.mediaType === 'mobile' ? '100%' : '150px')};
  object-fit: cover;
`;

export const InfoBox = styled.div`
  padding: ${theme.space[4]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: ${p => (p.mediaType === 'mobile' ? 'column' : 'row')};
  gap: ${p => (p.mediaType === 'mobile' ? 0 : theme.space[4])};
  align-items: ${p => (p.mediaType === 'mobile' ? 'flex-start' : 'center')};
  color: ${theme.colors.primary};
  text-align: left;
`;

export const Name = styled.p`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeights.bold};
`;

export const Price = styled.p`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.regular};
`;

export const Count = styled.p`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.regular};
`;

export const Total = styled.p`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
`;

export const Desc = styled.p`
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeights.regular};
  margin-bottom: ${theme.space[4]};
`;

export const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.space[4]};
  margin-left: ${p => (p.mediaType === 'mobile' ? 0 : 'auto')};
  margin-top: ${p => (p.mediaType === 'mobile' ? theme.space[5] : 'auto')};
`;
