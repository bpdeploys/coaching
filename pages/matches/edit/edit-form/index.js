import styled from 'styled-components';
import Layout from '@BPSI/components/UI/Layout';
import TopBar from '@BPSI/components/UI/Topbar';
import theme from '@BPSI/utils/theme';
import { AppContainer } from '@BPSI/components/UI/Container';
import FormInput from '@BPSI/components/UI/Form/FormInput';

const FormHeader = styled.h1`
  color: ${theme.colors.white};
  margin-bottom: 7rem;
  margin-top: 4rem;
  font-size: ${theme.typography.large};
`;

const FromHourWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;

  & div {
    display: flex;
    justify-content: space-between;
  }
`;

const FormCostWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;

  & div {
    display: flex;
    justify-content: space-between;
  }
`;

const FormDatesWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 10rem;

  & hr {
    width: 100%;
    border: 1px solid white;
    margin-bottom: 3rem;
  }
`;

const FormH3 = styled.h3`
  margin: ${(props) => (props.margin ? props.margin : null)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
`;

const FormCapsulesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

const DatesCapsules = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 15rem;
  max-height: 3.5rem;
  border-radius: 5rem;
  padding: 1.1rem 1.5rem;
  font-size: ${theme.typography.medium};
  border: 2px solid ${theme.colors.white};
`;

const FormSendButton = styled.div`
  max-width: 35rem;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background-color: ${theme.colors.black};
  border-radius: 1rem;
`;

export default function EditMatchesForm() {
  return (
    <Layout>
      <TopBar title="Edit Matches" />
      <AppContainer>
        <FormHeader>Team Training</FormHeader>

        <FormInput id="" type="text" label="Barne Lane" />
        <FormInput id="" type="text" label="U14 Reds APB" />
        <FromHourWrapper>
          <FormH3 fontSize="2rem" margin="0 0 2rem 0">
            Start
          </FormH3>
          <div>
            <FormInput
              id=""
              type="number"
              label="17"
              width="40%"
              margin="0.5rem 0"
            />
            <FormInput
              id=""
              type="number"
              label="00"
              width="40%"
              margin="0.5rem 0"
            />
          </div>
          <FormH3 fontSize="2rem" margin="2rem 0">
            End
          </FormH3>
          <div>
            <FormInput
              id=""
              type="number"
              label="18"
              width="40%"
              margin="0.5rem 0"
            />
            <FormInput
              id=""
              type="number"
              label="30"
              width="40%"
              margin="0.5rem 0"
            />
          </div>
        </FromHourWrapper>
        <FormCostWrapper>
          <FormH3 margin=" 0 0 1rem 0 ">Cost</FormH3>
          <div>
            <FormInput
              id=""
              type="number"
              label="0"
              width="20%"
              align="center"
              margin="0.5rem 0"
            />
            <FormInput
              id=""
              type="number"
              label="7"
              width="20%"
              align="center"
              margin="0.5rem 0"
            />
            <FormInput
              id=""
              type="number"
              label="5"
              width="20%"
              align="center"
              margin="0.5rem 0"
            />
            <FormInput
              id=""
              type="number"
              label="0"
              width="20%"
              align="center"
              margin="0.5rem 0"
            />
          </div>
        </FormCostWrapper>
        <FormDatesWrapper>
          <FormH3 fontSize="2rem" margin="2rem 0 1rem 0">
            Date
          </FormH3>
          <hr />
          <FormCapsulesWrapper>
            <DatesCapsules>01/04/21</DatesCapsules>
            <DatesCapsules>01/04/21</DatesCapsules>
            <DatesCapsules>01/04/21</DatesCapsules>
            <DatesCapsules>01/04/21</DatesCapsules>
            <DatesCapsules>01/04/21</DatesCapsules>
          </FormCapsulesWrapper>
        </FormDatesWrapper>
        <FormSendButton>DONE</FormSendButton>
      </AppContainer>
    </Layout>
  );
}
