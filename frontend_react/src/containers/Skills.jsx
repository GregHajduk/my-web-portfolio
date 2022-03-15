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
const SkillDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
`;
const Skill = styled(motion.li)`
  display: flex;
  flex-direction: column;
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
const SkillName = styled(motion.p)`
  font-size: 0.75rem;
  color: var(--medium-text-color);
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
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, i) => {
          return (
            <SkillDetails key={skill.name}>
              <Skill
                whileInView={{ scale: [0, 1]}}
                transition={{ duration: 0.25, delay: i * 0.05 }}
              >
                <SkillImage src={urlFor(skill.icon)} alt={skill.name} />
              </Skill>
              <SkillName
                whileInView={{ scale: [0, 1], y: [20, 0] }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
              >
                {skill.name}
              </SkillName>
            </SkillDetails>
          );
        })}
      </AllSkillsContainer>
    </Container>
  );
};

export default Skills;
