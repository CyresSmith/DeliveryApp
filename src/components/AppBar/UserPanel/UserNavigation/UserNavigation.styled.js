import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'theme';

export const UserNav = styled.ul`
  display: flex;
  flex-direction: ${p => (p.mediaType === 'mobile' ? 'column' : 'row')};
  align-items: ${p => (p.mediaType === 'mobile' ? 'flex-start' : 'center')};

  li {
    :not(:last-of-type) {
      margin-right: ${p => (p.mediaType === 'mobile' ? 0 : theme.space[4])};
      margin-bottom: ${p => (p.mediaType === 'mobile' ? theme.space[4] : 0)};
    }
  }
`;

export const Link = styled(NavLink)`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.background};
  transition: ${theme.transition.primary};
  display: flex;
  align-items: center;

  svg {
    margin-right: ${theme.space[2]};
  }

  &.active {
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.accent};
    padding: ${theme.space[1]} ${theme.space[3]};
    border-radius: ${theme.radii.normal};
    box-shadow: ${theme.shadow.medium};

    :hover {
      color: ${theme.colors.secondary};
    }
  }

  :hover {
    color: ${theme.colors.accent};
  }
`;
