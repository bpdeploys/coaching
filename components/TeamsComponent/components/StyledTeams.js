import React from 'react';

import StyRightArrow from './StyRightArrow';
import StyTeamsLogo from './StyTeamsLogo';
//import StyTeams from '../components/TeamsComponent/styles/index';
import theme from '@BPSI/utils/theme';
import styled from 'styled-components';
import FullWidthRectangle from '@BPSI/components/FullWidthRectangle';

import { StyTeamsContainer } from '../styles';

const NewH4 = styled.h4`
  font-size: 2rem;
  color: #000;
  align-self: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NewSpan = styled.span`
  font-size: 2rem;
  color: #000;
  align-self: center;
`;

const StySingle = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  margin-bottom: 2rem;
  gap: 1rem;
  height: 11rem;
`;

function StyledTeams({ ageGroup, teamName, teamCoach, state, ...props }) {
  // const teamString =
  //   teamName.length > 20
  //     ? `${teamName.slice(0, 15)}
  //       ${teamName.slice(15, -1)}`
  //     : teamName;

  return (
    <>
      <StySingle>
        <StyTeamsLogo />
        <NewH4>
          {ageGroup} {teamName}
        </NewH4>
        <NewSpan>{teamCoach}</NewSpan>
        <StyRightArrow />
      </StySingle>
    </>
  );
}
export default StyledTeams;
