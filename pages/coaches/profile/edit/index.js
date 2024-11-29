import styled from 'styled-components';
import TopBar from '@BPSI/components/UI/Topbar';
import { AppContainer } from '@BPSI/components/UI/Container';
import theme from '@BPSI/utils/theme';
import FormInput from '@BPSI/components/UI/Form/FormInput';

const EditProfileHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;

  & > div {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-left: 2rem;
  }

  & > div > div {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;
  }

  & h1 {
    font-size: ${theme.typography.Small};
    margin-top: 2rem;
  }

  & span {
    margin-top: 0.5rem;
    font-size: ${theme.typography.extraSmall};
  }

  & img {
    border-radius: 50%;
    width: 14rem;
    border: 2px solid ${theme.colors.white};
  }
`;

const DoneButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${theme.typography.extraSmall};
  border: 1px solid ${theme.colors.white};
  border-radius: 0.5rem;
  font-weight: 400;
  max-width: 10rem;
  width: 100%;
  height: 3rem;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  font-family: ;
`;

const LogoutButton = styled.div`
  color: ${theme.colors.black};
  background-color: ${theme.colors.white};
  font-size: 2rem;
  padding: 1.5rem 3rem;
  border-radius: 5px;
`;

const TeamCoached = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.white};
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  height: 100px;
  position: relative;

  & h3 {
    color: ${theme.colors.black};
    font-size: 2rem;
    margin-left: 1rem;
  }

  &::before {
    content: ${(props) =>
      props.viewMore ? 'url(/assets/img/ViewMore.png)' : ''};
    position: absolute;
    right: 10px;
    top: 40%;
    transform: translateY(-40%);
  }

  & > div {
    display: flex;
    justify-content: space-between;
    padding-right: 3rem;
  }
`;

const TeamsCoachedStatusBar = styled.hr`
  width: 95%;
  border: ${(props) =>
    props.status ? '0.1rem solid #3EC010' : '0.1rem solid #000000'};
  margin: 0 auto;
  margin-top: 2rem;
`;

const TeamsCoachedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 11rem;

  & > h3 {
    font-size: 2rem;
    color: ${theme.colors.white};
    margin-bottom: 1.4rem;
  }
`;

const LeaveTeamButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: ${theme.colors.white};
  background-color: #0d2155;
  padding: 0.6rem 1rem;
  border-radius: 5px;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 14rem;
  width: 100%;
`;

export default function CoachesEditProfile(coaches) {
  return (
    <>
      <TopBar title="Profile"> </TopBar>
      <AppContainer>
        <EditProfileHeader>
          <img src="/assets/img/edit-profile.png" alt="" />
          <div>
            <h1>Dimitri Gbo</h1>
            <span>Status: Club Manager</span>
            <div>
              <DoneButton>DONE</DoneButton>
            </div>
          </div>
        </EditProfileHeader>
        <FormWrapper>
          <FormInput
            id="coach-first-name"
            type="text"
            label="Coach first name"
          />
          <FormInput id="coach-last-name" type="text" label="Coach last name" />
          <FormInput id="email-address" type="email" label="Email address" />
          <FormInput id="phone-number" type="number" label="Phone number" />
        </FormWrapper>
        <TeamsCoachedWrapper>
          <h3>Leave teams</h3>
          <TeamCoached>
            <div>
              <h3>APB U9 Rams</h3>
              <LeaveTeamButton>Leave Team</LeaveTeamButton>
            </div>
            <TeamsCoachedStatusBar />
          </TeamCoached>
        </TeamsCoachedWrapper>
        <LogoutButton>LOGOUT</LogoutButton>
      </AppContainer>
    </>
  );
}
