import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

import { CgClose } from 'react-icons/cg';

import useLockBodyScroll from 'hooks/useLockBodyScroll';

import IconButton from 'components/shared/IconButton';
import { Backdrop, ModalWindow } from './Modal.styled';
import theme from 'theme';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ toggleModal, showModal, children }) => {
  const closeModal = useCallback(
    ({ code, target, currentTarget }) => {
      if (target === currentTarget || code === 'Escape') {
        toggleModal();
      }
    },
    [toggleModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  }, [closeModal, toggleModal]);

  useLockBodyScroll();

  return createPortal(
    <Backdrop onClick={closeModal}>
      <ModalWindow>
        <IconButton
          icon={CgClose}
          iconSize={20}
          ariaLable="close button"
          onClick={toggleModal}
          backgroundColor={theme.colors.secondary}
          color={theme.colors.primary}
        />
        {children}
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
