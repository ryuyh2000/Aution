import React from "react";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../Firebase";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getDatabase, ref, set } from "firebase/database";

const Panel = styled.div`
  position: absolute;
  box-shadow: 1px 1px 20px #aaaaaa;
  left: 30%;
  transform: translateX(-50%);
  width: 500px;
  height: 700px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 6%;
  background-color: #fdf5e6;
`;

const Panel2 = styled.div`
  position: absolute;
  box-shadow: 1px 1px 20px #aaaaaa;
  left: 70%;
  transform: translateX(-50%);
  width: 500px;
  height: 700px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 6%;
  background-color: #fdf5e6;
`;

const Image = styled.img`
  margin-left: 50px;
  margin-top: 100px;
  width: 400px;
  height: 400px;
  border-radius: 10px;
`;

interface FDataType {
  dateText: string;
  attachmentUrl: string;
  portfolioText: string;
  id: string;
  email: string;
  explainText: string;
}

const Auction = () => {
  const [FData, setFData] = React.useState<FDataType>({
    id: "",
    dateText: "",
    attachmentUrl: "",
    portfolioText: "",
    explainText: "",
    email: "",
  });

  const { pictureID } = useParams();

  const getData = async () => {
    const q = query(collection(dbService, "AllData"));
    onSnapshot(q, (snapshot) => {
      const allDataArr = snapshot.docs.map(
        (doc) =>
          pictureID == doc.id && {
            id: doc.id,
            dateText: doc.data().dateText,
            attachmentUrl: doc.data().attachmentUrl,
            explainText: doc.data().explainText,
            portfolioText: doc.data().portfolioText,
            email: doc.data().email,
          }
      );
      allDataArr.map((res) => res != false && setFData(res));
    });
  };

  const postPrice = () => {};

  const setPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    console.log(value);
  };

  React.useEffect(() => {
    getData();
  }, []);

  function writeUserData() {
    const { id, dateText, attachmentUrl, portfolioText, explainText, email } =
      FData;

    const db = getDatabase();
    set(ref(db, `users/${FData.id}`), {
      id,
      dateText,
      attachmentUrl,
      portfolioText,
      explainText,
      email,
    });
  }

  return (
    <>
      <Panel>
        <Image src={FData.attachmentUrl} />
        <input type="number" placeholder="price" onChange={setPrice} />
        <button onClick={postPrice}>post</button>
      </Panel>
      <Panel2>
        <div
          style={{
            width: "400px",
            height: "400px",
            border: " 2px black solid",
            margin: "100px 0px 0px 50px",
          }}
        >
          explain: {FData.explainText}
          <br />
          portfolio: {FData.portfolioText}
        </div>
        <input type="radio" />
        <br />
        date: {FData.dateText}
        <br />
        email: {FData.email}
      </Panel2>
    </>
  );
};

export default Auction;
