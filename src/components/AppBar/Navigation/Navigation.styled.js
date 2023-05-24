import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'theme';

export const Nav = styled.nav`
  ul {
    display: flex;
    align-items: center;
  }

  li {
    :not(:last-of-type) {
      margin-right: ${theme.space[4]};
    }

    :first-of-type {
      margin-right: ${theme.space[6]};
    }
  }
`;

export const Link = styled(NavLink)`
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.white};
  transition: ${theme.transition.primary};
  display: flex;
  align-items: center;
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  svg {
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
