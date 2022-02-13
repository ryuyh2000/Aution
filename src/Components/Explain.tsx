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

const TextLength = styled.span<{ overLength: boolean }>`
  color: ${(props) => (props.overLength ? "red" : "black")};
`;

interface ExplainProps {
  EBidderCallback: (text: string) => void;
}

let SENTENCE: string;

const Explain: React.FC<ExplainProps> = ({ EBidderCallback }) => {
  const [textleng, setTextlen] = React.useState(0);
  const [over, setOver] = React.useState(false);

  const explainText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    EBidderCallback(SENTENCE);
  });

  return (
    <Container>
      Explain
      <ExplainBox onChange={explainText} />
      <p>
        <TextLength overLength={over} style={{ marginLeft: "400px" }}>
          {`${textleng}`}
        </TextLength>
        /400
      </p>
    </Container>
  );
};

export default Explain;