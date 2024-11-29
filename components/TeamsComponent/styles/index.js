import styled from 'styled-components';
import theme from '@BPSI/utils/theme';

export const StyArrow = styled.img`
  width: 2rem;
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  align-self: center;
  /* position: absolute; */
  /* top: 50%; */
  /* transform: translateY(-50%); */
  /* right: 2rem; */
`;

export const StyLogo = styled.img`
  align-self: center;
  width: 6rem;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  margin-right: 2rem;
`;

export const StyTeamsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyTeams = styled.div`
  background: url('/assets/img/app-background.svg');
  background-size: cover;
  padding: 2rem 3rem;
  height: 100vh;
  width: 100%;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: ${theme.typography.medium};
    font-weight: 400;
    padding: 3rem 0;
    width: 80%;
  }

  p {
    font-size: ${theme.typography.extraSmall};
  }

  div {
    display: flex;
  }
`;
