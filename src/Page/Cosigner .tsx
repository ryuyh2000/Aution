import React, { useState } from "react";
import styled from "styled-components";
import Image from "../Components/Image";
import Explain from "../Components/Explain";
import Portfolio from "../Components/Portfolio";
import { dbService, storageService } from "../Firebase";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";

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

const Bidder = ({}) => {
  const [image, setImage] = React.useState(3);
  const [explain, setExplain] = React.useState(2);
  const [portfolio, setPortfolio] = React.useState(1);

  const [explainText, setExplainText] = React.useState("");
  const [portfolioText, setPortfolioText] = React.useState("");
  const [dateText, setdateText] = React.useState("");
  const [imgText, setImgText] = React.useState<any>();

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
    setExplainText(EText);
  };

  const handlePortfolio = (PText: string) => {
    setPortfolioText(PText);
  };

  const handleImg = (date: string, imgData: any) => {
    setdateText(date);
    setImgText(imgData);
  };

  const onSubmit = async () => {
    if (imgText != undefined) {
      const fileRef = ref(
        storageService,
        `${localStorage.getItem("email")}/ ${uuidv4()}`
      );
      const response = await uploadString(fileRef, imgText, "data_url");
      const attachmentUrl = await getDownloadURL(response.ref);

      const postData = {
        explainText,
        portfolioText,
        dateText,
        imgText,
      };
      await addDoc(collection(dbService, "data"), postData);
      /*  await addDoc(collection(db, "data"), postData); */
    } else {
      alert("put picture");
    }
  };

  return (
    <div>
      <div>Cosigner</div>
      <ImgContainer onClick={imageZAxis} ImgZAxis={image}>
        <Image IBidderCallback={handleImg} />
      </ImgContainer>

      <ExplainContainer onClick={explanZAxis} ExplainZAxis={explain}>
        <Explain EBidderCallback={handleExplain} />
      </ExplainContainer>
      <PortfolioContainer onClick={portfolioZAxis} PortfolioZAxis={portfolio}>
        <Portfolio PBidderCallback={handlePortfolio} />
      </PortfolioContainer>
      {explainText && portfolioText && dateText && imgText != undefined ? (
        <button onClick={onSubmit}>Post</button>
      ) : (
        <button disabled>Post</button>
      )}
    </div>
  );
};

export default Bidder;
