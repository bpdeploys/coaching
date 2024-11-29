import React from 'react';
import Modal from '../UI/Modal';
import styled from 'styled-components';
import theme from '@BPSI/utils/theme';

const StyFormModal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  h2 {
    color: black;
    font-size: ${theme.typography.medium};
  }

  div {
    width: 80%;
    padding: 2.5rem 0;

    input[type='text'] {
      width: 100%;
      padding: 0.5rem;
      margin: 1rem 0;
      border: none;
      border-bottom: 1px solid black;
      font-size: 1.5rem;
      outline: none;
      transition: all 0.3s;
    }

    input[type='text']:hover,
    input[type='text']:select {
      border-bottom: 1px solid blue;
    }
  }

  input[type='submit'] {
    text-transform: uppercase;
    border: none;
    background: ${({ theme }) => theme.colors.black};
    color: ${theme.colors.white};
    font-size: ${theme.typography.medium};
    padding: 1rem;
    width: 80%;
    text-align: center;
    border-radius: 0.5rem;
    font-weight: 500;
  }
`;

function FormModal({ isOpen, toggle, title, children }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <StyFormModal>
        <h2>{title}</h2>
        <div>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <input type="number" placeholder="Phone number" />
          <input type="email" placeholder="Email address" />
        </div>
        <input type="submit" value="Invite" />
      </StyFormModal>
      {children}
    </Modal>
  );
}

export default FormModal;
