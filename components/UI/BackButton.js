import styled from 'styled-components';
import { useRouter } from 'next/router';

const ButtonArrow = styled.div`
  max-width: 50px;
  margin-right: 2rem;

  & img {
    max-width: 3rem;
    width: 3rem;
  }
`;

const BackButton = () => {
  const router = useRouter();
  return (
    <ButtonArrow onClick={() => router.back()}>
      <img src="/assets/img/Backbutton.png" alt="" />
    </ButtonArrow>
  );
};

export default BackButton;
