import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 40rem) {
    padding-top:6rem;
  }
`;
const SectionContainer = ({ children, id, style }) => {
  return (
    <Container style={style} id={id}>
      {children}
    </Container>
  );
};

export default SectionContainer;
