import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../client";
import Subtitle from "../components/Subtitle";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const AllSkillsContainer = styled(motion.ul)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4rem;
`;
const Skill = styled(motion.li)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  background-color: var(--dark-accent-color);
  border-radius: 50%;
`;
const SkillImage = styled.img`
  height: 60%;
  width: 60%;
`;
const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'skills']";

    client.fetch(query).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <Container>
      <Subtitle subtitle="skills" />
      <AllSkillsContainer
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, i) => {
          return (
            <Skill
              key={skill.name}
              whileInView={{ scale: [0, 1] }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, delay: i * 0.05 }}
            >
              <SkillImage src={urlFor(skill.icon)} alt={skill.name} />
            </Skill>
          );
        })}
      </AllSkillsContainer>
    </Container>
  );
};

export default Skills;
