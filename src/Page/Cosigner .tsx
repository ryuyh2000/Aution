import React from "react";
import styled from "styled-components";
import Image from "../Components/Image";
import Explain from "../Components/Explain";
import Portfolio from "../Components/Portfolio";
import { authService, dbService, storageService } from "../Firebase";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { addDoc, collection } from "firebase/firestore";

const ImgContainer = styled.div<{ ImgZAxis: number }>`
  position: absolute;
  box-shadow: 5px 5px 20px #aaaaaa;
  left: 70%;
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
  left: 71%;
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
  left: 72%;
  transform: translateX(-50%);
  z-index: ${(props) => props.PortfolioZAxis};
  width: 500px;
  height: 700px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 7%;
  background-color: #fdf5e6;
`;

const PostBtn = styled.button<{ filledData: boolean }>`
  position: absolute;
  transform: translateX(-50%);
  left: 30%;
  top: 50%;
  width: 300px;
  height: 100px;
  border: solid 1px rgba(0, 0, 0, 0.295);
  border-radius: 10px;
  background-color: #fdf5e6;
  font-size: 50px;
  color: ${(props) => (props.filledData ? "black" : "#b4b4b4")};
`;

const Cosigner = () => {
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
    if (authService.currentUser) {
      try {
        if (imgText !== undefined) {
          const UUDI4 = uuidv4();

          const userFileRef = ref(
            storageService,
            `${localStorage.getItem("email")}/ ${UUDI4}`
          );

          const userResponse = await uploadString(
            userFileRef,
            imgText,
            "data_url"
          );

          const attachmentUrl = await getDownloadURL(userResponse.ref);

          const postData = {
            explainText,
            portfolioText,
            dateText,
            attachmentUrl,
            email: authService.currentUser.email,
            price: 0,
          };
          
          //@typescript-eslint/no-unused-vars
          const userData = await addDoc(
            collection(dbService, `${localStorage.getItem("email")}`),
            postData
          );

          //@typescript-eslint/no-unused-vars
          const cloudData = await addDoc(
            collection(dbService, `AllData`),
            postData
          );
        } else {
          alert("put picture");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("login plz");
    }
  };

  return (
    <>
      <div>Cosigner</div>

      <ImgContainer onClick={imageZAxis} ImgZAxis={image}>
        <Image ICosignerCallback={handleImg} />
      </ImgContainer>

      <ExplainContainer onClick={explanZAxis} ExplainZAxis={explain}>
        <Explain ECosignerCallback={handleExplain} />
      </ExplainContainer>

      <PortfolioContainer onClick={portfolioZAxis} PortfolioZAxis={portfolio}>
        <Portfolio PCosignerCallback={handlePortfolio} />
      </PortfolioContainer>

      {explainText && portfolioText && dateText && imgText !== undefined ? (
        <PostBtn filledData={true} onClick={onSubmit}>
          Post
        </PostBtn>
      ) : (
        <PostBtn filledData={false} disabled>
          Post
        </PostBtn>
      )}
    </>
  );
};

export default Cosigner;
