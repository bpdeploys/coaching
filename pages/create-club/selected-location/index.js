import Link from 'next/link';
import styled from 'styled-components';

//Components
import Layout from '@BPSI/components/UI/Layout';
import TopBar from '@BPSI/components/UI/Topbar';
import theme from '@BPSI/utils/theme';

const StyClubCreation = styled.div`
  background: url('/assets/img/app-background.svg');
  background-size: cover;
  padding: 2rem 1rem;
  height: 100vh;

  h1 {
    font-size: ${theme.typography.medium};
    font-weight: 400;
    padding: 2rem 0;
    text-align: center;
    color: ${theme.colors.white};
    margin-bottom: 5rem;
  }

  p {
    font-size: ${theme.typography.extraSmall};
  }

  .StyNextButton {
    width: 25rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 6rem;
    a {
      font-size: 2rem;
      padding: 1rem;
      background: white;
      border-radius: 0.5rem;
      color: #0e4980;
      text-transform: uppercase;
      width: 28rem;
      min-width: 25rem;
    }
  }
`;

const StyLocation = styled.div`
  h4 {
    font-size: ${theme.typography.medium};
    padding: 2rem 0;
    text-align: center;
    color: ${theme.colors.white};
    font-weight: 400;
  }

  a {
    border: 2px solid white;
    border-radius: 2rem;
    padding: 0.5rem 2rem;
    font-size: 2rem;
    margin: 1rem 0.5rem;
    transition: all ease-out 0.2s;

    &:hover,
    &:active {
      background: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
  }

  .StyLocations {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`;

export default function ClubCreation({ nextStep }) {
  return (
    <Layout>
      <TopBar title="Clubhouse" profile back />
      <StyClubCreation>
        <h1>7. East of England</h1>
        <StyLocation>
          <h4>East Anglia</h4>
          <div className="StyLocations">
            <a href="#">Norfolk</a>
            <a href="#">Suffolk</a>
            <a href="#">Northants</a>
            <a href="#">Cambridgeshire</a>
            <a href="#">Bedfordshire</a>
          </div>
        </StyLocation>
        <StyLocation>
          <h4>Essex</h4>
          <div className="StyLocations">
            <a href="#">Essex</a>
            <a href="#">Hertfordshire</a>
            <a href="#">Buckinghamshire</a>
          </div>
        </StyLocation>
        <div className="StyNextButton">
          <Link href="/">Next</Link>
        </div>
      </StyClubCreation>
    </Layout>
  );
}
