//UI
import TopBar from '@BPSI/components/UI/Topbar';
import NavbarMobile from '@BPSI/components/NavbarMobile';
import Layout from '@BPSI/components/UI/Layout';

//Components
import styled from 'styled-components';
import FormSelect from '@BPSI/components/Form/FormSelect';

const Container = styled.div`
  padding: 2.5rem 1.5rem;
  background: url(/assets/img/app-background.svg);
  min-height: 100vh;

  h2 {
    padding: 2rem 0rem;
    font-size: 2rem;
  }
`;

const StatsContainer = styled.div`
  padding: 3rem 3rem;
  background-color: #0e497f;
  border-radius: 1rem;
  div {
    display: flex;
    align-items: center;
    align-content: center;
    :not(:last-child) {
      padding-bottom: 3rem;
    }
  }
  p {
    width: 60%;
    font-size: 1.5rem;
    padding-right: 2rem;
  }
  span {
    width: 70%;
    padding-left: 1.5rem;
    width: 60%;
    font-size: 1.5rem;
  }

  .ellipse {
    width: 9rem;
    padding-left: 2rem;
  }

  img {
    padding-left: 2rem;
    width: 3.5rem;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;

  img {
    border: 2px solid white;
    border-radius: 5rem;
    width: 5rem;
  }
`;

function test() {
  return (
    <Layout>
      <TopBar title="Insights" profile />
      <Container>
        <ImgContainer>
          <img src="/assets/img/panthere-dark-logo-300.svg"></img>
          <FormSelect
            width="60%"
            padding="1.5rem 2.2rem"
            option="Panthera FC"
            font="2rem"
          />
        </ImgContainer>
        <h2>Training</h2>
        <StatsContainer>
          <div>
            <p>Attendance this week!</p>
            <img src="/assets/img/polygon-green.svg" alt="" />
            <span>70%</span>
            <img className="ellipse" src="/assets/img/ellipse-210.svg" alt="" />
            <img src="/assets/img/white-arrow.svg" alt="" />
          </div>
          <div>
            <p>Attendance this week!</p>
            <img src="/assets/img/polygon-red.svg" alt="" />
            <span>80%</span>
            <img className="ellipse" src="/assets/img/ellipse-210.svg" alt="" />
            <img src="/assets/img/white-arrow.svg" alt="" />
          </div>
        </StatsContainer>
        <h2>Opposition Report</h2>
      </Container>
      <NavbarMobile />
    </Layout>
  );
}

export default test;
