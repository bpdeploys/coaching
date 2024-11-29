//Base imports
import Link from 'next/link';
import React, { useState } from 'react';

//Styles
import styled from 'styled-components';
import theme from '@BPSI/utils/theme';

//UI
import TopBar from '@BPSI/components/UI/Topbar';
import NavbarMobile from '@BPSI/components/NavbarMobile';

//Components
import DetailsBox from '@BPSI/components/DetailsBox/DetailsBox';
import OptionsButton from '@BPSI/components/OptionsButton/OptionsButton';
import { useMediaQuery } from '@BPSI/utils/useMediaQuery';
import DesktopLayout from '@BPSI/components/LayoutDesktop';
import Modal from '@BPSI/components/NotificationModal';

const StyClubhouse = styled.div`
  background: url('/assets/img/app-background.svg');
  background-size: cover;
  padding: 3rem 3rem;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyClubInfo = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 4rem;

  div {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;

    h1 {
      font-size: 3rem;
    }

    span {
      font-size: 1.5rem;
    }
  }
`;

const StyDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 2rem;

  .StyDetailsTitle {
    display: block;
    width: 100%;
    margin-bottom: 1.5rem;
    span {
      font-size: 2rem;
    }
  }
`;

const TeamStatsHeader = styled.div`
  display: flex;
  margin-left: 3.6rem;
  margin-top: 2.8rem;
  position: relative;
`;

const TeamStatsHeaderLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;

  & h1 {
    font-size: 3rem;
    color: ${theme.colors.black};
  }

  & span {
    color: ${theme.colors.black};
    font-size: 2rem;
  }
`;

const StatWrapper = styled.div`
  display: flex;
  margin-left: 3.6rem;

  & > div:not(:last-child) {
    margin-right: 6.6rem;
  }
`;

const StatName = styled.h3`
  margin-top: 4rem;
  color: ${theme.colors.black};
  font-size: 1.6rem;
  margin-left: 3.6rem;
  margin-bottom: 3rem;
`;

const StyFloatingTopButton = styled.div`
  background: ${(props) => (props.color ? '#000000' : '#183277')};
  padding: 0.5rem 1rem;
  width: 16rem;
  display: flex;
  justify-content: center;
  position: absolute;
  top: ${(props) => props.positionTop};
  right: ${(props) => props.positionright};
  border-radius: 50px;

  a {
    font-size: 1.6rem;
    font-style: italic;
  }

  img {
    width: 1.2rem;
  }
`;

const CreateClubButton = styled.div`
  border: 3px solid ${theme.colors.white};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 70px;
  font-weight: 400;
  font-size: 3.2rem;
  margin-bottom: 4rem;
`;

export default function Clubhouse() {
  const [isModalOpen, toggleModal] = useState(false);
  let isDesktop = useMediaQuery('(min-width: 1024px)');

  let mobileView = (
    <>
      <TopBar title="Clubhouse" profile />
      <StyClubhouse>
        <Modal isOpen={isModalOpen} toggle={toggleModal} notification />
        <CreateClubButton onClick={() => toggleModal(!isModalOpen)}>
          Create a Club
        </CreateClubButton>
        <StyDetailsWrapper>
          <div className="StyDetailsTitle">
            <span>Backroom</span>
          </div>
          <DetailsBox
            number="2"
            name="Coaches"
            img="/assets/img/jersey.svg"
            href="/coaches"
          />
          <DetailsBox
            number="7"
            name="Stats Team"
            href="/coaches"
            img="/assets/img/StatsIcon.svg"
          />
        </StyDetailsWrapper>
        <StyDetailsWrapper>
          <div className="StyDetailsTitle">
            <span>Teams</span>
          </div>
          <DetailsBox
            img="/assets/img/TeamShield.svg"
            number="8"
            name="Teams"
            href="/teams"
          />
          <DetailsBox
            number="82"
            name="Players"
            img="/assets/img/player-icon.svg"
            href="/players"
          />
        </StyDetailsWrapper>
      </StyClubhouse>
      <OptionsButton />
      <NavbarMobile />
    </>
  );

  let desktopView = (
    <DesktopLayout title="CLUBHOUSE">
      <TeamStatsHeader>
        <img src="/assets/img/panthere-dark-logo-300.svg" alt="" />
        <TeamStatsHeaderLegend>
          <h1>Panthera FC</h1>
          <span>London</span>
          <StyFloatingTopButton positionTop="2rem" positionright="2rem">
            <a href="">Edit Club Details</a>
          </StyFloatingTopButton>
          <StyFloatingTopButton color positionTop="6rem" positionright="2rem">
            <a href="">Create New Club</a>
          </StyFloatingTopButton>
        </TeamStatsHeaderLegend>
      </TeamStatsHeader>
      <StatName>Backroom Staff</StatName>
      <StatWrapper>
        <DetailsBox number="12" name="Coaches" img="/assets/img/jersey.svg" />
        <DetailsBox
          number="22"
          name="Stats Team"
          img="/assets/img/StatsIcon.svg"
        />
        <DetailsBox
          number="3"
          name="Club Admin"
          img="/assets/img/AdminIcon.svg"
        />
      </StatWrapper>
      <StatName>Teams</StatName>
      <StatWrapper>
        <DetailsBox number="8" name="Teams" img="/assets/img/Clubhouse.svg" />
        <DetailsBox
          number="82"
          name="Players"
          img="/assets/img/player-icon.svg"
        />
      </StatWrapper>
      <StatName>Venues</StatName>
      <StatWrapper>
        <DetailsBox number="3" name="Coaches" img="/assets/img/Clubhouse.svg" />
        <DetailsBox
          number="7"
          name="Stats Team"
          img="/assets/img/player-icon.svg"
        />
      </StatWrapper>
    </DesktopLayout>
  );

  return <>{!isDesktop ? mobileView : desktopView}</>;
}
