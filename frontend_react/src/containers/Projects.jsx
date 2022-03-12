import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { urlFor, client } from "../client";
import Subtitle from "../components/Subtitle";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProjectsFiltersContainer = styled.div``;
const SingleFilter = styled.button`
  ${({ active, filter }) => active === filter.title ? `background-color: var(--main-accent-color)` :`background-color: var(--main-bg-color)`}
`;

const Projects = () => {
  const [active, setActive] = useState("All");

  const filters = [
    { id: 1, title: "eCommerce" },
    { id: 2, title: "Langing Pages" },
    { id: 3, title: "Web Apps" },
    { id: 4, title: "All" },
  ];
  const handleFilter = (filter) => {
    setActive(filter.title);
  };
  console.log(active);
  return (
    <Container>
      <Subtitle subtitle="My projects portfolio" />
      <ProjectsFiltersContainer>
        {filters.map((filter) => {
          return (
            <SingleFilter
              filter={filter}
              active={active}
              key={filter.id}
              onClick={() => handleFilter(filter)}
            >
              {filter.title}
            </SingleFilter>
          );
        })}
      </ProjectsFiltersContainer>
    </Container>
  );
};

export default Projects;
