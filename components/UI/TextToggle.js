import styled from 'styled-components';

const StyTextToggle = styled.label`
  position: relative;
  display: inline-block;
  width: 90px;
  height: 34px;

  input {
    display: none;
  }

  input:checked + .slider {
    background-color: #e5e5e5;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(55px);
    -ms-transform: translateX(55px);
    transform: translateX(55px);
    background: #1362d9;
  }

  .on {
    display: none;
  }

  .on,
  .off {
    color: white;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    font-size: 13px;
    font-family: Verdana, sans-serif;
  }

  .on {
    left: 30%;
  }

  .off {
    right: 0%;
  }

  input:checked + .slider .on {
    display: block;
  }

  input:checked + .slider .off {
    display: none;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e5e5e5;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border: 1px solid #616060;
    border-radius: 3rem;

    &:before {
      position: absolute;
      content: '';
      height: 26px;
      width: 26px;
      background: white;
      left: 4px;
      bottom: 3px;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }

    & > span {
      color: #616060;
    }
  }
`;

function TextToggle() {
  return (
    <StyTextToggle>
      <input type="checkbox" id="togBtn" />
      <div class="slider round">
        <span class="on">Start</span>
        <span class="off">Sub</span>
      </div>
    </StyTextToggle>
  );
}

export default TextToggle;
