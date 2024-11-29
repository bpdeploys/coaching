import { Fragment, useState } from 'react';
import styled from 'styled-components';
import Radio from './components/Radio';
import { LabelStyled, ShowIcon, WrapperDiv } from './styles';
import { ModalContentDiv } from './styles';

const SelectDivStyled = styled.div`
  position: relative;

  &:after {
    background: url('http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png')
      no-repeat right #ddd;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

const SelectStyled = styled.select`
  font-family: inherit;
  font-weight: inherit;
  font-size: 2rem;
  outline: none;
  border: none;
  width: 100%;
  color: #fff;
  margin-top: 3rem;
  background-color: transparent;
  border-bottom: 3px solid #fff;
  padding-bottom: 2rem;

  background: url('/assets/img/select-icon.svg') no-repeat right;
  background-size: 5%;
  appearance: none;
  background-position-x: 98%;

  option {
    color: black;
    font-size: 1.5rem;
    background-color: #fff;
    border-bottom: 1px solid #fff;
  }
`;

const Picker = ({ data, onFocus }) => {
  const { setUserChoice, valuesArr, labelName, userChoice } = data;

  const options = valuesArr.map(value => {
    if (typeof value === 'object') {
      return (
        <option key={Math.random()} value={value.id}>
          {value.name}
        </option>
      );
    }

    return (
      <option key={Math.random()} value={value}>
        {value}
      </option>
    );
  });

  const [checker] = valuesArr;
  let optionsMarkup;

  if (typeof checker === 'object') {
    const entityName = valuesArr.find(value => value.id === userChoice);

    optionsMarkup = (
      <option value="" hidden>
        {userChoice ? entityName.name : labelName}
      </option>
    );
  }

  if (typeof checker !== 'object') {
    optionsMarkup = (
      <option value="" hidden>
        {userChoice ? userChoice : labelName}
      </option>
    );
  }

  return (
    <SelectDivStyled>
      <SelectStyled defaultValue="" onChange={e => setUserChoice(e.target.value)} onFocus={onFocus}>
        {optionsMarkup}
        {options}
      </SelectStyled>
    </SelectDivStyled>
  );
};

export default Picker;
