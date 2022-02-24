import React from "react";
import { dbService, liveDB } from "../Firebase";
import { getDatabase, ref, set } from "firebase/database";
import { authService } from "../Firebase";
import { collection, onSnapshot, query } from "firebase/firestore";

const MarketPrizeGraph: React.FC = () => {
  const [liveData, setLiveData] = React.useState<string[]>([]);

  const LiveDB = async () => {};

  React.useEffect(() => {
    let arr: string[] = [];
    const q = query(collection(dbService, "AllData"));
    onSnapshot(q, (snapshot) => {
      snapshot.docs.map((doc) => arr.push(doc.id));
      setLiveData(arr);
    });
  }, []);

  return (
    <>
      <div>asdfasdf</div>
    </>
  );
};

export default MarketPrizeGraph;

/* 
{
  auction:{
    price:number
  }

}

*/
