import React from "react";
import styled from "styled-components";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../Firebase";
import BImgSpace from "../Components/BImgSpace";
import MarketPrizeGraph from "../Components/MarketPrizeGraph";
import { Link } from "react-router-dom";

const Asdf = styled.div`
  color: red;
`;

const PictureContainer = styled.div`
  display: flex;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

interface FDataType {
  dateText: string;
  attachmentUrl: string;
  portfolioText: string;
  id: string;
  email: string;
}

const Bidder = () => {
  const [FData, setFData] = React.useState<FDataType[]>([
    {
      id: "",
      dateText: "",
      attachmentUrl: "",
      portfolioText: "",
      email: "",
    },
  ]);

  const [pictureID, setPictureID] = React.useState<string[]>([]);

  let array: FDataType[] = [];
  const getData = async () => {
    /*     const querySnapshot = await getDocs(collection(dbService, "AllData"));
    querySnapshot.forEach((doc) => {
      array.push({
        dateText: doc.data().dateText,
        attachmentUrl: doc.data().attachmentUrl,
        portfolioText: doc.data().portfolioText,
        email: doc.data().email,
      });
    }); */

    const q = query(collection(dbService, "AllData"));
    onSnapshot(q, (snapshot) => {
      const allDataArr = snapshot.docs.map((doc) => ({
        id: doc.id,
        dateText: doc.data().dateText,
        attachmentUrl: doc.data().attachmentUrl,
        portfolioText: doc.data().portfolioText,
        email: doc.data().email,
      }));
      setFData(allDataArr);
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <PictureContainer>
        {FData.map((res, index: number) => (
          <>
            <Link key={index} to={`/auction/${res.id}`}>
              <BImgSpace imgUrl={res.attachmentUrl} date={res.dateText} />
            </Link>
          </>
        ))}
      </PictureContainer>
      <MarketPrizeGraph />
    </>
  );
};

export default Bidder;
