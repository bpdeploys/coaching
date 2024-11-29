import styled from 'styled-components';
import DetailsBox from '@BPSI/components/DetailsBox/DetailsBox';
import OptionsButton from '@BPSI/components/OptionsButton/OptionsButton';
import Link from 'next/link';

//Components
import Layout from '@BPSI/components/UI/Layout';
import TopBar from '@BPSI/components/UI/Topbar';
import NavbarMobile from '@BPSI/components/NavbarMobile';

const StyEvents = styled.div`
  background: url('/assets/img/app-background.svg');
  background-size: cover;
  padding: 3rem 3rem;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
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

  .StyViewMatches {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem 0 4rem 0;

    .StyArrow {
      filter: invert(100%) sepia(0%) saturate(7446%) hue-rotate(186deg)
        brightness(111%) contrast(110%);
      width: 1.5rem;
      margin-left: 1rem;
    }

    a {
      font-size: 1.3rem;
      display: flex;
      align-items: center;
    }
  }
`;

export default function Events() {
  return (
    <Layout>
      <TopBar title="Events" />
      <StyEvents>
        <StyDetailsWrapper>
          <div className="StyDetailsTitle">
            <span>Matches - 10</span>
          </div>
          <DetailsBox
            name="U14 Reds"
            small="APB FC Rams"
            hrefAll="/training/sessions"
          />
          <DetailsBox
            href="/training/sessions"
            name="U10 Whites"
            small="LPOSSA"
          />
          <div className="StyViewMatches">
            <a href="/upcomingfixtures">
              View all matches
              <img
                src="/assets/img/right-rounded-arrow.svg"
                alt="View all"
                className="StyArrow"
              />
            </a>
          </div>
        </StyDetailsWrapper>
        <StyDetailsWrapper>
          <div className="StyDetailsTitle">
            <span>Training - 10</span>
          </div>
          <DetailsBox
            href="/training/sessions"
            name="U14 Reds"
            small="Dimitri"
          />
          <DetailsBox
            href="/training/sessions"
            name="U10 Whites"
            small="Kamron"
          />
          <div className="StyViewMatches">
            <a href="/training/sessions">
              View all matches
              <img
                className="StyArrow"
                style={{ fill: 'white' }}
                src="/assets/img/right-rounded-arrow.svg"
                alt="View all"
              />
            </a>
          </div>
        </StyDetailsWrapper>
      </StyEvents>
      <OptionsButton />
      <NavbarMobile />
    </Layout>
  );
}
