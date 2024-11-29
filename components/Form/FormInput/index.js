import styled from 'styled-components';

const StyFormInput = styled.label``;

function FormInput({ password, id, label }) {
  return (
    <StyFormInput htmlFor={id}>
      <input id={id} />
      <span>{label}</span>
      <div />
    </StyFormInput>
  );
}

export default FormInput;
