import React from "react";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../Firebase";
import { useParams } from "react-router-dom";

interface FDataType {
  dateText: string;
  attachmentUrl: string;
  portfolioText: string;
  id: string;
  email: string;
}

const Auction = () => {
  const [FData, setFData] = React.useState<FDataType>({
    id: "",
    dateText: "",
    attachmentUrl: "",
    portfolioText: "",
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
            portfolioText: doc.data().portfolioText,
            email: doc.data().email,
          }
      );
      allDataArr.map((res) => res != false && setFData(res));
    });
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <img
        style={{ width: "100px", height: "100px" }}
        src={FData.attachmentUrl}
      />
    </>
  );
};

export default Auction;
