import React from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../Firebase";
import { useParams } from "react-router-dom";
import styled from "styled-components";
/* getDocs import { getDatabase, ref, set } from "firebase/database"; */

const Panel = styled.div`
  position: absolute;
  box-shadow: 1px 1px 20px #aaaaaa;
  left: 25%;
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
  left: 75%;
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

const TextBox = styled.div`
  width: 400px;
  height: 400px;
  border: 2px black solid;
  margin: 100px 0px 0px 50px;
`;

const PostPrice = styled.button`
  width: 100px;
  height: 30px;
`;

const PriceArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: 50%;
  input {
    border: none;
    border: 2px black solid;
    border-radius: 10px;
  }
`;

interface FDataType {
  dateText: string;
  attachmentUrl: string;
  portfolioText: string;
  id: string;
  email: string;
  explainText: string;
  price: number;
}

const Auction = () => {
  const [FData, setFData] = React.useState<FDataType>({
    id: "",
    dateText: "",
    attachmentUrl: "",
    portfolioText: "",
    explainText: "",
    email: "",
    price: 0,
  });
  const [radioValue, setRadioValue] = React.useState([
    "Explain Text",
    "Portfolio Text",
  ]);
  const [radioCheck, setRadioCheck] = React.useState("Explain Text");

  const { pictureID } = useParams();
  const getData = async () => {
    const q = query(collection(dbService, "AllData"));
    onSnapshot(q, (snapshot) => {
      const allDataArr = snapshot.docs.map(
        (doc) =>
          pictureID === doc.id && {
            id: doc.id,
            dateText: doc.data().dateText,
            attachmentUrl: doc.data().attachmentUrl,
            explainText: doc.data().explainText,
            portfolioText: doc.data().portfolioText,
            email: doc.data().email,
            price: doc.data().price,
          }
      );
      allDataArr.map((res) => res !== false && setFData(res));
    });
  };

  const postPrice = () => {};

  const setPrice = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: HTMLButtonElement = event.currentTarget;
    console.log(button.name);
  };

  const radioOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setRadioCheck(value);
  };

  const moneyArr = [1000, 10000, 100000];

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Panel>
        <Image src={FData.attachmentUrl} />
      </Panel>
      <PriceArea>
        <label>price</label>
        {moneyArr.map((res, index) => (
          <button name={`${res}`} key={index} onClick={setPrice}>
            +{res}
          </button>
        ))}

        <PostPrice onClick={postPrice}>post</PostPrice>
      </PriceArea>
      <Panel2>
        <TextBox>
          {radioCheck === "Explain Text" ? (
            <>explain: {FData.explainText}</>
          ) : (
            <>portfolio: {FData.portfolioText}</>
          )}
        </TextBox>
        {radioValue.map((value, key) => (
          <React.Fragment key={key}>
            <input
              value={value}
              type="radio"
              name="radioBtn"
              checked={radioCheck === value}
              onChange={radioOnChange}
            />
            <label>{value}</label>
          </React.Fragment>
        ))}
        <br />
        price:{FData.price}
        <br />
        date: {FData.dateText}
        <br />
        email: {FData.email}
      </Panel2>
    </>
  );
};

export default Auction;
