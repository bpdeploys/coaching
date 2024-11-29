//Base imports
import styled from 'styled-components';
import Link from 'next/link';
import FormInput from '@BPSI/components/UI/Form/FormInput';

//Components
import { AppContainer } from '@BPSI/components/UI/Container';
import Layout from '@BPSI/components/UI/Layout';
import TopBar from '@BPSI/components/UI/Topbar';
import theme from '@BPSI/utils/theme';

const FormHeader = styled.h1`
  color: ${theme.colors.white};
  margin-bottom: 10rem;
  margin-top: 4rem;
  font-size: ${theme.typography.large};
`;

const FormSelect = styled.select`
  width: ${(props) => (props.width ? props.width : null)};
  color: ${theme.colors.white};
  border: unset;
  background-color: unset;
  text-align: ${(props) => (props.align ? props.align : null)};
  border-bottom: 0.1rem solid ${theme.colors.white};
  margin: ${(props) => (props.margin ? props.margin : null)};
  padding: ${(props) => (props.padding ? props.padding : null)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
  border-radius: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url('/assets/img/select-icon.svg') no-repeat 98%;
  background-size: 15px;
  &:not(:last-child) {
    margin-top: 2rem;
  }

  &::placeholder {
    color: ${theme.colors.white};
  }

  & option {
    color: #142c6a;
    font-size: 16px;
  }
`;

const ButtonNext = styled.div`
  width: 25rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 6rem;

  a {
    font-size: 2rem;
    padding: 1rem;
    background: white;
    border-radius: 0.5rem;
    color: #0e4980;
    text-transform: uppercase;
    width: 28rem;
    min-width: 25rem;
  }
`;

export default function TeamCreationS10({ nextStep }) {
  return (
    <Layout>
      <TopBar title="Create club" back profile />
      <AppContainer>
        <FormHeader>Club Details</FormHeader>

        <FormInput id="name-of-club" type="text" label="Name of club" />

        <FormSelect
          width="100%"
          padding=" 0 0 .5rem .5rem "
          fontSize="2rem"
          margin="0 0 4rem 0"
        >
          <option hidden>Club Sport</option>
          <option value="test">test</option>
          <option value="test">test</option>
        </FormSelect>
        <FormSelect
          width="100%"
          padding=" 0 0 .5rem .5rem "
          fontSize="2rem"
          margin="0 0 4rem 0"
        >
          <option hidden>Club Type</option>
          <option value="test">test</option>
          <option value="test">test</option>
        </FormSelect>
        <ButtonNext>
          <Link href="/">Next</Link>
        </ButtonNext>
      </AppContainer>
    </Layout>
  );
}
