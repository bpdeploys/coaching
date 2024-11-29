import React from 'react';
import Modal from '../UI/Modal';
import styled from 'styled-components';
import theme from '@BPSI/utils/theme';

const StyNotificationModal = styled.div`
  display: flex;
  background: white;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  .StyHeading {
    width: 100%;
    text-align: center;
    padding-top: 1.5rem;
    padding-bottom: 2rem;
    color: black;

    h2,
    p {
      color: black !important;
      margin-bottom: 1rem;
    }
  }

  .StyButtons {
    display: flex;
    margin-bottom: 3rem;
  }

  .btn {
    width: 6rem;
    height: 3rem;
    border: none;
    border-radius: 2px;
    font-size: ${theme.typography.small};

    &-accept {
      background: #3bba0c;
    }

    &-cancel {
      margin-left: 1.5rem;
      background: #e50404;
    }
  }
`;

function NotificationModal({ isOpen, toggle, children }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle} notification disableBg disableColor>
      <StyNotificationModal>
        <div className="StyHeading">
          <h2>U10 Whites</h2>
          <p>Dimitri Gbo</p>
          <p>This Team wants to join your club... Do you accept?</p>
        </div>
        <div className="StyButtons">
          <button className="btn btn-accept">&#10003;</button>
          <button onClick={() => toggle(false)} className="btn btn-cancel">
            &#10005;
          </button>
        </div>
      </StyNotificationModal>
      {children}
    </Modal>
  );
}

export default NotificationModal;
