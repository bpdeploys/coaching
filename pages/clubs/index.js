//Base Imports
import styled from 'styled-components';

//Components
import Layout from '../../components/UI/Layout';
import OptionsButton from '../../components/OptionsButton/OptionsButton';
import DetailsBox from '../../components/DetailsBox/DetailsBox';
import TopBar from '../../components/UI/Topbar';
import NotificationModal from '../../components/NotificationModal';
import NavbarMobile from '@BPSI/components/NavbarMobile';

const StyClubs = styled.div`
  background: url('assets/img/app-background.svg');
  background-size: cover;
  padding: 3rem 3rem;
  height: 100%;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyClubButton = styled.a`
  font-size: 3rem;
  padding: 1.5rem;
  border: 2px solid white;
  border-radius: 0.5rem;
  margin-bottom: 10rem;
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

export default function TeamCreationS1() {
  return (
    <Layout>
      <TopBar title="Clubhouse" />
      <StyClubs>
        <StyClubButton>Create a Club</StyClubButton>
        <StyDetailsWrapper>
          <div className="StyDetailsTitle">
            <span>Backroom</span>
          </div>
          <DetailsBox number="2" name="Coaches" img="assets/img/jersey.svg" />
          <DetailsBox number="7" name="Stats Team" />
        </StyDetailsWrapper>
        <StyDetailsWrapper>
          <div className="StyDetailsTitle">
            <span>Teams</span>
          </div>
          <DetailsBox number="8" name="Teams" />
          <DetailsBox
            number="82"
            name="Players"
            img="assets/img/player-icon.svg"
          />
        </StyDetailsWrapper>
      </StyClubs>
      <NotificationModal isOpen={false} toggle={false} />
      {/* TODO: add state functionality like the other modals (can be copied)*/}
      <OptionsButton />
      <NavbarMobile />
    </Layout>
  );
}
