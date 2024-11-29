import styled from 'styled-components';
import theme from '../../../utils/theme';

export const SelectDivStyled = styled.div`
  position: relative;

  &:after {
    background: url('http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png')
      no-repeat right #black;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const SelectStyled = styled.select`
  font-family: inherit;
  color: #252525;
  font-size: ${theme.typography.extraSmall};
  padding: ${props => (props.pdg ? '0 0 0.5rem 2rem' : '0 0 1.5rem')};
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid black;

  width: 80%;
  box-shadow: none;

  background: url('/assets/img/select-icon-black.svg') no-repeat right;
  background-size: ${props => (props.bgs ? '15%' : '5%')};
  appearance: none;
  background-position-x: 98%;

  option {
    color: #252525;
    font-size: 1.5rem;
    background-color: #fff;
    border-bottom: 1px solid #fff;
  }
`;

export const StyTeamPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 25%;
  margin: 1rem 1rem;
  cursor: pointer;

  span {
    font-size: ${theme.typography.small};
  }

  .teamNumber {
    color: #fff;
    z-index: 10;
  }

  .hexagon {
    height: 90px;
    width: 90px;
    background: white;
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.typography.small};
    margin: 1rem 0.5rem;
    position: relative;

    img {
      width: 6rem;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .modal {
      height: 100vh !important;
    }
  }
`;

export const StyButton = styled.div`
  margin-top: 3rem;

  button {
    height: 3rem;
    width: 25rem;
    color: white !important;
    background: #252525;
  }
`;

export const StySquad = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 6.5rem;

  span {
    font-size: ${theme.typography.extraSmall};
    color: #252525;
    font-weight: 100;
    margin-left: 1rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .inputs-container {
    width: 40%;
  }

  .inputs-container div {
    margin: 0 0.7rem;
  }
`;

export const StyForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  div input {
    color: #252525;
    font-size: ${theme.typography.extraSmall};
    padding: 0 0 1.5rem;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid black;
    margin: 2rem 0;
    width: 80%;
    box-shadow: none;
  }

  div .icon {
    height: 17px;
    width: 17px;
    display: flex;
    position: absolute;
    left: 80%;
    top: 60%;
    transform: translate(-50%, -50%);
  }
  .span {
    color: #252525;
    padding-top: 3rem;
    font-size: 1.5rem;
  }
`;

export const StyHexagonAndTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;

  div img {
    margin-top: 2rem;
    height: 12rem;
    width: 12rem;
  }
`;

export const StyCloseButton = styled.span`
  position: absolute;
  padding-top: 1rem;
  top: 0rem;
  right: 1.5rem;
  font-size: ${theme.typography.extraLarge};
  color: ${props => (props.bgc ? '#FFF' : '#000')};
`;

export const StyFormModal = styled.div`
  height: 60vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BgcStyled = styled.div`
  background: url('/assets/img/app-background.svg');
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: min-content;
  gap: 4rem;

  background-size: cover;
  padding: 0rem 2.5rem;
  padding-top: 5rem;
  padding-bottom: 8rem;
  height: 100vh;

  h1,
  h2 {
    font-size: 2.5rem;
    text-align: center;
    font-weight: 400;
    /* margin: 4rem 0; */
    grid-column: 1 / -1;
  }

  h2 {
    margin-bottom: 4rem;
  }
`;


export const StyDeleteButton = styled.span`
  font-size: ${theme.typography.large};
  color: black;
  margin: 2rem;
  padding: 0.5rem;
`;