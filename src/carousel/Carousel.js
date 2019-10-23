import React from "react";
import styled from "styled-components";

const Carousel = ({ children }) => {
  return (
    <Wrapper>
      <div>prev</div>

      <Scroller>{children}</Scroller>

      <div>next</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Scroller = styled.ul`
  display: grid;
  grid-template-columns:
    minmax(0, 1em)
    [scroll-start]
    repeat(5, calc(100% / 3))
    [scroll-end]
    minmax(0, 1em);
  ::before,
  ::after {
    content: "";
  }
  gap: 1em;
  justify-content: flex-start;
  justify-items: center;
  padding: 0;
  overflow: auto;
  list-style-type: none;
  /* ::before,
  ::after {
    content: '';
  } */
  * > {
    grid-column: scroll;
  }
`;

export default Carousel;
