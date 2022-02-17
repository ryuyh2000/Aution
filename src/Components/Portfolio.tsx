import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div``;

const ExplainBox = styled.textarea`
  margin-left: 50px;
  margin-top: 100px;
  width: 400px;
  height: 400px;
  resize: none;
`;

const Labeling = styled.div`
  width: 50px;
  height: 100px;
  background-color: #4b4bff;
  position: absolute;
  left: 100%;
  top: 200px;
  border-radius: 0px 10px 10px 0px;
  box-shadow: 5px 5px 20px #aaaaaa;
`;

const TextLength = styled.span<{ overLength: boolean }>`
  color: ${(props) => (props.overLength ? "red" : "black")};
`;

interface ExplainProps {
  PBidderCallback: (text: string) => void;
}

let SENTENCE: string;

const Portfolio: React.FC<ExplainProps> = ({ PBidderCallback }) => {
  const [textleng, setTextlen] = React.useState(0);
  const [over, setOver] = React.useState(false);

  const portfolioText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { value },
    } = event;
    setTextlen(value.length);
    SENTENCE = value;
    if (value.length > 400) {
      setOver(true);
    } else {
      setOver(false);
    }
  };

  useEffect(() => {
    PBidderCallback(SENTENCE);
  });

  return (
    <>
      <Labeling />
      <Container>
        Portfolio
        <ExplainBox onChange={portfolioText} />
        <p>
          <TextLength overLength={over} style={{ marginLeft: "400px" }}>
            {`${textleng}`}
          </TextLength>
          /400
        </p>
      </Container>
    </>
  );
};

export default Portfolio;
