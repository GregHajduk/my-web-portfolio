import React from "react";
import styled from "styled-components";

const Container = styled.section`
  max-width: 75rem;
  margin: 0 auto;
  @media (max-width: 40rem) {
    margin: 0 0.5rem;
  }
`;
const SiteContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SiteContainer;
