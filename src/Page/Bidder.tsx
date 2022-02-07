import React, { useState } from "react";
import styled from "styled-components";
import Image from "../Components/Image";
import Explain from "../Components/Explain";
import Calender from "../Components/Calender";

const ImgContainer = styled.div<{ ImgZAxis: number }>`
  position: absolute;
  z-index: ${(props) => props.ImgZAxis};
  width: 500px;
  height: 700px;
  border: 2px solid black;
  margin-left: 10%;
  margin-top: 5%;
  background-color: red;
  opacity: 0.9;
`;
const ExplainContainer = styled.div<{ ExplainZAxis: number }>`
  position: absolute;
  z-index: ${(props) => props.ExplainZAxis};
  width: 500px;
  height: 700px;
  border: 2px solid black;
  margin-left: 11%;
  margin-top: 6%;
  background-color: green;
  opacity: 0.9;
`;
const CalenderContainer = styled.div<{ CalenderZAxis: number }>`
  position: absolute;
  z-index: ${(props) => props.CalenderZAxis};
  width: 500px;
  height: 700px;
  border: 2px solid black;
  margin-left: 12%;
  margin-top: 7%;
  background-color: blue;
  opacity: 0.9;
`;

const Bidder = () => {
  const [red, setRed] = React.useState(3);
  const [green, setGreen] = React.useState(2);
  const [blue, setBlue] = React.useState(1);

  const imageZAxis = () => {
    zAxis(3, 2, 1);
  };

  const explanZAxis = () => {
    zAxis(2, 3, 1);
  };

  const claenderZAxis = () => {
    zAxis(1, 2, 3);
  };

  const zAxis = (red: number, green: number, blue: number) => {
    setRed(red);
    setGreen(green);
    setBlue(blue);
  };

  return (
    <div>
      <div>Bidder</div>
      <ImgContainer onClick={imageZAxis} ImgZAxis={red}>
        <Image />
      </ImgContainer>

      <ExplainContainer onClick={explanZAxis} ExplainZAxis={green}>
        <Explain />
      </ExplainContainer>

      <CalenderContainer onClick={claenderZAxis} CalenderZAxis={blue}>
        <Calender />
      </CalenderContainer>
    </div>
  );
};

export default Bidder;
