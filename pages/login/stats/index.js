import styled from 'styled-components';
import Button from '@BPSI/components/UI/Button';
import Input from '@BPSI/components/UI/Input';
import Layout from '@BPSI/components/UI/Layout';
import theme from '@BPSI/utils/theme';

const StyLogin = styled.div`
  background: black;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 0;
  height: 100vh;

  h1 {
    margin-top: 13rem;
    margin-bottom: 2rem;
    color: ${theme.colors.white};
    font-size: ${theme.typography.extraLarge};
    font-weight: 400;
    padding: 3rem 0;
  }

  img {
    width: 8rem;
  }

  .footer {
    position: absolute;
    bottom: 15px;
    left: 20px;
    display: flex;
    align-items: center;

    img {
      height: 20px;
      width: 20px;
    }

    h4 {
      font-size: ${theme.typography.ultraSmall};
      margin-left: 1rem;
    }
  }
`;

const StyForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    margin-bottom: 1.5rem;
  }
`;

const StyButton = styled.div`
  display: flex;
  height: 4rem;
  border-radius: 5px;
  font-size: ${theme.typography.small};
  align-items: center;
  justify-content: center;
  border: 0.5px solid white;
  width: 100%;
`;

export default function Login() {
  return (
    <Layout>
      <StyLogin>
        <h1>StatsApp</h1>
        <StyForm>
          <Input type="text" placeholder="Email address" />
          <Input type="text" placeholder="Password" />
          <StyButton>Login</StyButton>
        </StyForm>
        <div className="footer">
          <img src="/assets/img/logo.svg" alt="" />
          <h4>Powered by BallerProfile</h4>
        </div>
      </StyLogin>
    </Layout>
  );
}
