import React from "react";
import styled from "styled-components";
const SectionSubtitle = styled.h2`
  font-size: 3rem;
  text-transform: capitalize;
  margin-bottom: 5rem;
`;

const Subtitle = ({ subtitle }) => {
  return <SectionSubtitle>{subtitle}</SectionSubtitle>;
};

export default Subtitle;
