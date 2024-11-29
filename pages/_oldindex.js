import styled from 'styled-components';
import Layout from '../components/UI/Layout';
import Link from 'next/link';

const StyHome = styled.div`
  background: url('assets/img/app-background.svg');
  background-size: cover;
  padding: 2rem 3rem;
  height: 100vh;

  h1 {
    font-size: 2rem;
    font-weight: 400;
    padding: 3rem 0;
    width: 80%;
  }

  p {
    font-size: 1.3rem;
  }
`;

const StyHeading = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 4rem;
    margin-right: 1rem;
  }

  .StyHeading__text {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    h2 {
      font-size: 2rem;
    }
  }

  div > a {
    padding: 0.8rem 1.2rem;
    border: 2px solid white;
    text-transform: uppercase;
    border-radius: 0.5rem;
  }
`;

const StyTitle = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  color: white;
  width: 70vw;
`;

const StyInfo = styled.section`
  margin-top: 5rem;

  div {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      span,
      li {
        font-size: 1.2rem;
      }
      span {
        font-weight: bold;
        font-size: 1.5rem;
      }
    }

    img {
      width: 14rem;
    }
  }
`;

const StyFormats = styled.section`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  div {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hexagon {
    height: 80px;
    width: 80px;
    background: ${({ theme }) => theme.colors.secondary};
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 1rem 0.5rem;
  }
`;

const StyFeatures = styled.section`
  padding: 5rem 0;
  text-align: center;

  h3 {
    margin-bottom: 2rem;
  }
`;

export default function Home() {
  return (
    <Layout>
      <StyHome>
        <StyHeading>
          <div className="StyHeading__text">
            <img src="/assets/img/logo.svg" alt="" />
            <div>
              <h2>Coaching Insights</h2>
              <small>by BallerProfile</small>
            </div>
          </div>
          <div>
            <Link href="/register">SIGN IN</Link>
          </div>
        </StyHeading>
        <StyInfo>
          <StyTitle>Your stats without the hassle!</StyTitle>
          <div>
            <img src="/assets/img/stats.svg" alt="" />
            <ul>
              <span>Track your...</span>
              <li>Starting lineups</li>
              <li>Players minutes played</li>
              <li>Strongest formations</li>
              <li>Career wins, losses and draws</li>
              <li>Shots, crosses, goals &amp; assists</li>
              <li>Players development</li>
            </ul>
          </div>
        </StyInfo>
        <StyFormats>
          <StyTitle>
            <h3>Footbal formats</h3>
          </StyTitle>
          <div>
            <div className="hexagon">5v5</div>
            <div className="hexagon">7v7</div>
            <div className="hexagon">9v9</div>
            <div className="hexagon">11v11</div>
          </div>
          <p>For coaches at all levels of the football pyramid...</p>
          <p>From youth football to the adult game.</p>
        </StyFormats>
        {/* <StyFeatures>
          <StyTitle>
            <h3>Features</h3>
          </StyTitle>
          <p>
            Review your coaching decisions and your teams performances with
            simple to use tools made for coaches by coaches.
          </p>
        </StyFeatures> */}
      </StyHome>
    </Layout>
  );
}
