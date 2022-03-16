import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbService } from "../Firebase";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SlideObject = styled.img<{ SOpacity: number; PPLength: number }>`
  position: absolute;
  transform: translateX(-50%);
  left: 300px;
  opacity: ${(props) => (props.SOpacity === props.PPLength - 1 ? 1 : 0)};
  transition: opacity 5s;
  width: 400px;
`;

const SlideInfo = styled.div<{ SOpacity: number; PPLength: number }>`
  position: absolute;
  transform: translateX(-50%);
  left: 800px;
  opacity: ${(props) => (props.SOpacity === props.PPLength - 1 ? 1 : 0)};
  transition: opacity 5s;
  width: 400px;
`;

const Container = styled.div<{ leftPersent: number }>`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  left: ${(props) => props.leftPersent + "%"};
  width: 800px;
  height: 600px;
  overflow: hidden;
  display: flex;
`;

interface PSlide {
  left: number;
}

const Slide: React.FC<PSlide> = ({ left }) => {
  const [picture, setPicture] = React.useState([] as string[]);
  const [pictureInfo, setPictureInfo] = React.useState<any>();
  const [PPicture, setPPicture] = React.useState([] as number[]);

  const lenDataArr = () => {
    setPPicture(
      PPicture.map((res) => (res === PPicture.length - 1 ? 0 : res + 1))
    );
  };

  let array: any[] = [];
  let array2: any[] = [];
  let DIndex = 0;
  let DIndexArray: number[] = [];

  const getData = async () => {
    const querySnapshot = await getDocs(collection(dbService, "AllData"));
    querySnapshot.forEach((doc) => {
      array.push(doc.data().attachmentUrl);
      array2.push({
        id: doc.id,
        dateText: doc.data().dateText,
        attachmentUrl: doc.data().attachmentUrl,
        portfolioText: doc.data().portfolioText,
        email: doc.data().email,
      });
      DIndexArray.push(DIndex);
      DIndex++;
    });
    setPictureInfo(array2);
    setPicture(array);
    setPPicture(DIndexArray);
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    const timer = setInterval(() => {
      lenDataArr();
    }, 5000);
    return () => clearInterval(timer);
  });

  return (
    <Container leftPersent={left}>
      {picture && (
        <>
          {picture.map((res: string, key: number) => (
            <React.Fragment key={key}>
              <SlideObject
                PPLength={PPicture.length}
                SOpacity={PPicture[key]}
                src={res}
              />
              <SlideInfo PPLength={PPicture.length} SOpacity={PPicture[key]}>
                {pictureInfo[key].dateText}
              </SlideInfo>
              <br />
              <SlideInfo SOpacity={PPicture[key]} PPLength={PPicture.length}>
                {pictureInfo[key].explainText}
              </SlideInfo>
            </React.Fragment>
          ))}
        </>
      )}
    </Container>
  );
};
//<div onMouseOver={() => console.log("a")}>asdfasdfasdfasd</div>
// hover 하면 true 때면 false useEffect && 87 줄 조건문 하나씩 더 걸면 될듯?
export default Slide;
