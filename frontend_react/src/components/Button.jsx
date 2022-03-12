import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  color: var(--dark-accent-color);
  background-color: var(--main-accent-color);
  padding: 0.75rem 2.25rem;
  transition: 0.3s all ease-in-out;
  position: relative;
  border: 1px solid transparent;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 200;
  text-transform: uppercase;
  :hover {
    border: 1px solid var(--main-accent-color);
    box-shadow: 0 0 0.5em var(--main-accent-color);
  }
`;

const Button = ({ title }) => {
  return <Btn>{title}</Btn>;
};

export default Button;
