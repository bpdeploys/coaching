//Base Imports
import styled from 'styled-components';

import NavbarMobile from '@BPSI/components/NavbarMobile';
import TopBar from '@BPSI/components/UI/Topbar';
import StyledTeams from '../../components/TeamsComponent/components/StyledTeams';
import { Fragment } from 'react';
import { useContext, useEffect, useState } from 'react';
import { appContext } from '../../provider';
import FloatingButton from '@BPSI/components/UI/FloatingButton';
import Link from 'next/link';

const StyBackgound = styled.div`
  background: url('/assets/img/app-background.svg');
  background-size: cover;
  padding: 2rem 3rem;
  height: 90vh;
  width: 100%;
  overflow-y: hidden;
`;

const StyTeams = styled.div`
  display: flex;
  flex-direction: column;
  height: 520px;
`;

const PaginationBox = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PaginationButton = styled.button`
  background-color: #000;
  padding: 1rem 3rem;
  outline: none;
  border: none;
`;

const LoadingMsg = styled.p`
  font-size: 2rem;
  text-align: center;
`;

const MAX_RESULT = 4;

export default function Teams() {
  const { token } = useContext(appContext);
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(0);
  const [previ, setPrevi] = useState(0);
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const teamRequest = async token => {
      setIsLoading(true);
      try {
        const response = await fetch('https://www.bp-core-api-dev.co.uk/api/current-user/', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`,
          },
        });
        const data = await response.json();

        // const response2 = await fetch(
        //   `https://www.bp-core-api-dev.co.uk/api/teams/81/players`
        // );
        // const data2 = await response2.json();
        console.log(data);
        // console.log(data2);

        setInfo(prevState => [...prevState, data]);

        setTotal(_ => data.length);
        setNext(prevNext => prevNext + 4);
      } catch (error) {
        console.log('error');
      } finally {
        setIsLoading(false);
      }
    };
    teamRequest(token);
  }, []);

  const nextHandler = () => {
    setPrevi(prevNext => prevNext + MAX_RESULT);
    setNext(prevNext => prevNext + MAX_RESULT);
  };

  const prevHandler = () => {
    setPrevi(prevNext => prevNext - MAX_RESULT);
    setNext(prevNext => prevNext - MAX_RESULT);
  };

  console.log(info[0]);

  const teamMarkup =
    info[0]?.teams
      .slice(previ, next)
      .map(data => (
        <StyledTeams
          key={Math.random()}
          ageGroup={data.age_group}
          teamName={data.team_name}
          teamCoach={info[0]?.user?.first_name ?? ''}
        />
      )) ?? '';

  return (
    <Fragment>
      <TopBar title="Teams" />
      <StyBackgound>
        {isLoading && <LoadingMsg>Loading...</LoadingMsg>}

        {!isLoading && info[0]?.teams.length === 0 && (
          <LoadingMsg>There is no team to show..please create a team down below</LoadingMsg>
        )}
        {!isLoading && info.length !== 0 && <StyTeams>{teamMarkup}</StyTeams>}

        <PaginationBox>
          {next >= 5 && <PaginationButton onClick={prevHandler}>Prev</PaginationButton>}
          {info.length >= 5 && next <= info[0]?.teams.length && (
            <PaginationButton onClick={nextHandler}>Next</PaginationButton>
          )}
        </PaginationBox>
      </StyBackgound>

      <Link href="/teams/team-creation/sport">
        <FloatingButton>
          <span>+</span>
        </FloatingButton>
      </Link>
      <NavbarMobile />
    </Fragment>
  );
}
