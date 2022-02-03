import React, { useState } from "react";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import { finished } from "stream";

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
  margin-left: 10px;
`;

const View = styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 25%;
  color: #999999;
`;

function Bidder() {
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
    <Container>
      <div>Bidder</div>
      <View placeholder={picture} />
      <Label htmlFor="file">파일찾기</Label>
      <input type="file" onChange={png} id="file" />
      <img src={attachment} />
    </Container>
  );
}

export default Bidder;
