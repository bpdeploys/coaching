import styled from 'styled-components';
import theme from '@BPSI/utils/theme';

const StyledInput = styled.input`
  width: 30rem;
  padding: 0.8rem;
  font-size: ${theme.typography.small};
`;

function Input({ type, placeholder }) {
  return <StyledInput type={type} placeholder={placeholder} />;
}

export default Input;
