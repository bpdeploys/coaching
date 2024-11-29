import styled from 'styled-components';

//Components
import TopBar from '@BPSI/components/UI/Topbar';
import ButtonBackgroundRedirect from '@BPSI/components/UI/ButtonBackgroundRedirect';
import theme from '@BPSI/utils/theme';
import { useContext, useEffect, useMemo, useState } from 'react';

import IndividualPlayer from '../../components/TeamSquadComponent/SquadMain';
import { appContext } from '../../provider';

import teamContext from '../../components/TeamCreationComponent/store/team-context';

import { BASE_URL } from '../../http';

const StyTeamCreation = styled.div`
  background: url('/assets/img/landing-background.svg');
  background-size: cover;
  padding: 2rem 3rem;
  height: 100vh;

  h1,
  h2 {
    font-size: ${theme.typography.small};
    font-weight: 400;
    padding: 1.5rem 0;
    text-align: center;
    color: ${theme.colors.white};
  }

  h1 {
    text-transform: uppercase;
  }

  .StyPlayerWrapper {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    margin-left: 2rem;
  }
`;

const StyTeamPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25%;
  margin: 1rem 1rem;

  span {
    font-size: ${theme.typography.small};
  }

  .hexagon {
    height: 90px;
    width: 90px;
    background: white;
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.typography.small};
    margin: 1rem 0.5rem;
    position: relative;

    img {
      width: 6rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .modal {
      height: 100vh !important;
    }
  }
`;

export default function TeamCreationS8({ nextStep }) {
  const { token } = useContext(appContext);

  const [playerPositions, setPlayerPositions] = useState([]);

  const { players, teamId, setNewPlayer } = useContext(teamContext);

  useEffect(() => {
    const dataFetched = async () => {
      const response = await fetch(
        BASE_URL + '/playing-positions'
      );
      const data = await response.json();
      //const squad = await fetch(
      //  BASE_URL + `/players/proxy?team_id=${teamId}`,
      //  {
      //    method: 'GET',
      //    headers: {
      //      'Content-Type': 'application/json',
      //      Authorization: `Token ${token}`,
      //    },
      //  }
      //);
      //const getPlayers = await squad.json();
//
      //getPlayers.map(player => {
      //  setNewPlayer(player)
      //})

      const filteredPosition = data.reduce(
        (arr, value) =>
          value.sport === 'Football'
            ? [
                ...arr,
                {
                  position: value.pitch_position,
                  abbreviated: value.abbreviated,
                  id: value.id,
                },
              ]
            : arr,
        []
      );

      setPlayerPositions(prev => prev.concat(filteredPosition));
    };

    dataFetched();
  }, []);

  const onSubmitHandler = async e => {
    e.preventDefault();

    const squad = players.reduce((arr, value) => {
      if (value.id && value.number && value.position && value && value.surname)
        return [...arr, value];

      return arr;
    }, []);

    if (squad.length === 0) {
      return;
    }

    const response = await fetch(
      BASE_URL + `/players/proxy/`,
      {
        method: 'POST',
        body: JSON.stringify(squad),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      }
    );
    const data = await response.json();
  };

  return (
    <>
      <TopBar title="Squad Creation" />
      <StyTeamCreation>
        <h1>Create your squad</h1>
        <h2>Click on the players to edit!</h2>
        <div className="StyPlayerWrapper">
          {players.map(player => (
            <IndividualPlayer
              data={player}
              positions={playerPositions}
              key={player.id}
            />
          ))}
        </div>
        <ButtonBackgroundRedirect routerHref="/squad/squadCodes" text='DONE'/>
      </StyTeamCreation>
    </>
  );
}

