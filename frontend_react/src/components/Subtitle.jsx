import React from "react";
import styled from "styled-components";
const SectionSubtitle = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  text-transform: capitalize;
  margin-bottom: 4rem;
`;

const Subtitle = ({ subtitle }) => {
  return <SectionSubtitle>{subtitle}</SectionSubtitle>;
};

export default Subtitle;
