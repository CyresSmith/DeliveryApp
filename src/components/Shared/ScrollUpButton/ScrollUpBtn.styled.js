import styled from 'styled-components';
import theme from 'theme';

const ScrollUpButton = styled.button`
  position: fixed;
  bottom: ${p => (p.mediaType === 'desktop' ? theme.space[6] : theme.space[4])};
  right: ${p => (p.mediaType === 'desktop' ? theme.space[6] : theme.space[4])};
  display: inline-flex;
  opacity: 0.7;
  padding: ${theme.space[3]};
  color: ${theme.colors.secondary};
  background-color: ${p =>
    p.disabled ? theme.colors.muted : theme.colors.accent};
  cursor: pointer;
  border: ${theme.borders.none};
  border-radius: ${p => (p.round ? theme.radii.round : theme.radii.normal)};
  box-shadow: ${theme.shadow.low};
  transition-property: all;
  transition-duration: 250ms;
  transition-timing-function: ease-in-out;

  :hover:not(:disabled) {
    background-color: ${theme.colors.accent};
    box-shadow: ${theme.shadow.medium};
    scale: 1.1;
    opacity: 1;
  }
`;

export default ScrollUpButton;
