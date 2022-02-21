import React from "react";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { authService, dbService } from "../Firebase";
import BImgSpace from "../Components/BImgSpace";

const Asdf = styled.div`
  color: red;
`;
/*
{
    "dateText"
    "attachmentUrl"
    "explainText"
    "portfolioText"
}
*/

interface FDataType {
  dateText: string;
  attachmentUrl: string;
  portfolioText: string;
  email: string;
}

const Bidder = () => {
  let array: FDataType[] = [];
  const getData = async () => {
    const querySnapshot = await getDocs(collection(dbService, "AllData"));
    querySnapshot.forEach((doc) => {
      array.push({
        dateText: doc.data().dateText,
        attachmentUrl: doc.data().attachmentUrl,
        portfolioText: doc.data().portfolioText,
        email: doc.data().email,
      });
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {console.log(array)}
      {/* {array.map((res, index: number) => {
        <BImgSpace imgUrl={res.attachmentUrl} date={res.dateText} />;
      })} */}
    </>
  );
};

export default Bidder;
