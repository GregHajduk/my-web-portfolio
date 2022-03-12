import React from "react";
import styled from "styled-components";

const Container = styled.section`
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 3rem;
`;
const SectionContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SectionContainer;
