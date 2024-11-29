//import React, { useState } from 'react';
//import Layout from '@BPSI/components/UI/Layout';

import styled from 'styled-components';
import theme from '@BPSI/utils/theme';

const FormSelect = styled.select`
  width: ${(props) => (props.width ? props.width : null)};
  color: ${theme.colors.white};
  border: unset;
  background-color: unset;
  text-align: ${(props) => (props.align ? props.align : null)};
  //border-bottom: 0.1rem solid ${theme.colors.white};
  margin: ${(props) => (props.margin ? props.margin : null)};
  padding: ${(props) => (props.padding ? props.padding : null)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : null)};
  border-radius: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url('/assets/img/select-icon.svg') no-repeat 70%;
  background-size: 15px;

  &::placeholder {
    color: ${theme.colors.white};
  }

  & option {
    color: #142c6a;
    font-size: 16px;
  }
`;

function FSelect({ width, padding, option, font }) {
  return (
    <FormSelect width={width} padding={padding} fontSize={font}>
      <option>{option}</option>
      <option value="test">test</option>
      <option value="test">test</option>
    </FormSelect>
  );
}
export default FSelect;
