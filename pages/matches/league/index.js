import styled from 'styled-components';
import Link from 'next/link';

//Components
import AdaptativeWidthRectangle from '../../../components/AdaptativeWidthRectangle';
import Layout from '../../../components/UI/Layout';
import TopBar from '../../../components/UI/Topbar';
import FloatingButton from '../../../components/UI/FloatingButton';
import theme from '../../../utils/theme';

const StyTeamCreation = styled.div`
  background: url('../assets/img/app-background.svg');
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
        <h1>League</h1>
        <div>
          <div>
            <AdaptativeWidthRectangle
              text="vs Pinnacle"
              small="13/03/21"
              width="42%"
              size={theme.typography.small}
            />
            <AdaptativeWidthRectangle
              text="vs Edgware"
              small="13/03/21"
              width="42%"
              size={theme.typography.small}
            />
          </div>
          <div>
            <AdaptativeWidthRectangle
              text="vs Chelsea"
              small="13/03/21"
              width="42%"
              size={theme.typography.small}
            />
            <AdaptativeWidthRectangle
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
