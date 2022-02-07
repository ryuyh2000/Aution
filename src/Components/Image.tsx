import React, { useState } from "react";
import styled from "styled-components";
//${(props)=>props.zAxis}
const Container = styled.div`

  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;

const Label = styled.label`
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  vertical-align: middle;
  background-color: #999999;
  cursor: pointer;
  height: 20px;
  margin-left: 20px;
  margin-top: 100px;
`;

const View = styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  margin-top: 100px;
  margin-left: 25px;
  vertical-align: middle;
  border: 1px solid black;
  width: 60%;
  color: #999999;
`;

const Image = styled.img`
  margin-left: 50px;
  margin-top: 100px;
  width: 400px;
  height: 400px;
`;

const SelectImg = () => {
  const [picture, setPicture] = useState("첨부파일");
  const [attachment, setAttachment] = useState<any>();
  const png = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;

    if (files) {
      const reader = new FileReader();
      reader.onloadend = (finishedEvent) => {
        if (finishedEvent.target) {
          setAttachment(finishedEvent.target.result);
        }
      };
      reader.readAsDataURL(files[0]);
      setPicture(files[0].name);
    } else {
      alert("No File");
    }
  };

  return (
    <>
      <Container>
        <div>Picture</div>
        <Image src={attachment} />
        <View placeholder={picture} />
        <Label htmlFor="file">파일찾기</Label>
        <input type="file" onChange={png} id="file" />
      </Container>
    </>
  );
};

export default SelectImg;
