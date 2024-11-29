import { useContext, useState } from 'react';
import styled from 'styled-components';
import teamContext from './store/team-context';
import { CheckWrapper, WrapperDiv } from './styles';

const LegalPicker = () => {
  const { setLegal, setTos } = useContext(teamContext);

  const legalHandler = e => setLegal(e.target.checked);
  const tosHandler = e => setTos(e.target.checked);

  return (
    <WrapperDiv>
      <CheckWrapper>
        <input name="toc" id="toc" type="checkbox" onClick={tosHandler} />
        <label htmlFor="toc">I accept the Terms and Conditions.</label>
      </CheckWrapper>
      <CheckWrapper>
        <input name="pp" id="pp" type="checkbox" onClick={legalHandler} />
        <label htmlFor="pp">I accept the Privacy Policy.</label>
      </CheckWrapper>
    </WrapperDiv>
  );
};

export default LegalPicker;
