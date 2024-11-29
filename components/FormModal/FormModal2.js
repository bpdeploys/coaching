import React, { useEffect, useReducer, useRef } from 'react';
import Modal2 from '../UI/Modal2';

import { useState, useContext } from 'react';

import { appContext } from '../../provider';

import teamContext from '../TeamCreationComponent/store/team-context';
import {
  StyCloseButton,
  StyFormModal,
  StyHexagonAndTitle,
  StyForm,
  StySquad,
  SelectStyled,
  SelectDivStyled,
  StyDeleteButton,
} from '../TeamSquadComponent/styles';

import ButtonwBackground from '@BPSI/components/UI/ButtonwBackground';

import { BASE_URL } from '../../http';

const clearInputs = (...args) => args.map(fn => fn(''));

const validateInputs = (...args) =>
  args.every(value => value.trim().length === 0);
const trimInput = input => input.trim();

const getPlayerData = playerData => new Promise(resolve => resolve(playerData));

function FormModal2({ isOpen, toggle, playerData, positions }) {
  const { id } = playerData;
  const { setNewPlayer, editPlayer, teamId, deletePlayer } = useContext(teamContext);

  const { token } = useContext(appContext);

  const [playerName, setPlayerName] = useState('');
  const [surname, setSurname] = useState('');
  const [playerPosition, setPlayerPosition] = useState('');
  const [playerNumberOne, setPlayerNumberOne] = useState('');
  const [playerNumberTwo, setPlayerNumberTwo] = useState('');

  useEffect(() => {
    const fetchedUser = async () => {
      const { name, surname, position, playerNumberOne, playerNumberTwo } = await getPlayerData(
        playerData
      );

      setPlayerName(name);
      setSurname(surname);
      setPlayerPosition(position);
      setPlayerNumberOne(playerNumberOne);
      setPlayerNumberTwo(playerNumberTwo);
    };

    if (!id) return;

    fetchedUser();
  }, [id]);
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const onDeleteHandler = async e => {
    e.preventDefault();

    /**
			* States
		*/
    await fetch(
        BASE_URL + `/players/proxy/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        }
      );
      deletePlayer(id);
      toggle(false);
      return;
  }
  const onSubmitHandler = async e => {
    e.preventDefault();

    /**
			* States
		*/
    let player, response, data
    //This dont work
    if (validateInputs(playerName, playerPosition, surname, playerNumberTwo)) {
        return;
    }

    if (id != '' && id) {
      player = {
        proxy_name: playerName,
        proxy_surname: surname,
        playing_position: playerPosition,
        squad_number: playerNumberOne + playerNumberTwo,
      };
  
      response = await fetch(
        BASE_URL + `/players/proxy/${id}`,
        {
          method: 'PATCH',
          body: JSON.stringify(player),
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        }
      );
      data = await response.json();
      editPlayer({
        id: data.id,
        name: data.proxy_name,
        surname: data.proxy_surname,
        position: data.playing_position,
        playerNumberOne:playerNumberOne,
        playerNumberTwo:playerNumberTwo,
      });
      toggle(false);
      return;
    }

    player = {
      proxy_name: trimInput(playerName),
      proxy_surname: trimInput(surname),
      playing_position: trimInput(playerPosition),
      squad_number: playerNumberOne + playerNumberTwo,
      team_id: teamId,
    };

    response = await fetch(
      BASE_URL + `/players/proxy/`,
      {
        method: 'POST',
        body: JSON.stringify(player),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${token}`,
        },
      }
    );
    data = await response.json();
    setNewPlayer({
      name: data.proxy_name,
      surname: data.proxy_surname,
      position: data.playing_position,
      playerNumberOne:playerNumberOne,
      playerNumberTwo:playerNumberTwo,
      id: data.id,
    })
    clearInputs(
      setPlayerName,
      setSurname,
      setPlayerPosition,
      setPlayerNumberOne,
      setPlayerNumberTwo
    );
    toggle(false);
  };
  return (
    <Modal2 isOpen={isOpen} wdh hgt bdr>
      <StyFormModal>
        <StyHexagonAndTitle>
          {/* <h2 style={{ color: 'black' }}>Edit player!</h2>*/}
          <div>
            <img src="/assets/img/hexagon.svg" alt="Team Player" />
          </div>
        </StyHexagonAndTitle>
        <StyForm>
          <div>
            <input
              onChange={e => setPlayerName(e.target.value)}
              value={playerName}
              placeholder="First Name *"
            />
          </div>
          <div>
            <input
              onChange={e => setSurname(e.target.value)}
              value={surname}
              placeholder="Surname *"
            />
          </div>
          <SelectDivStyled>
            <SelectStyled
              name="select"
              id="select"
              onChange={e => setPlayerPosition(e.target.value)}
              value={playerPosition}
            >
              <option value="" hidden={true}>
                Playing Position *
              </option>
              {positions.map(position => (
                <option key={position.id} value={position.id}>
                  {position.abbreviated} - {position.position}
                </option>
              ))}
            </SelectStyled>
          </SelectDivStyled>

          <StySquad>
            <span style={{ color: '#252525' }}>Squad Number</span>
            <div className="inputs-container">
              <SelectDivStyled>
                <SelectStyled
                  bgs
                  pdg
                  // ref={playerNumberOne}
                  value={playerNumberOne}
                  onChange={e => setPlayerNumberOne(e.target.value)}
                >
                  <option value=""></option>
                  {numbers.map(num => (
                    <option key={num}>{num}</option>
                  ))}
                </SelectStyled>
              </SelectDivStyled>
              <SelectDivStyled>
                <SelectStyled
                  bgs
                  pdg
                  // ref={playerNumberTwo}
                  value={playerNumberTwo}
                  onChange={e => setPlayerNumberTwo(e.target.value)}
                >
                  <option value=""></option>
                  {numbers.map(num => (
                    <option key={num}>{num}</option>
                  ))}
                </SelectStyled>
              </SelectDivStyled>
            </div>
          </StySquad>
          <ButtonwBackground text="Done" callback={onSubmitHandler} />
          <StyDeleteButton onClick={e => onDeleteHandler(e)}>Delete</StyDeleteButton>
        </StyForm>
      </StyFormModal>
      <StyCloseButton onClick={() => toggle(false)}>&times;</StyCloseButton>
    </Modal2>
  );
}

export default FormModal2;
