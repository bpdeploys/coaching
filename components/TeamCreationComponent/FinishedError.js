import Modal from '../../components/UI/Modal';
// import { ModalContentDiv, FormButton } from './styles/Styles';
import teamContext from './store/team-context';
import { useContext } from 'react';
import { FormButton, ModalContentDiv } from './styles';

const FinishedError = ({ error }) => {
  // const { teamName, teamId } = useContext(teamContext);

  return (
    <ModalContentDiv>
      <h1>{error}</h1>
    </ModalContentDiv>
  );
};

export default FinishedError;
