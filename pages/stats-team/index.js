//Base Imports
import React, { useState } from 'react';
import styled from 'styled-components';

//Utils
import theme from '@BPSI/utils/theme';

//Components
import Link from 'next/link';
import FormModal from '@BPSI/components/FormModal/FormModal';
import FloatingButton from '@BPSI/components/UI/FloatingButton';
import Layout from '@BPSI/components/UI/Layout';
import TopBar from '@BPSI/components/UI/Topbar';
import NavbarMobile from '@BPSI/components/NavbarMobile';

const StyStatsTeam = styled.div`
  background: url('/assets/img/app-background.svg');
  background-size: cover;
  padding: 2rem 3rem;
  height: 100vh;

  h1 {
    font-size: ${theme.typography.medium};
    font-weight: 400;
    padding: 3rem 0;
    width: 80%;
  }

  p {
    font-size: ${theme.typography.extraSmall};
  }
`;

const StyJerseyRectangle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background: white;
  padding: 3rem 1rem;
  margin: 2rem 0;
  border-radius: 0.5rem;
  position: relative;

  img {
    width: 7rem;
  }

  div {
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h4 {
      color: ${theme.colors.black};
      font-size: ${theme.typography.medium};
    }

    span {
      color: ${theme.colors.black};
      font-size: ${theme.typography.extraSmall};
    }
  }
`;

const StyStatus = styled.span`
  height: 15px;
  width: 15px;
  padding: 0;
  border-radius: 50%;
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  &.active {
    background-color: red;
  }

  &.disabled {
    background-color: #bbb;
  }
`;

export default function StatsTeam() {
  const [isModalOpen, toggleModal] = useState(false);

  return (
    <Layout>
      <TopBar title="Stats team" />
      <StyStatsTeam>
        <StyJerseyRectangle>
          <img src="/assets/img/jersey.svg" alt="Jersey alt" />
          <Link href="/teamProfile">
            <div>
              <h4>Dimitri Gbo</h4>
              <span>U9 Coach</span>
            </div>
          </Link>
          <StyStatus className="disabled" />
        </StyJerseyRectangle>
        <StyJerseyRectangle>
          <img src="/assets/img/jersey.svg" alt="Jersey alt" />
          <Link href="/teamProfile">
            <div>
              <h4>Kamron Ahmed</h4>
              <span>U10 Coach</span>
            </div>
          </Link>
          <StyStatus className="active" />
        </StyJerseyRectangle>
        <StyJerseyRectangle>
          <img src="/assets/img/jersey.svg" alt="Jersey alt" />
          <Link href="/teamProfile">
            <div>
              <h4>Nick Davis</h4>
              <span>U12 Coach</span>
            </div>
          </Link>
          <StyStatus className="active" />
        </StyJerseyRectangle>
        <FloatingButton onClick={() => toggleModal(!isModalOpen)}>
          <span>+</span>
        </FloatingButton>
        <FormModal
          isOpen={isModalOpen}
          toggle={toggleModal}
          notification
          title="Invite new statsman"
        />
      </StyStatsTeam>
      <NavbarMobile />
    </Layout>
  );
}
