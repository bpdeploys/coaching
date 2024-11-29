import styled from 'styled-components';
import TopBar from '@BPSI/components/UI/Topbar';
import theme from '@BPSI/utils/theme';
import { AppContainer } from '@BPSI/components/UI/Container';

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

const EditProfileButton = styled.div`
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
`;

const StatsTable = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);

  & div {
    font-size: ${theme.typography.medium};
    display: flex;
    flex-direction: column;
    padding: 1rem 2.5rem;
    margin-top: 5rem;
    border: 0.5px solid ${theme.colors.white};
    justify-content: center;
    align-items: center;
  }

  & div > span {
    font-size: ${theme.typography.ultraSmall};
    margin-top: 0.5rem;
  }

  & div:nth-child(1) {
    border-bottom-left-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
  }

  & div:nth-child(4) {
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
`;

const TeamsCoachedWrapper = styled.div`
  width: 100%;

  & > h3 {
    font-size: ${theme.typography.small};
    margin-top: 4rem;
    margin-bottom: 1.4rem;
  }
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
`;

const TeamsCoachedStatusBar = styled.hr`
  width: 95%;
  border: ${(props) =>
    props.status ? '0.1rem solid #3EC010' : '0.1rem solid #000000'};
  margin: 0 auto;
  margin-top: 2rem;
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
            <span>Coach</span>
            <div>
              <EditProfileButton>Edit Profile</EditProfileButton>
            </div>
          </div>
        </EditProfileHeader>
        <StatsTable>
          <div>
            25<span>Matches</span>
          </div>
          <div>
            25<span>Wins</span>
          </div>
          <div>
            25<span>Draws</span>
          </div>
          <div>
            25<span>Win %</span>
          </div>
        </StatsTable>
        <TeamsCoachedWrapper>
          <h3>Teams Coached</h3>
          <TeamCoached viewMore>
            <h3>APB U9 Rams</h3>
            <TeamsCoachedStatusBar />
          </TeamCoached>
          <TeamCoached>
            <h3>West Lodge After School Club</h3>
            <TeamsCoachedStatusBar status />
          </TeamCoached>
        </TeamsCoachedWrapper>
      </AppContainer>
    </>
  );
}
