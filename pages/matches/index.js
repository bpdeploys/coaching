import styled from 'styled-components';
import Link from 'next/link';

//Components
import AdaptiveWidthRectangle from '@BPSI/components/AdaptativeWidthRectangle';
import Layout from '@BPSI/components/UI/Layout';
import TopBar from '@BPSI/components/UI/Topbar';
import FloatingButton from '@BPSI/components/UI/FloatingButton';
import theme from '@BPSI/utils/theme';

const StyTeamCreation = styled.div`
  background: url('/assets/img/app-background.svg');
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
      <TopBar title="Matches" />
      <StyTeamCreation>
        <h1>Matches</h1>
        <div>
          <div>
            <AdaptiveWidthRectangle
              text="vs Pinnacle"
              small="13/03/21"
              width="42%"
              size={theme.typography.small}
            />
            <AdaptiveWidthRectangle
              text="vs Edgware"
              small="13/03/21"
              width="42%"
              size={theme.typography.small}
            />
          </div>
          <div>
            <AdaptiveWidthRectangle
              text="vs Chelsea"
              small="13/03/21"
              width="42%"
              size={theme.typography.small}
            />
            <AdaptiveWidthRectangle
              text="vs Arsenal"
              small="13/03/21"
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
