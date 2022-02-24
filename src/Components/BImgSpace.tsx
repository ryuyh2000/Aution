import React from "react";
import styled from "styled-components";

const Picture = styled.img`
  display: flex;
  width: 200px;
  height: 200px;
  padding: 20px;
  border: 1px black solid;
  margin: 5px;
`;

interface BProps {
  imgUrl: string;
  date: string;
}

const BImgSpace: React.FC<BProps> = ({ imgUrl, date }) => {
  return (
    <div>
      <Picture src={imgUrl} />
      <div>{date}</div>
    </div>
  );
};

export default BImgSpace;
