import styled from 'styled-components';
import Layout from '@BPSI/components/UI/Layout';
import theme from '@BPSI/utils/theme';

const StyHome = styled.div`
  background: url('/assets/img/app-background.svg');
  background-size: cover;
  padding: 2rem 3rem;
  height: 100vh;

  h1 {
    font-size: ${theme.typography.small};
    font-weight: 400;
    padding: 3rem 0;
    width: 80%;
  }

  p {
    font-size: ${theme.typography.extraSmall};
  }
`;

const StyRoleBox = styled.div`
  margin-top: 5rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    background: #1c3b8c;
    min-height: 25rem;
    padding: 1rem;
    border-radius: 1rem;

    h3 {
      font-size: ${theme.typography.small};
    }

    small {
      padding: 1rem 0 2rem 0;
      font-size: 1rem;
    }

    a {
      text-transform: uppercase;
      color: ${theme.colors.black};
      font-size: ${theme.typography.small};
      padding: 1rem;
      width: 80%;
      text-align: center;
      background: white;
      margin: 3rem 0 1rem 0;
      border-radius: 0.5rem;
      font-weight: 500;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    span,
    li {
      font-size: ${theme.typography.extraSmall};
      padding: 0.5rem 0;
    }
  }

  img {
    width: 14rem;
  }
`;

export default function Home() {
  return (
    <Layout>
      <StyHome>
        <StyRoleBox>
          <div>
            <h3>SPORTS CLUB OWNER</h3>
            <small>e.g. Owner of La Masia Youth FC</small>
            <ul>
              <li>Manage your sports club</li>
              <li>Track your players and teams stats</li>
              <li>Join your leagues and tournaments</li>
              <li>Track training sessions</li>
              <li>Keep parents informed</li>
              <li>Earn club rewards</li>
            </ul>
            <a href="">Sign up!</a>
          </div>
        </StyRoleBox>
        <StyRoleBox>
          <div>
            <h3>TEAM COACH</h3>
            <small>e.g. Coach at La Masia Youth FC (U10's)</small>
            <ul>
              <li>Track your players and teams stats</li>
              <li>Join your leagues and tournaments</li>
              <li>Track training sessions</li>
              <li>Keep parents informed</li>
              <li>Earn team rewards</li>
            </ul>
            <a href="">Sign up!</a>
          </div>
        </StyRoleBox>
      </StyHome>
    </Layout>
  );
}
