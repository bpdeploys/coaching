import styled from 'styled-components';
import CoachesBox from '@BPSI/components/DetailsClubhouseCoachesBox';
import AddButton from '@BPSI/components/AddButton';
import { useMediaQuery } from '@BPSI/utils/useMediaQuery';
import DesktopLayout from '@BPSI/components/LayoutDesktop';
import theme from '@BPSI/utils/theme';

//Components
import TopBar from '@BPSI/components/UI/Topbar';

const StyClubhouse = styled.div`
  background: url('..assets/img/app-background.svg');
  background-size: cover;
  padding: 3rem 3rem;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyClubInfo = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 4rem;

  div {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;

    h1 {
      font-size: 3rem;
    }

    span {
      font-size: 1.5rem;
    }
  }
`;

const StyDetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 2rem;

  .StyDetailsTitle {
    display: block;
    width: 100%;
    margin-bottom: 1.5rem;
    span {
      font-size: 2rem;
    }
  }
`;

const TeamProfileHeader = styled.div`
  display: flex;
  margin-left: 3.6rem;
  margin-top: 2.8rem;
  position: relative;
`;

const TeamProfileHeaderLegend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3rem;

  & h1 {
    font-size: 3rem;
    color: ${theme.colors.black};
  }

  & span {
    color: ${theme.colors.black};
    font-size: 2rem;
  }
`;

const TeamStatWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 3.6rem;
  margin-top: 4.3rem;
`;

const TeamInfo = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    color: #000000;
    font-size: 1.2rem;
  }

  & span:nth-child(1),
  & span:nth-child(2) {
    margin-bottom: 1.5rem;
  }
`;

const CoachProfileName = styled.h3`
  margin-top: 4rem;
  color: ${theme.colors.black};
  font-size: 2.5rem;
  margin-left: 3.6rem;
`;

const StyFloatingTopButton = styled.div`
  background: #183277;
  padding: 0.5rem 1rem;
  width: 16rem;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 2rem;
  right: 2rem;
  border-radius: 50px;

  a {
    font-size: 1.6rem;
    font-style: italic;
  }

  img {
    width: 1.2rem;
  }
`;

const TeamTitle = styled.h3`
  font-size: 1.6rem;
  color: #000000;
  margin-left: 3.6rem;
  margin-top: 3.4rem;
  margin-bottom: 1.3rem;
`;

const Rows = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 15rem);
  grid-gap: 4rem;
  margin-left: 3.6rem;
`;

const RowsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export default function CoachProfile() {
  let isDesktop = useMediaQuery('(min-width: 1024px)');

  let desktopView = (
    <DesktopLayout title="CLUBHOUSE > TEAMS > U9 RAMS">
      <TeamProfileHeader>
        <img src="/assets/img/panthere-dark-logo-300.svg" alt="asd" />
        <TeamProfileHeaderLegend>
          <h1>Panthera FC</h1>
          <span>London</span>
          <StyFloatingTopButton>
            <a href="">Change Status</a>
          </StyFloatingTopButton>
        </TeamProfileHeaderLegend>
      </TeamProfileHeader>
      <CoachProfileName>DIMITRI GBO</CoachProfileName>
      <TeamStatWrapper>
        <TeamInfo>
          <span>Status: Coach</span>
          <span>Email: Dimitri@ballerprofile.com</span>
          <span>Phone: 0747738892</span>
        </TeamInfo>
      </TeamStatWrapper>
      <TeamTitle>Teams</TeamTitle>
      <RowsWrapper>
        <Rows>
          <CoachesBox name="U9 Rams" />
        </Rows>
        <AddButton create="Add Team" />
      </RowsWrapper>
      <TeamTitle>After School Clubs</TeamTitle>
      <RowsWrapper>
        <Rows>
          <CoachesBox name="West Lodge" />
        </Rows>
        <AddButton create="Add Team" />
      </RowsWrapper>
    </DesktopLayout>
  );

  return <>{desktopView}</>;
}
