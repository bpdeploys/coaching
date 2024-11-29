import styled from 'styled-components';
import Button from '@BPSI/components/UI/Button';
import Layout from '@BPSI/components/UI/Layout';
import Link from 'next/link';
import theme from '@BPSI/utils/theme';
import FormInput from '@BPSI/components/UI/Form/FormInput';

import Router from 'next/router';
import useForm from '@BPSI/utils/useForm';
import { register } from '@BPSI/services';
import validate from '@BPSI/utils/formValidationRules';

const StySignUp = styled.div`
  background: url('/assets/img/landing-background.svg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  h1 {
    padding: 3rem 0;
    font-weight: ;
  }
  h1,
  h4 {
    color: ${theme.colors.white};
    font-size: ${theme.typography.small};
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
  a {
    margin-top: 3.5rem;
    border-radius: 5rem;
    padding: 1.2rem;
    text-transform: uppercase;
  }
`;

const ToLogin = styled.div`
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

// {"mail":"charlygo420@gmail.com","pass":"asdf1234"}

export default function Register() {
  const { values, errors, handleChange, handleSubmit } = useForm(submitForm, validate);

  function submitForm() {
    event.preventDefault();

    const userData = {
      ...values,
      type: 'C',
    };

    console.log(userData);
    register(
      userData,
      data => {
        console.log(data);
        if ('id' in data) {
          Router.push('/login');
          return true;
        } else {
          return false;
        }
      },
      err => console.log(err.response)
    );
  }

  return (
    <Layout>
      <StySignUp onSubmit={submitForm}>
        <img src="/assets/img/logo.svg" alt="Coaching Insights" />
        <h1>Register your interest</h1>
        <StyForm>
          <FormInput
            name="first_name"
            onChange={handleChange}
            value={values.first_name || ''}
            required
            placeholder=""
            label="First Name"
          />
          <FormInput
            name="last_name"
            onChange={handleChange}
            value={values.last_name || ''}
            required
            placeholder=""
            label="Last Name"
          />
          <FormInput
            name="telephone"
            onChange={handleChange}
            value={values.telephone || ''}
            required
            placeholder=""
            label="Phone number"
          />
          <FormInput
            name="email"
            onChange={handleChange}
            value={values.email || ''}
            required
            placeholder=""
            label="Email Address"
          />
          <FormInput
            name="password"
            onChange={handleChange}
            value={values.password || ''}
            required
            placeholder=""
            label="Password"
            password
            type="password"
          />
          <FormInput
            name="confirmPassword"
            onChange={handleChange}
            value={values.confirmPassword || ''}
            required
            placeholder=""
            label="Confirm Password"
            type="password"
            password
          />
          <DivButtonSubmit>
            <Button submit submitText="Sign Up" value="Sign Up" />
          </DivButtonSubmit>
        </StyForm>
        {errors.first_name && <p className="help is-danger">{errors.first_name}</p>}
        {errors.last_name && <p className="help is-danger">{errors.last_name}</p>}
        {errors.telephone && <p className="help is-danger">{errors.telephone}</p>}
        {errors.email && <p className="help is-danger">{errors.email}</p>}
        {errors.password && <p className="help is-danger">{errors.password}</p>}
        <ToLogin>
          <h4>Already have an account?</h4>
          <Link href="/login">Login</Link>
        </ToLogin>
      </StySignUp>
    </Layout>
  );
}
