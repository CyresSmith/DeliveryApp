import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'theme';

export const Nav = styled.nav`
  margin-left: ${p => (p.mediaType === 'desktop' ? theme.space[5] : 0)};
`;

export const NavList = styled.ul`
  display: ${p => (p.mediaType === 'desktop' ? 'flex' : 'block')};
  align-items: center;
`;

export const NavItem = styled.li`
  :not(:last-of-type) {
    margin-right: ${p => (p.mediaType === 'desktop' ? theme.space[4] : 0)};
    margin-bottom: ${p => (p.mediaType === 'desktop' ? 0 : theme.space[4])};
  }
`;

export const Link = styled(NavLink)`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.white};
  transition: ${theme.transition.primary};
  display: inline-flex;
  align-items: center;
  transition: ${theme.transition.primary} svg {
    margin-right: ${theme.space[2]};
  }

  &.active {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};
    padding: ${theme.space[1]} ${theme.space[3]};
    border-radius: ${theme.radii.normal};
    box-shadow: ${theme.shadow.medium};

    :hover {
      color: ${theme.colors.primary};
      background-color: ${theme.colors.accent};
    }
  }

  :hover {
    color: ${theme.colors.accent};
  }
`;
