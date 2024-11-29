import { Fragment, useContext, useEffect, useState } from 'react';
import NavbarMobile from '../../components/NavbarMobile';
import TopBar from '../../components/UI/Topbar';
import AgePicker from './AgePicker';
import Finished from './Finished';
import LegalPicker from './LegalPicker';

import teamContext from './store/team-context';
import TeamPicker from './TeamPicker';
import { ErrorSpan, FormStyled, FormButton } from './styles';
// import { FormButton } from './styles/Styles';
import styled from 'styled-components';
import TypePicker from './TypePicker';
import ProviderPicker from './ProviderPicker';
import VenuePicker from './VenuePicker';
import { appContext } from '../../provider';
import router from 'next/router';
import { BASE_URL } from '../../http';


const FootballSpan = styled.span`
  display: inline-block;
  padding: 1rem 3rem;
  border-radius: 50px;
  font-size: 2rem;
  border: 2px solid #fff;
  margin-bottom: 4rem;
`;

const multiValidation = (...args) => args.every(value => value);

const TeamMain = () => {
  const { token } = useContext(appContext);
  const [isModalOpen, toggleModal] = useState(false);

  const { teamName, teamAge, teamLeague, provider, venue, setId, setTeamCode } =
    useContext(teamContext);
  const [isFormInvalid, setIsFormInvalid] = useState(null);
  const [formWasTouched, setFormWasTouched] = useState(false);
  const [error, setError] = useState('');

  const httpHandler = async teamData => {
    try {
      const response = await fetch(
        BASE_URL + `/teams`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify(teamData),
        }
      );

      const data = await response.json();
      console.log(data);

      if (data.error) throw new Error(data.error);
      console.log(data);
      // router.push('/teams');

      const { id: idData, team_code: teamCode } = data;

      setId(idData);
      setTeamCode(teamCode);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };
  //console.log(data);
  const onSubmitHandler = e => {
    e.preventDefault();

    //prettier-ignore
    if(!multiValidation(teamName, teamAge, teamLeague, provider, venue)){
      setIsFormInvalid(true)
      return
    }
    const sport = 'Football';
    const kit = 'false';
    const number = 'false';
    const teamData = {
      kit: kit,
      number: number,
      team_name: teamName,
      age_group: teamAge,
      team_type: teamLeague,
      sport_entity: provider,
      venue: venue,
      sport: sport,
    };

    httpHandler(teamData);
    setIsFormInvalid(null);
    setFormWasTouched(false);
    toggleModal(!isModalOpen);
  };

  return (
    <Fragment>
      <TopBar title="Team Creation" />
      <FormStyled
        onSubmit={onSubmitHandler}
        onFocus={() => setFormWasTouched(true)}
      >
        <h1>Create Your Team</h1>
        <FootballSpan>Football</FootballSpan>
        <TeamPicker />
        <AgePicker />
        <TypePicker />
        <h2>League information</h2>
        <ProviderPicker />
        {provider && <VenuePicker />}
        <FormButton>Create Team</FormButton>
        {isFormInvalid && formWasTouched && (
          <ErrorSpan>All fields are required!</ErrorSpan>
        )}
      </FormStyled>
      (
      <Finished
        isOpen={isModalOpen}
        toggle={toggleModal}
        notification
        teamName={teamName}
      />
      )
      <NavbarMobile />
    </Fragment>
  );
};

export default TeamMain;
