import styled from 'styled-components';
import theme from 'theme';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 250px;
  overflow: ${p => (p.mediaType === 'desktop' ? 'unset' : 'scroll')};
  height: ${p => (p.mediaType === 'mobile' ? '100vh' : 'auto')};
  width: ${p => (p.mediaType === 'mobile' ? '100vw' : 'auto')};
  padding: ${theme.space[5]};
  padding-top: ${theme.space[6]};
  background-color: ${theme.colors.background};
  border-radius: ${theme.radii.high};
  box-shadow: ${theme.shadow.high};
  z-index: 2;

  button[aria-labelledby='close button'] {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;
