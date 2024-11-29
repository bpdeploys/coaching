import { Fragment, useContext } from 'react';

import Picker from './Picker';
import teamContext from './store/team-context';

const AgePicker = () => {
  const { setTeamAge, teamAge } = useContext(teamContext);

  //prettier-ignore
  const userOptions = ['U5', 'U6', 'U7', 'U8', 'U9', 'U10', 'U11', 'U12', 'U13', 'U14', 'U15', 'U16', 'U17', 'U18', 'Senior', ]

  return (
    <Picker
      data={{
        setUserChoice: setTeamAge,
        valuesArr: userOptions,
        labelName: 'Age',
        userChoice: teamAge,
      }}
    />
  );
};

export default AgePicker;
