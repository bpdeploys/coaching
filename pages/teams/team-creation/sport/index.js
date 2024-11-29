//Base Imports
import styled from 'styled-components';

//Components
// import NavbarMobile from '@BPSI/components/NavbarMobile';
// import TopBar from '@BPSI/components/UI/Topbar';
// import theme from '@BPSI/utils/theme';
import Link from 'next/link';
import theme from '../../../../utils/theme';
import TopBar from '../../../../components/UI/Topbar';
import NavbarMobile from '../../../../components/NavbarMobile';

const StyTeams = styled.div`
  background: url('/assets/img/app-background.svg');
  background-size: cover;
  padding: 2rem 3rem;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    font-weight: 400;
    padding: 3rem 0;
    width: 100%;
    color: ${theme.colors.white};
    font-size: ${theme.typography.small};
    text-align: center;
  }

  h2 {
    font-weight: 400;
    padding: 1rem 0;
    width: 80%;
    color: ${theme.colors.black};
    font-size: ${theme.typography.medium};
  }

  p {
    font-size: ${theme.typography.extraSmall};
  }
`;

const StyTeamRectangle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 50%;
  background: white;
  padding: 1.5rem 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  position: relative;
  margin-top: 6rem;

  .StyRightArrow {
    width: 2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 2rem;
  }
`;

export default function TeamCreationS1({ nextStep }) {
  return (
    <>
      <TopBar title="Team creation" />
      <StyTeams>
        <h1>Select the sport your team plays!</h1>
        <Link href="/teams/team-creation/sport/form">
          <StyTeamRectangle onClick={nextStep}>
            <h2>Football</h2>
            <img
              className="StyRightArrow"
              src="/assets/img/right-rounded-arrow.svg"
              alt="Right rounded arrow"
            />
          </StyTeamRectangle>
        </Link>
        <NavbarMobile />
      </StyTeams>
    </>
  );
}
