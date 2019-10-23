import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./carousel/Carousel";
import styled from "styled-components";
import "./styles.css";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 200px;
  height: 75px;
  text-align: center;
  color: #56437c;
  font-weight: 500;
  border-radius: 3px;
  background: rgb(126, 104, 168);
  background: linear-gradient(
    90deg,
    rgba(126, 104, 168, 1) 0%,
    rgba(187, 170, 221, 1) 100%
  );
`;

function App() {
  return (
    <Carousel>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
      <Box>Item 4</Box>
      <Box>Item 5</Box>
    </Carousel>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
