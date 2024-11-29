import styled from 'styled-components';

//Components
import TopBar from '@BPSI/components/UI/Topbar';
import Table from '@BPSI/components/UI/Table';
import ButtonBackgroundRedirect from '@BPSI/components/UI/ButtonBackgroundRedirect';
import theme from '@BPSI/utils/theme';
import { useContext, useEffect, useMemo, useState } from 'react';

import { appContext } from '../../../provider';

import teamContext from '../../../components/TeamCreationComponent/store/team-context';

import { BASE_URL } from '../../../http';

const StyTeamCreation = styled.div`
  background: url('/assets/img/landing-background.svg');
  background-size: cover;
  padding: 2rem 3rem;
  height: 100vh;

  h1,
  h2,
  p {
    font-size: ${theme.typography.small};
    font-weight: 400;
    padding: 1.5rem 0;
    text-align: center;
    color: ${theme.colors.white};
  }

  h1 {
    text-transform: uppercase;
  }
`;

export default function SquadCodes({ nextStep }) {
  const { token } = useContext(appContext);

  const { players, teamId, teamName, setPlayersCode } = useContext(teamContext);

  useEffect(() => {
    const dataFetched = async () => {
      const response = await fetch(
        BASE_URL + `/players/proxy?team_id=${teamId}`,
        {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${token}`,
            } 
        },
      );
      const data = await response.json();
      setPlayersCode(data.players,);
    };

    dataFetched();
  }, []);

  return (
    <>
      <TopBar title="Squad" />
      <StyTeamCreation>
        <h1> {teamName} Squad</h1>
        <h2>take a screenshot &amp; send to your teammates!</h2>
        <div className="StyPlayerWrapper">
            <Table items={players} title='Player Code'/>
        <div className="SquadCreated__terms">
            <p>They will need their codes to redeem their stats.</p>
            <p>These codes have also been sent to your inbox. </p>
        </div>
        <ButtonBackgroundRedirect routerHref="/teams" text='NEXT'/>
        </div>
      </StyTeamCreation>
    </>
  );
}