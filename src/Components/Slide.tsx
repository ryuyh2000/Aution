import React from "react";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { dbService } from "../Firebase";
import { link } from "fs";

interface DataKey {
  attachmentUrl: string;
  dateText: string;
  portfolioText: string;
}

const Slide = () => {
  const [count, setCount] = React.useState<any>();
  let array: any[] = [];
  let array2: any[] = [1,2,3,1,];
  const getData = async () => {
    const querySnapshot = await getDocs(collection(dbService, "AllData"));
    querySnapshot.forEach((doc) => {
      array.push(doc.data().attachmentUrl);
    });
    setCount(array);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <button>asdf</button>
    </>
  );
};

export default Slide;

/* const timer = setInterval(() => {
  setCount(count + 1);
}, 1000); 
return () => clearInterval(timer);*/
