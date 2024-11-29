import styled from 'styled-components';
import theme from '../../../utils/theme';

export const StyledDiv = styled.div`
  padding: 1rem;
  font-size: 16px;
  margin: auto;
  text-align: center;
`;
export const FormButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 1rem 5rem;
  font-size: 2rem;
  border-radius: 5px;
  background-color: #000000;
  outline: none;
  border: none;
  transition: all 0.2s;
  width: 30rem;
  margin-top: 3rem;

  &:active {
    transform: translateY(5px);
  }
`;

export const ModalContentDiv = styled.div`
  display: grid;
  padding-top: 140px;
  //grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  text-align: center;
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #0d2155;
  }
  p {
    font-size: 2rem;
    color: #0d2155;
  }
  span {
    padding: 2rem;
    font-size: 2rem;
    color: #0d2155;
  }
  button {
    margin-top: 5rem;

    border: none;
  }
`;

export const StyAgeSelection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 100%;
  padding: 2rem 1rem;
  margin: 1rem 0;
  background: white;
  color: ${theme.colors.black};

  transition: all 0.3s;

  font-size: ${theme.typography.extraSmall};
  text-align: center;

  &:hover {
    border: 1px solid white;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.button`
  width: 50%;
  border-radius: 5rem;
  padding: 1rem;
  font-size: 1.5rem;
  background-color: white;
  color: black;
`;

export const Stepper = styled.div`
  height: 2.5rem;
  width: 100%;
  overflow: hidden;
  background-color: #efefef;
  border-radius: 5rem;

  & > div {
    transition-duration: 300ms;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

export const FormBox = styled.div`
  width: 95%;
  margin: 3rem 0;
  min-height: 45%;

  label {
    padding: 1rem;
    font-size: 2rem;
    margin: auto;
    text-align: center;
  }
  p {
    font-size: 2rem;
    margin: auto;
    text-align: center;
  }

  input {
    padding: 0.5rem;
    border-radius: 5rem;
    margin: 1.5rem 0rem;
    color: black;
  }
`;

export const BriefingForm = styled.form`
  .show {
    display: block;
  }

  .noshow {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.title};
  color: ${({ theme }) => theme.colors.tertiary};
  text-transform: uppercase;

  /* @media (max-width: 900px) {
    font-size: ${({ theme }) => theme.typography.extraLarge};
    margin-left: 5%;
    margin-top: 5%;
  }

  @media (max-width: 768px) {
    margin-top: 10%;
    margin-bottom: 5rem;
  }

  @media (max-width: 425px) {
    margin-top: 14%;
  } */

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const StyTeamCreation = styled.div`
  background: url('/assets/img/app-background.svg');
  background-size: cover;
  padding: 0rem 5rem;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: 400;
    /* padding: 3rem 0; */
    /* width: 80%; */
    margin-top: 5rem;
    color: ${theme.colors.white};
    font-size: ${theme.typography.small};
    text-align: center;
  }

  h2 {
    margin: auto;
    text-align: center;
    font-weight: 400;
    padding: 2rem 0;
    width: 80%;
    color: ${theme.colors.white};
    font-size: ${theme.typography.medium};
  }

  p {
    font-size: ${theme.typography.extraSmall};
  }
`;

export const CheckWrapper = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-right: 1.5rem;
  }

  label {
    font-size: 2rem;
  }
`;

export const ErrorSpan = styled.span`
  display: block;
  font-size: 1.5rem;
  color: red;
  margin-top: 1rem;
  font-style: italic;
  text-align: center;
`;

export const FormStyled = styled.form`
  background: url('/assets/img/app-background.svg');
  background-size: cover;
  padding: 0rem 2.5rem;
  padding-top: 2rem;
  padding-bottom: 8rem;
  min-height: 90vh;
  height: 100%;

  h1,
  h2 {
    font-size: 2.5rem;
    text-align: center;
    font-weight: 400;
    margin: 4rem 0;
  }

  h2 {
    margin-top: 4rem;
    margin-bottom: 0;
  }
`;

export const ShowIcon = styled.span`
  font-size: 2rem !important;
  margin-right: 1rem;
  transform: ${props => (props.checked ? `rotate(0)` : `rotate(180deg)`)};
`;

export const LabelStyled = styled.label`
  font-size: 2.5rem;
  display: flex;
  justify-content: space-between;
  transition: all 0.2s;
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;

  /* border-bottom: 1px solid #fff; */
  margin-top: 2rem;
  margin-bottom: 2rem;

  & > * {
    margin-bottom: 1rem;
  }

  input {
    font-size: 2rem;
    font-family: inherit;
    font-weight: inherit;
    color: #000;
    padding: 0 2rem;
    height: 5rem;
    border-radius: 12px;
  }

  span {
    font-size: 2.5rem;
    text-align: center;
  }
`;
