import { createContext } from 'react';

const teamContext = createContext({
  teamName: '',
  teamAge: '',
  teamLeague: '',
  teamId: '',
  teamCode: '',
  provider: '',
  venue: '',
  players: [],
  setId: id => {},
  setTeamName: team => {},
  setTeamLeague: teamLeague => {},
  setTeamCode: teamCode => {},
  setTeamAge: age => {},
  setProvider: int => {},
  setVenue: int => {},
  setNewPlayer: players => {},
  editPlayer: player => {},
  deletePlayer: int => {}
});

export default teamContext;
