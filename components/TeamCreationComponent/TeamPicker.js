// import { Title } from "./styles/Styles"

import { Fragment, useContext, useState } from 'react';
import styled from 'styled-components';
import teamContext from './store/team-context';
import { ErrorSpan, LabelStyled, WrapperDiv } from './styles';
// import { Section, StyledDiv } from './styles/Styles';
import Button from './ui/Button';

const InputTextStyled = styled.input`
  font-family: inherit;
  font-weight: inherit;
  font-size: 2rem;
  outline: none;
  border: none;
  width: 100%;
  color: #fff;
  background-color: transparent;
  border-bottom: 3px solid #fff;
  padding-bottom: 1rem;

  &::placeholder {
    color: #fff;
  }
`;

const TeamPicker = () => {
  const { setTeamName } = useContext(teamContext);
  const [hasError, sethasError] = useState(null);
  const [wasTouched, setWasTouched] = useState(false);

  const onChangeHandler = e => {
    if (e.target.value.length <= 3) {
      sethasError('Name must be greater than 3 letters!');
      return;
    }

    setTeamName(e.target.value.trim());
    sethasError(null);
  };

  return (
    <Fragment>
      <InputTextStyled
        type="text"
        id="teamname"
        name="teamname"
        onChange={onChangeHandler}
        onFocus={() => setWasTouched(true)}
        placeholder={`E.g. La Masia FC`}
        maxLength={30}
      />
      {hasError && wasTouched && <ErrorSpan>{hasError}</ErrorSpan>}
    </Fragment>
  );
};

export default TeamPicker;
