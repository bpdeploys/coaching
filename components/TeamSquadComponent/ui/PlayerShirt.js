import { Fragment } from 'react';
import styled from 'styled-components';
import hexagon from '../../../public/assets/img/hexagon.svg';
import Hexagon from '../components/Hexagon';

// const PlayerHex = styled.div`
//   /* display: inline-block; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
//   width: 14rem;
//   height: 14rem;
//   background-color: #ffffff;
//   /* position: relative;
//   width: 140px;
//   height: 80.83px;

//   margin: 4rem 0;
//   backface-visibility: hidden; */
//   /* margin: 40.41px 0; */

//   /* &:before,
//   &:after {
//     content: '';
//     position: absolute;
//     width: 0;
//     border-left: 70px solid transparent;
//     border-right: 70px solid transparent;
//     backface-visibility: hidden;
//   }

//   &:before {
//     bottom: 100%;
//     border-bottom: 40.41px solid #ffffff;
//   }

//   &:after {
//     top: 100%;
//     width: 0;
//     border-top: 40.41px solid #ffffff;
//   } */
// `;

const PlayerText = styled.span`
  font-size: 2.5rem;
  color: ${props => (props.black ? '#000' : '#fff')};
  margin-top: ${props => (props.top ? '2rem' : '')};
`;

const NumberSpan = styled.span`
  font-size: 2.5rem;
  color: #fff;
  position: absolute;
  text-align: center;
`;

const PlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const HexaWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PlayerShirt = () => {
  return (
    <PlayerWrapper>
      <HexaWrapper>
        <Hexagon />
        <NumberSpan black>1</NumberSpan>
      </HexaWrapper>
      <PlayerText top>Player 1</PlayerText>
      {/* <PlayerHex>
        <PlayerText black>1</PlayerText>
      </PlayerHex>
      <PlayerText top>Player 1</PlayerText> */}
    </PlayerWrapper>
  );
};

export default PlayerShirt;
