import styled from 'styled-components';
import { AppContainer } from '@BPSI/components/UI/Container';
import Layout from '@BPSI/components/UI/Layout';
import TopBar from '@BPSI/components/UI/Topbar';
import theme from '@BPSI/utils/theme';
import FormInput from '@BPSI/components/UI/Form/FormInput';

const PlayerHeader = styled.div`
  color: ${theme.colors.white};
  font-size: ${theme.typography.large};
  margin-bottom: 2rem;
`;

const SquadNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span,
  & > h3 {
    font-weight: 400;
    color: ${theme.colors.white};
    font-size: 1.6rem;
  }

  & > h3 {
    line-height: 1;
    margin-top: 0.5rem;
  }
`;

const HeaderFields = styled.h2`
  color: ${theme.colors.white};
  font-weight: 400;
  font-size: 2.5rem;
  margin: ${(props) => (props.margin ? props.margin : null)};
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const ButtonDone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  max-width: 30rem;
  height: 3.6rem;
  width: 100%;
  border-radius: 50px;
  font-size: 2rem;
  margin: ${(props) => (props.margin ? props.margin : null)};
`;

export default function UpdatePlayer() {
  return (
    <Layout>
      <TopBar title="Player" />
      <AppContainer>
        <PlayerHeader>Daniel Hardman</PlayerHeader>
        <SquadNumber>
          <span>Squad Number:</span>
          <h3>15</h3>
        </SquadNumber>
        <HeaderFields margin="5rem 0 3rem 0">Parents</HeaderFields>

        <FormInput id="parent-1-name" type="text" label="Parent 1 name" />
        <FormInput id="parent-1-email" type="email" label="Parent 1 email" />
        <FormInput
          id="parent-1-phone"
          type="number"
          label="Parent 1 phone number"
        />
        <FormInput id="parent-2-name" type="text" label="Parent 2 name" />
        <FormInput id="parent-2-email" type="email" label="Parent 2 email" />
        <FormInput
          id="parent-2-phone"
          type="number"
          label="Parent 2 phone number"
        />
        <HeaderFields margin="6rem 0 3rem 0">Teams</HeaderFields>
        <FormInput id="team-1" type="text" label="Team 1" />
        <FormInput id="team-2" type="text" label="Team 2" />
        <ButtonDone margin="10rem 0 5rem 0">DONE</ButtonDone>
      </AppContainer>
    </Layout>
  );
}
