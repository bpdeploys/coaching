import Modal from '../../components/UI/Modal';
// import { ModalContentDiv, FormButton } from './styles/Styles';
import teamContext from './store/team-context';
import { useContext } from 'react';
import { FormButton, ModalContentDiv } from './styles';
import FinishedError from './FinishedError';
import Link from 'next/link';

const Finished = ({ toggle, isOpen, error }) => {
  const { teamName, teamId, teamCode } = useContext(teamContext);
  console.log(error);

  return (
    <Modal isOpen={isOpen} toggle={toggle} wdh hgt bdr>
      {!error && (
        <ModalContentDiv>
          <h1>NEW TEAM CREATED</h1>
          <p>You are the Coach of {teamName}!</p>
          <span>{teamCode}</span>
          <p>
            Your backroom staff will need this code to join the team {teamName}.
          </p>
          <Link href="/squad">
            <FormButton>CREATE SQUAD</FormButton>
          </Link>
        </ModalContentDiv>
      )}
      {error && <FinishedError error={error} />}
    </Modal>
  );
};

export default Finished;
