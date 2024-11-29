//Components
import { AppContainer } from '@BPSI/components/UI/Container';
import Layout from '@BPSI/components/UI/Layout';
import TopBar from '@BPSI/components/UI/Topbar';
import theme from '@BPSI/utils/theme';
import FormInput from '@BPSI/components/UI/Form/FormInput';

//Base Imports
import styled from 'styled-components';

const FormHeader = styled.h1`
  color: ${theme.colors.white};
  margin-bottom: 10rem;
  margin-top: 4rem;
  font-size: ${theme.typography.large};
`;

const HeaderDoubleInput = styled.h3`
  color: ${theme.colors.white};
  font-size: 2.5rem;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font-weight: 600;
  margin: 1rem 0rem;
`;

const DoubleInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AddButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14rem;
  height: 44px;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  font-size: 2rem;
  border-radius: 10px;
  margin: 5rem 0;
`;

export default function TeamCreationS10({}) {
  return (
    <Layout>
      <TopBar title="Create Session" back profile />
      <AppContainer>
        <FormHeader>Session</FormHeader>

        <FormInput id="" type="text" label="Team" />
        <AddButton>Add Team</AddButton>
        <FormInput id="" type="text" label="Session type" />
        <HeaderDoubleInput>Start</HeaderDoubleInput>
        <DoubleInput>
          <FormInput
            id=""
            type="text"
            label="Hour"
            margin="0 2rem 0 0"
            width="45%"
          />
          <FormInput
            id=""
            type="text"
            label="Minutes"
            width="45%"
            margin="none"
          />
        </DoubleInput>
        <HeaderDoubleInput>End</HeaderDoubleInput>
        <DoubleInput>
          <FormInput
            id=""
            type="text"
            label="Hour"
            margin="0 2rem 0 0"
            width="45%"
          />
          <FormInput
            id=""
            type="text"
            label="Minutes"
            width="45%"
            margin="none"
          />
        </DoubleInput>
        <FormInput id="" type="text" label="Location" margin="0.5rem" />
        <DoubleInput>
          <FormInput
            id=""
            type="text"
            label="Cost"
            margin="0 2rem 0 0"
            width="45%"
          />

          <FormInput id="" type="text" label="Cost" width="45%" margin="none" />
        </DoubleInput>
        <FormInput id="" type="text" label="Date" margin="0.5rem" />
      </AppContainer>
    </Layout>
  );
}
