import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import Button from '../../components/UI/Button';
import Layout from '../../components/UI/Layout';
import theme from '../../utils/theme';
import FormInput from '../../components/UI/Form/FormInput';
import { useAuth } from '../../context/useAuth';

const StyLogin = styled.div`
  background: url('/assets/img/landing-background.svg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 0;
  height: 100vh;
  h1,
  h4 {
    color: ${theme.colors.white};
    font-size: ${theme.typography.medium};
    font-weight: 400;
    padding: 2.5rem 0;
  }
  img {
    width: 8rem;
  }
`;

const StyForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;

const ToSignUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    padding: 0.8rem 1.2rem;
    border: 2px solid white;
    font-size: ${theme.typography.extraSmall};
    color: ${theme.colors.white};
    text-transform: uppercase;
    border-radius: 0.5rem;
  }
`;

const DivButtonSubmit = styled.div`
  padding-top: 2rem;
`;

export default function Login() {
  const { login, isLoading, userInfo } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (userInfo) {
      Router.push('/insights');
    }
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <Layout>
      <StyLogin>
        <img src="/assets/img/logo.svg" alt="Stats Insights login" />
        <h1>Login</h1>
        <StyForm onSubmit={handleSubmit}>
          <FormInput
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder=""
            label="Email"
          />
          <FormInput
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            placeholder=""
            label="Password"
            type="password"
            password
          />
          <DivButtonSubmit>
            <Button
              submit
              submitText={isLoading ? 'Logging in...' : 'Login'}
              value="Login"
              disabled={isLoading}
            />
          </DivButtonSubmit>
        </StyForm>
        <ToSignUp>
          <h4>You have not yet registered?</h4>
          <Link href="/register">Sign Up</Link>
        </ToSignUp>
      </StyLogin>
    </Layout>
  );
}
