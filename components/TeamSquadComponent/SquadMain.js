import { useState, useContext } from 'react';

import FormModal2 from '../../components/FormModal/FormModal2';

import teamContext from '../TeamCreationComponent/store/team-context';

import { StyTeamPlayer } from '../TeamSquadComponent/styles';

const IndividualPlayer = ({ data, positions }) => {
  const { name, number, id } = data;
  const [modal, setModal] = useState(false);
  const { players } = useContext(teamContext);
  const [selectedPlayer, setSelectedPlayer] = useState({
    id: '',
    name: '',
    number: '',
  });

  const onClickHandler = () => {
    if (!id) {
      setModal(true);
      return;
    }

    const player = players.find(player => player.id === id);
    setSelectedPlayer(player);
    setModal(true);
  };

  return (
    <>
      <StyTeamPlayer onClick={onClickHandler}>
        {/* <StyTeamPlayer onClick={setModal.bind(null, !modal)}> */}
        <div className="hexagon">
          <img src="/assets/img/bluejersey.svg" alt="Team Player" />
          <span className="teamNumber">{number != '' ?  number : '00'}</span>
        </div>
        <div className="StyPlayerName">
          <span>{name != '' ?  name : 'Player'}</span>
        </div>
      </StyTeamPlayer>
      <FormModal2
        className="modal"
        isOpen={modal}
        toggle={setModal}
        positions={positions}
        playerData={selectedPlayer}
      />
    </>
  );
};
export default IndividualPlayer;
