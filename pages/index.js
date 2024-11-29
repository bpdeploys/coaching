import styled from 'styled-components';
import Layout from '../components/UI/Layout';
import Link from 'next/link';
import { appContext } from '../provider';
import Router from 'next/router';
import { useContext } from 'react';

const StyHome = styled.div`
  background: url('assets/img/landing-background.svg');
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
  p {
    margin: 2.5rem 0;
  }
  span {
    font-size: 1.3rem;
  }
`;

export default function Home() {
  const { logged, token } = useContext(appContext);

  if (logged && token) {
    Router.push('/insights');
  }

  return (
    <Layout>
      <StyHome>
        <StyHeading>
          <div className="StyHeading__text">
            <img src="/assets/img/logo.svg" alt="Coaching Insights" />
            <div>
              <h2>Coaching Insights</h2>
              <small>by BallerProfile</small>
            </div>
          </div>
          <div>
            <Link href="/login">SIGN IN</Link>
          </div>
        </StyHeading>
        <StyInfo>
          <StyTitle>The numbers behind your sports team!</StyTitle>
          <p>
            Helping coaches understand their teams better... Stats for end of
            season AGM’s and detailed performance data to inform matchday and
            training decisions!
          </p>
          <span>Think of us as OPTA for grassroots sports!</span>
        </StyInfo>
      </StyHome>
    </Layout>
  );
}
