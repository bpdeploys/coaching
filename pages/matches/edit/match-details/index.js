import styled from 'styled-components';
import Layout from '@BPSI/components/UI/Layout';
import TopBar from '@BPSI/components/UI/Topbar';
import theme from '@BPSI/utils/theme';
import { AppContainer } from '@BPSI/components/UI/Container';
import FormInput from '@BPSI/components/UI/Form/FormInput';

const FormHeader = styled.h1`
  color: ${theme.colors.white};
  margin-bottom: 10rem;
  margin-top: 4rem;
  font-size: ${theme.typography.large};
`;

const HourWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export default function TeamCreationS10({ nextStep }) {
  return (
    <Layout>
      <TopBar title="Add Matches Details" />
      <AppContainer>
        <FormHeader>Sunday 1st May</FormHeader>
        <FormInput id="" type="text" label="Competition: League" />
        <FormInput id="" type="text" label="Select opposition" />
        <HourWrapper>
          <FormInput
            id=""
            type="number"
            label="Hour"
            width="40%"
            margin="0 2rem 0 0"
          />
          <FormInput
            id=""
            type="number"
            label="Minutes"
            width="40%"
            margin="0 2rem 0 0"
          />
        </HourWrapper>
        <FormInput id="" type="text" label="Home or Away" />
      </AppContainer>
    </Layout>
  );
}
