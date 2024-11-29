import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import theme from '@BPSI/utils/theme';

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

const StyModal = styled.div`
  position: fixed;
  background: ${(props) => (props.bgc ? '#0d2155' : '#fff')};
  width: ${(props) => (props.wdh ? '100vw' : '85%')};
  height: ${(props) => (props.hgt ? '100vh' : 'auto')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${(props) => (props.bdr ? 'none' : '10px')};
  padding: 2rem 20px;
  box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

const StyNotification = styled.div`
  position: fixed;
  background-color: ${(props) => (props.disableBg ? '' : '#0d2155')};
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0 2px 4px 0 rgba(50, 50, 93, 0.1);
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

export const StyCloseButton = styled.span`
  position: absolute;
  top: 0rem;
  right: 1.5rem;
  font-size: ${theme.typography.extraLarge};
  color: ${(props) => (props.bgc ? '#FFF' : '#000')};
  cursor: pointer;
`;

function Modal({ isOpen, toggle, children, notification, ...props }) {
  const ref = useRef();

  useOnClickOutside(ref, () => toggle(false));

  return (
    <ModalBackground isOpen={isOpen}>
      {notification ? (
        <StyNotification ref={ref} isOpen={isOpen} disableBg={props.disableBg}>
          <StyCloseButton onClick={() => toggle(false)}>&times;</StyCloseButton>
          {children}
        </StyNotification>
      ) : (
        <StyModal
          ref={ref}
          isOpen={isOpen}
          bgc={props.bgc}
          wdh={props.wdh}
          hgt={props.hgt}
          bdr={props.bdr}
        >
          {children}
        </StyModal>
      )}
    </ModalBackground>
  );
}

export default Modal;
