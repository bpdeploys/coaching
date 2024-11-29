import styled from 'styled-components';
import Link from 'next/link';

//Components
import AdaptativeWidthRectangle from '@BPSI/components/AdaptativeWidthRectangle';
import Layout from '@BPSI/components/UI/Layout';
import TopBar from '@BPSI/components/UI/Topbar';
import FloatingButton from '@BPSI/components/UI/FloatingButton';
import theme from '@BPSI/utils/theme';

const StyTeamCreation = styled.div`
  background: url('/assets/img/landing-background.svg');
  background-size: cover;
  padding: 2rem 3rem;
  height: 100vh;

  h1 {
    font-size: ${theme.typography.large};
    font-weight: 400;
    padding: 3rem 0;
    text-align: center;
    color: ${theme.colors.white};
  }

  h4 {
    font-size: ${theme.typography.medium};
    font-weight: 400;
    padding: 2rem 0;
    text-align: center;
    color: ${theme.colors.white};
  }

  div > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
`;

export default function TeamCreationS10({ nextStep }) {
  return (
    <Layout>
      <TopBar title="Pitches" />
      <StyTeamCreation>
        <h1>Pitches</h1>
        <div>
          <h4>9aside</h4>
          <div>
            <AdaptativeWidthRectangle
              text="9v9"
              width="42%"
              size={theme.typography.small}
            />
            <AdaptativeWidthRectangle
              text="9v9"
              width="42%"
              size={theme.typography.small}
            />
          </div>
          <h4>7aside</h4>
          <div>
            <AdaptativeWidthRectangle
              text="7v7"
              width="42%"
              size={theme.typography.small}
            />
            <AdaptativeWidthRectangle
              text="7v7"
              width="42%"
              size={theme.typography.small}
            />
          </div>
        </div>
        <Link href="/pitch">
          <FloatingButton>
            <span>+</span>
          </FloatingButton>
        </Link>
      </StyTeamCreation>
    </Layout>
  );
}
