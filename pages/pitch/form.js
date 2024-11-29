import React from 'react';
import styled from 'styled-components';
import theme from '@BPSI/utils/theme';
import FormInput from '@BPSI/components/UI/Form/FormInput';

const StyPitchForm = styled.form`
  div {
    select {
      width: 90%;
      padding: 1rem 0.5rem;
      margin: 0.5rem 1.5rem;
      border: none;
      border-radius: 0;
      border-bottom: 1px solid white;
      font-size: ${theme.typography.small};
      outline: none;
      transition: all 0.3s;
      background: transparent;
      color: ${theme.colors.white} !important;

      &::placeholder {
        color: white !important;
      }
    }
  }
  .StySelectIdentifier {
    margin: 2rem 0;
    span {
      font-size: ${theme.typography.extraSmall};
    }
  }
`;

function PitchForm() {
  return (
    <StyPitchForm>
      <div>
        <FormInput id="firstName" type="text" label="Name the pitch" />

        <select name="format" id="format" form="pitchForm">
          <option disabled selected>
            Format
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <FormInput id="postcode" type="text" label="Postcode" />
      </div>
    </StyPitchForm>
  );
}

export default PitchForm;
