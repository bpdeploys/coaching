import React from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, ${(props) => (props.isOpen ? 0.2 : 0)});
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  transition: background 0.2s ease-in-out;
  z-index: 9998;
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
  z-index: 9999;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.2s ease-in-out;
`;

function Modal2({ isOpen, toggle, children, ...props }) {
  return (
    <ModalBackground isOpen={isOpen} onClick={toggle}>
      <StyModal
        isOpen={isOpen}
        bgc={props.bgc}
        wdh={props.wdh}
        hgt={props.hgt}
        bdr={props.bdr}
        onClick={(e) => e.stopPropagation()} // Prevents click from closing modal
      >
        {children}
      </StyModal>
    </ModalBackground>
  );
}

export default Modal2;
