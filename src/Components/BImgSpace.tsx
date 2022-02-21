import React from "react";
import styled from "styled-components";

const Container = styled.div``;

interface BProps {
  imgUrl: string;
  date: string;
}

const BImgSpace: React.FC<BProps> = ({ imgUrl, date }) => {
  return (
    <>
      <div>
        {imgUrl} {date}
      </div>
    </>
  );
};

export default BImgSpace;
