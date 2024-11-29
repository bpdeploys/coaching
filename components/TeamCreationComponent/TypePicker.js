import { Fragment, useContext } from 'react';

import Picker from './Picker';
import teamContext from './store/team-context';
import { ErrorSpan } from './styles';

const TypePicker = () => {
  const { setTeamLeague, teamLeague } = useContext(teamContext);

  //prettier-ignore
  const userOptions = ['Sunday league', 'Saturday', 'Midweek', 'Primary School', 'District', 'College', 'University', 'Secondary', 'County', 'Showcase', 'Work' ]

  return (
    <Picker
      data={{
        setUserChoice: setTeamLeague,
        valuesArr: userOptions,
        labelName: 'Team Type',
        userChoice: teamLeague,
      }}
    />
  );
};

export default TypePicker;
