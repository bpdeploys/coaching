import React from 'react';
import Modal from '../UI/Modal';
import styled from 'styled-components';
import theme from '@BPSI/utils/theme';

const StyTeamRectangle = styled.div`
  display: flex;
  width: 80vw;
  background: white;
  padding: 3rem 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  position: relative;

  div {
    padding-left: 1rem;
    display: flex;
    justify-content: space-around;

    h4,
    span {
      color: black;
      width: 18rem;
    }

    h4 {
      color: ${theme.colors.black};
      font-size: ${theme.typography.medium};
      display: block;
    }

    span {
      font-size: ${theme.typography.small};
      color: ${({ theme }) => theme.colors.darkGray};
    }
  }
`;

function FullWidthRectangle({ children, customClass }) {
  return (
    <StyTeamRectangle>
      <div className={customClass}>{children}</div>
    </StyTeamRectangle>
  );
}

export default FullWidthRectangle;
