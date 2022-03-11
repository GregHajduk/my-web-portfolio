import React from "react";
import styled from "styled-components";
import { Github, Linkedin } from "@styled-icons/bootstrap/";

const SideBar = styled.div`
  border-right: 1px solid #ffffff4c;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 51vh;
  width: 5rem;
`;
const Icons = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1.5rem;
  gap: 1rem;
  color: grey;
  cursor: pointer;
`;
const Sidebar = () => {
  return (
    <SideBar>
      <Icons>
        <Github />
        <Linkedin />
      </Icons>
    </SideBar>
  );
};

export default Sidebar;
