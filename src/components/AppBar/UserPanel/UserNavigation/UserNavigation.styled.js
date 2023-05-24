import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'theme';

export const UserNav = styled.ul`
  display: flex;
  align-items: center;

  li {
    :not(:last-of-type) {
      margin-right: ${theme.space[4]};
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
