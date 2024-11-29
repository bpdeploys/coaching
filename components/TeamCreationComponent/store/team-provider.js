import {  useReducer } from 'react';
import teamContext from './team-context';

const INITIAL_STATE = {
  teamName: '',
  teamAge: '',
  teamLeague: '',
  provider: '',
  venue: '',
  teamId: '',
  players: Array(1)
    .fill()
    .map(_ => ({
      name: '',
      surname: '',
      position: '',
      playerNumberOne:'',
      playerNumberTwo:'',
      id: '',
    })),
};

const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === 'NAME') return { ...state, teamName: payload };
  if (type === 'AGE') return { ...state, teamAge: payload };
  if (type === 'ID') return { ...state, teamId: payload };
  if (type === 'CODE') return { ...state, teamCode: payload };
  if (type === 'LEAGUE') return { ...state, teamLeague: payload };
  if (type === 'PROVIDER') return { ...state, provider: +payload };
  if (type === 'VENUE') return { ...state, venue: +payload };
  if (type === 'PLAYERS') {
    return { ...state, players: [payload, ...state.players] };
    // return { ...state, players: [...state.players, payload] };
  }
  if (type === 'EDIT') {

    const index = state.players.findIndex(value => value.id === payload.id);
    state.players[index] = payload
    return {...state, players: [...state.players]}

  }

  if (type === 'DELETE') {

    const index = state.players.findIndex(value => value.id === payload);
    state.players.splice(index, 1)
    return {...state, players: [...state.players]}

  }

  if (type === 'PLAYER-CODES') {

    return {...state, players: payload}

  }

  return state;
};

const TeamProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const { teamName, teamAge, teamLeague, teamId, teamCode, provider, venue, players } = state;

  const setIdHandler = teamId =>
    dispatch({
      type: 'ID',
      payload: teamId,
    });

  const setTeamCodeHandler = teamCode =>
    dispatch({
      type: 'CODE',
      payload: teamCode,
    });

  const setTeamNameHandler = teamName =>
    dispatch({
      type: 'NAME',
      payload: teamName,
    });

  const setTeamAgeHandler = teamAge =>
    dispatch({
      type: 'AGE',
      payload: teamAge,
    });

  const setTeamLeagueHandler = teamLeague =>
    dispatch({
      type: 'LEAGUE',
      payload: teamLeague,
    });

  const setProviderHandler = provider =>
    dispatch({
      type: 'PROVIDER',
      payload: provider,
    });

  const setVenueHandler = venue =>
    dispatch({
      type: 'VENUE',
      payload: venue,
    });

  const setNewPlayerHandler = players =>
    dispatch({
      type: 'PLAYERS',
      payload: players,
    });

  const editPlayerHandler = player =>
    dispatch({
      type: 'EDIT',
      payload: player,
    });

  const playerCodesHandler = players =>
    dispatch({
      type: 'PLAYER-CODES',
      payload: players,
    });

  const deletePlayerHandler = id =>
    dispatch({
      type: 'DELETE',
      payload: id,
    });

  return (
    <teamContext.Provider
      value={{
        teamName,
        teamAge,
        teamLeague,
        teamId,
        teamCode,
        provider,
        venue,
        players,
        setId: setIdHandler,
        setTeamCode: setTeamCodeHandler,
        setTeamName: setTeamNameHandler,
        setTeamAge: setTeamAgeHandler,
        setTeamLeague: setTeamLeagueHandler,
        setProvider: setProviderHandler,
        setVenue: setVenueHandler,
        setNewPlayer: setNewPlayerHandler,
        editPlayer: editPlayerHandler,
        setPlayersCode: playerCodesHandler,
        deletePlayer: deletePlayerHandler,
      }}
    >
      {children}
    </teamContext.Provider>
  );
};

export default TeamProvider;
