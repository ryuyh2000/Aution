import React, { useState } from "react";
import styled from "styled-components";
import Image from "../Components/Image";
import Explain from "../Components/Explain";
import Portfolio from "../Components/Portfolio";

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
const PortfolioContainer = styled.div<{ PortfolioZAxis: number }>`
  position: absolute;
  box-shadow: 1px 1px 20px #aaaaaa;
  left: 52%;
  transform: translateX(-50%);
  z-index: ${(props) => props.PortfolioZAxis};
  width: 500px;
  height: 700px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 7%;
  background-color: #fdf5e6;
`;

let EXPLAINTEXT: string;
let PORTFOLIOTEXT: string;
let DATE: string;
let IMGDATA: any;

const Bidder = ({}) => {
  const [image, setImage] = React.useState(3);
  const [explain, setExplain] = React.useState(2);
  const [portfolio, setPortfolio] = React.useState(1);

  const imageZAxis = () => {
    zAxis(3, 2, 1);
  };

  const explanZAxis = () => {
    zAxis(2, 3, 1);
  };

  const portfolioZAxis = () => {
    zAxis(1, 2, 3);
  };

  const zAxis = (image: number, explain: number, portfolio: number) => {
    setImage(image);
    setExplain(explain);
    setPortfolio(portfolio);
  };

  const handleExplain = (EText: string) => {
    EXPLAINTEXT = EText;
  };

  const handlePortfolio = (PText: string) => {
    PORTFOLIOTEXT = PText;
  };

  const handleImg = (date: string, imgData: any) => {
    DATE = date;
    IMGDATA = imgData;
  };

  return (
    <div>
      <div>Bidder</div>
      <ImgContainer onClick={imageZAxis} ImgZAxis={image}>
        <Image IBidderCallback={handleImg} />
      </ImgContainer>

      <ExplainContainer onClick={explanZAxis} ExplainZAxis={explain}>
        <Explain EBidderCallback={handleExplain} />
      </ExplainContainer>

      <PortfolioContainer onClick={portfolioZAxis} PortfolioZAxis={portfolio}>
        <Portfolio PBidderCallback={handlePortfolio} />
      </PortfolioContainer>
    </div>
  );
};

export default Bidder;
