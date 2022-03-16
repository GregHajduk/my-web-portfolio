import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../client";
import Subtitle from "../components/Subtitle";
import styled from "styled-components";
import { Link, Github } from "@styled-icons/bootstrap";

const Container = styled.div`
  width: 100%;
  padding-top: 8rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProjectsFiltersContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 5rem;
`;
const SingleFilter = styled.button`
  width: 10rem;
  padding: 0.75rem 1.5rem;
  color: var(--main-text-color);
  font-weight: 600;
  border: none;
  border-radius: 20px;
  text-transform: uppercase;
  transition: all 0.5s;
  ${({ active, filter }) =>
    active === filter.title
      ? `background-color: var(--main-accent-color);
        color:var(--dark-accent-color);
        box-shadow: 0 0 0.5rem var(--main-accent-color);`
      : `background-color: var(--dark-accent-color)`};
`;
const AllProjectsContainer = styled(motion.div)`
  max-width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
`;
const ProjectContainer = styled.div`
  background-color: var(--dark-accent-color);
  padding: 1.25rem;
  border-radius: 15px;
  transition: all 0.4s ease-in-out;
  &:hover {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
  }
`;
const ProjectContainerHover = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  opacity: 0;
  transition: all 0.3s ease;
`;
const ProjectImageContainer = styled.div`
  position: relative;
  height: 17rem;
`;
const ProjectImage = styled.img`
  object-fit: cover;
  height: 100%;
  border-radius: 15px;
`;
const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ProjectTitle = styled.h4`
  margin: 0.8rem 0 0.5rem 0;
  font-weight: 900;
  font-size: 1.125rem;
`;
const ProjectDesc = styled.p`
  font-weight: 200;
  color: var(--medium-text-color);
  text-align: center;
`;
const ProjectIconContainer = styled(motion.a)`
  width: 3rem;
  height: 3rem;
  padding: 0.6rem;
  border-radius: 50%;
  background-color: #68e0d0a0;
  color: var(--main-text-color);
  margin: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const Projects = () => {
  const [active, setActive] = useState("All");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = "*[_type == 'projects']";

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilteredProjects(data);
    });
  }, []);

  const filters = [
    { id: 1, title: "eCommerce" },
    { id: 2, title: "Landing pages" },
    { id: 3, title: "Web Apps" },
    { id: 4, title: "All" },
  ];
  const handleFilter = (filter) => {
    setActive(filter.title);
    setAnimateCard({ y: 100, opacity: 0 });
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (filter.title === "All") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter((item) => item.tags.includes(filter.title))
        );
      }
    }, 500);
  };
  return (
    <Container id="projects">
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
      <AllProjectsContainer
        animate={animateCard}
        transition={{ duration: 0.5 }}
      >
        {filteredProjects.map((project, index) => {
          return (
            <ProjectContainer key={index}>
              <ProjectImageContainer>
                <ProjectImage src={urlFor(project.imgUrl)} alt={project.name} />
                <ProjectContainerHover
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                  }}
                >
                  <ProjectIconContainer
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                    >
                      <Link />
                    </motion.div>
                  </ProjectIconContainer>
                  <ProjectIconContainer
                    href={project.codeLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                    >
                      <Github />
                    </motion.div>
                  </ProjectIconContainer>
                </ProjectContainerHover>
              </ProjectImageContainer>
              <ProjectInfoContainer>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>{project.description}</ProjectDesc>
              </ProjectInfoContainer>
            </ProjectContainer>
          );
        })}
      </AllProjectsContainer>
    </Container>
  );
};

export default Projects;
