import styled from 'styled-components';
import theme from 'theme';

export const Info = styled.p`
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
`;

export const MapBox = styled.div`
  width: 100%;
  height: 250px;
  border-radius: ${theme.radii.normal};
  overflow: hidden;
  margin-bottom: ${theme.space[4]};
`;
