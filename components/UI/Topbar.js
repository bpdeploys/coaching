import styled from 'styled-components';
import theme from '@BPSI/utils/theme';
import BackButton from '@BPSI/components/UI/BackButton';

const StyTopBar = styled.div`
  width: 100%;
  background: black;
  padding: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.typography.small};
  h3 {
    font-weight: 400;
    font-size: ${theme.typography.small};
  }

  div {
    display: flex;
    align-items: center;
  }
`;

const ProfilePicture = styled.div`
  border-radius: 50%;
  max-width: 50px;

  img {
    width: 4rem;
  }
`;

const TopBar = ({ title, back, profile }) => {
  return (
    <StyTopBar>
      <div>
        {back ? <BackButton /> : null}
        <h3>{title}</h3>
      </div>
      {profile ? (
        <ProfilePicture>
          <img src="/assets/img/Mena1.png" alt="" />
        </ProfilePicture>
      ) : null}
    </StyTopBar>
  );
};

export default TopBar;
