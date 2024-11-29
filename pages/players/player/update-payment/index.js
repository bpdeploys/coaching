import styled from 'styled-components';
import { AppContainer } from '@BPSI/components/UI/Container';
import theme from '@BPSI/utils/theme';
import Layout from '@BPSI/components/UI/Layout';
import TopBar from '@BPSI/components/UI/Topbar';
import FormInput from '@BPSI/components/UI/Form/FormInput';

const PlayerHeader = styled.div`
  color: ${theme.colors.white};
  font-size: ${theme.typography.large};
  margin-bottom: 2rem;
`;

const SquadNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > span,
  & > h3 {
    font-weight: 400;
    color: ${theme.colors.white};
    font-size: 1.6rem;
  }

  & > h3 {
    line-height: 1;
    margin-top: 0.5rem;
  }
`;

const HeaderFields = styled.h2`
  color: ${theme.colors.white};
  font-weight: ${(props) => (props.fontWeight ? props.margin : '400')};
  font-size: 2.5rem;
  margin: ${(props) => (props.margin ? props.margin : null)};
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const ButtonDone = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  max-width: 30rem;
  height: 3.6rem;
  width: 100%;
  border-radius: 50px;
  font-size: 2rem;
  margin: ${(props) => (props.margin ? props.margin : null)};
`;

const CostWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function UpdatePlayer() {
  return (
    <Layout>
      <TopBar title="Player" />
      <AppContainer>
        <PlayerHeader>Daniel Hardman</PlayerHeader>
        <SquadNumber>
          <span>Squad Number:</span>
          <h3>15</h3>
        </SquadNumber>
        <HeaderFields margin="5rem 0 3rem 0">New Payment</HeaderFields>
        <FormInput id="postcode" type="text" label="Paid for" />
        <HeaderFields margin="5rem 0 3rem 0" fontWeight="600">
          Cost
        </HeaderFields>

        <CostWrapper>
          <FormInput
            id="postcode"
            type="number"
            label="0"
            width="20%"
            align="center"
          />
          <FormInput
            id="postcode"
            type="number"
            label="7"
            width="20%"
            align="center"
          />
          <FormInput
            id="postcode"
            type="number"
            label="5"
            width="20%"
            align="center"
          />
          <FormInput
            id="postcode"
            type="number"
            label="0"
            width="20%"
            align="center"
          />
        </CostWrapper>
        <FormInput id="postcode" type="text" label="Date" />

        <ButtonDone margin="10rem 0 5rem 0">DONE</ButtonDone>
      </AppContainer>
    </Layout>
  );
}
