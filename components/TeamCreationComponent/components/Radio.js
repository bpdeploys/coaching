import styled from 'styled-components';

const RadioDiv = styled.label`
  position: relative;
  display: block;

  height: 100%;
  width: 100%;

  cursor: pointer;
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid #000;

  span {
    color: #000;
    font-size: 2rem;
  }

  input {
    position: absolute;
    visibility: hidden;
    opacity: 0;
  }
`;

const Radio = ({ data, onClick, children }) => {
  return (
    <RadioDiv htmlFor={data}>
      <input
        type="radio"
        id={data}
        name={data}
        value={data}
        onClick={onClick}
      />
      <span>{children}</span>
    </RadioDiv>
  );
};

export default Radio;
