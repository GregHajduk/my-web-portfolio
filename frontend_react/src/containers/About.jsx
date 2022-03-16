import React from "react";
import styled from "styled-components";
import Subtitle from "../components/Subtitle";
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const InfoContainer = styled.div`
  height: 100%;
  max-width: 60rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;
const QuoteContainer = styled.blockquote`
  flex: 1;
`;
const Quote = styled.p`
  line-height: 2;
  font-size: 3rem;
`;
const TextContainer = styled.div`
  flex: 1;
`;
const Text = styled.p`
font-size: 1.5rem;
  font-weight: 300;
  line-height: 2;
`;
const Span = styled.span`
  color: var(--main-accent-color);
  font-size: 3rem;
  font-weight: 900;
  white-space: nowrap;
`;
const Separator = styled.div`
  width: 1px;
  background-color: var(--main-accent-color);
`;
const Author = styled.i`
  text-transform: capitalize;
  font-weight: 200;
  font-size: 1.25rem;
`;
const About = () => {
  return (
    <Container id="about">
      <Subtitle subtitle="about me" />
      <InfoContainer>
        <QuoteContainer>
          <Quote>
            “The way to get started is to quit talking and{" "}
            <Span>BEGIN DOING.</Span>”
          </Quote>
          <Author>- walt disney</Author>
        </QuoteContainer>
        <Separator></Separator>
        <TextContainer>
          <Text>
            I’m a self-taught web developer that takes advantage of many
            opportunities that online education is giving these days. In my
            daily work I use knowledge and methods learned from the most
            experienced in their domain.
          </Text>
        </TextContainer>
      </InfoContainer>
    </Container>
  );
};

export default About;
