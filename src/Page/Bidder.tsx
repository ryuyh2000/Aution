import React, { useState } from "react";
import styled from "styled-components";
import Image from "../Components/Image";
import Explain from "../Components/Explain";
import Calendar from "../Components/Calendar";

const ImgContainer = styled.div<{ ImgZAxis: number }>`
  position: absolute;
  box-shadow: 5px 5px 20px #aaaaaa;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${(props) => props.ImgZAxis};
  width: 500px;
  height: 700px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  margin-top: 5%;
  background-color: #fdf5e6;
`;
const ExplainContainer = styled.div<{ ExplainZAxis: number }>`
  position: absolute;
  box-shadow: 1px 1px 20px #aaaaaa;
  left: 51%;
  transform: translateX(-50%);
  z-index: ${(props) => props.ExplainZAxis};
  width: 500px;
  height: 700px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 6%;
  background-color: #fdf5e6;
`;
const CalenderContainer = styled.div<{ CalenderZAxis: number }>`
  position: absolute;
  box-shadow: 1px 1px 20px #aaaaaa;
  left: 52%;
  transform: translateX(-50%);
  z-index: ${(props) => props.CalenderZAxis};
  width: 500px;
  height: 700px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 7%;
  background-color: #fdf5e6;
`;

const Bidder = () => {
  const [image, setImage] = React.useState(3);
  const [explain, setExplain] = React.useState(2);
  const [calender, setCalender] = React.useState(1);

  const imageZAxis = () => {
    zAxis(3, 2, 1);
  };

  const explanZAxis = () => {
    zAxis(2, 3, 1);
  };

  const calenderZAxis = () => {
    zAxis(1, 2, 3);
  };

  const zAxis = (image: number, explain: number, calender: number) => {
    setImage(image);
    setExplain(explain);
    setCalender(calender);
  };

  return (
    <div>
      <div>Bidder</div>
      <div style={{ display: "flex" }}>
        <ImgContainer onClick={imageZAxis} ImgZAxis={image}>
          <Image />
        </ImgContainer>

        <ExplainContainer onClick={explanZAxis} ExplainZAxis={explain}>
          <Explain />
        </ExplainContainer>

        <CalenderContainer onClick={calenderZAxis} CalenderZAxis={calender}>
          <Calendar />
          <input type="date" />
        </CalenderContainer>
      </div>
    </div>
  );
};

export default Bidder;
