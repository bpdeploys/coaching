import styled from 'styled-components';
import theme from '@BPSI/utils/theme';
import Link from 'next/link';

const StyledButton = styled.a`
  width: 30rem;
  padding: 0.8rem;
  font-size: ${theme.typography.small};
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  cursor: pointer;
`;

const StyledInput = styled.input`
  width: 30rem;
  padding: 0.8rem;
  font-size: ${theme.typography.small};
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.white};
  border-radius: 30px;
  border: none;
  cursor: pointer;
`;

function Button({ children, routerHref, submit, submitText }) {
  return routerHref ? (
    <Link href={routerHref}>
      <StyledButton>{children}</StyledButton>
    </Link>
  ) : submit ? (
    <StyledInput type="submit" name={submitText} value={submitText} />
  ) : (
    <StyledButton>{children}</StyledButton>
  );
}

export default Button;
