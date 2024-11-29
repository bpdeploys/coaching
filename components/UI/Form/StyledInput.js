import styled from 'styled-components';

const StyledInput = styled.label`
  position: relative;
  display: inline-block;
  margin: ${(props) => (props.margin ? props.margin : '0.5rem 1.5rem')};
  width: ${(props) => (props.width ? props.width : '100%')};
  text-align: ${(props) => (props.textAlign ? props.textAlign : null)};
  font-family: var(
    --pure-material-font,
    'Roboto',
    'Segoe UI',
    BlinkMacSystemFont,
    system-ui,
    -apple-system
  );
  font-size: 1.8rem;
  line-height: 1.5;
  overflow: hidden;

  > i {
    position: absolute;
    top: 38%;
    right: 2%;

    > img {
      width: 2.5rem;
      filter: invert(99%) sepia(1%) saturate(2%) hue-rotate(97deg)
        brightness(106%) contrast(100%);
    }
  }

  > input,
  > textarea {
    display: block;
    box-sizing: border-box;
    margin: 0;
    border: none;
    border-top: solid 27px transparent;
    border-bottom: solid 1px white;
    padding: 0 0 4px;
    width: 100%;
    height: inherit;
    color: white;
    background-color: transparent;
    box-shadow: none; /* Firefox */
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    caret-color: white;
    transition: border-bottom 0.2s, background-color 0.2s;
  }

  > input + span,
  > textarea + span {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    box-sizing: border-box;
    padding: 7px 0 0;
    color: white;
    font-size: 75%;
    line-height: 18px;
    pointer-events: none;
    transition: color 0.2s, font-size 0.2s, line-height 0.2s;
  }

   {
    /* Underline */
  }

  > input + span::after,
  > textarea + span::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 2px;
    background-color: rgb(var(--pure-material-primary-rgb, 33, 150, 243));
    transform-origin: bottom center;
    transform: scaleX(0);
    transition: transform 0.2s;
  }

   {
    /* Hover */
  }

  > input:hover,
  > textarea:hover {
    border-bottom-color: white;
  }

   {
    /* Placeholder-shown  */
  }

  > input:not(:focus):placeholder-shown + span,
  > textarea:not(:focus):placeholder-shown + span {
    font-size: inherit;
    line-height: 75px;
  }
   {
    /* Focus */
  }

  > input:focus,
  > textarea:focus {
    outline: none;
  }

  > input:focus + span,
  > textarea:focus + span {
    color: white;
  }

  > input:focus + span::before,
  > textarea:focus + span::before {
    opacity: 0.12;
  }

  > input:focus + span::after,
  > textarea:focus + span::after {
    transform: scale(1);
  }

   {
    /* Disabled */
  }

  > input:disabled,
  > textarea:disabled {
    border-bottom-color: rgba(
      var(--pure-material-onsurface-rgb, 0, 0, 0),
      0.38
    );
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
  }

  > input:disabled + span,
  > textarea:disabled + span {
    color: rgba(var(--pure-material-onsurface-rgb, 0, 0, 0), 0.38);
  }
`;

export default StyledInput;
