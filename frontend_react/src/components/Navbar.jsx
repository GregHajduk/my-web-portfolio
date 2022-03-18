import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/Logo.svg";
import Button from "../components/Button";
import { Close } from "@styled-icons/evil/Close";
import { Menu } from "@styled-icons/feather/Menu";

const Nav = styled.nav`
  padding: 0 5vw;
  position: fixed;
  top: 0;
  left: 0;
  height: 5rem;
  width: 100%;
  background-color: var(--dark-accent-color);
  color: var(--main-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
`;
const LogoContainer = styled.div`
  height: 100%;
  padding: 1rem 0;
`;
const Logo = styled.img`
  height: 100%;
  cursor: pointer;

  animation: rotate 5s linear infinite;
  @keyframes rotate {
    to {
      transform: rotateY(360deg);
    }
  }
`;

const NavMenuButtonContainer = styled.div`
  height: 3rem;
  width: 3rem;
  padding: 0.5rem;
  border: 1px solid var(--main-text-color);
  border-radius: 50%;
  display: none;
  cursor: pointer;
  z-index: 100;
  @media (max-width: 40rem) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  width: 100%;
  transition: 0.3s all cubic-bezier(0.52, 0.4, 0.33, 1.01);

  @media (max-width: 40rem) {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: var(--dark-accent-color);
    right: ${({ open }) => (open ? "0" : "-100%")};
  }
`;
const NavLinkWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  transition: 0.4s all ease-in-out;
  border: 1px solid transparent;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    border: 1px solid var(--main-accent-color);
    box-shadow: 0 0 0.35em var(--main-accent-color);
  }
  @media (max-width: 40rem) {
    width: 10rem;
  }
`;
const NavLink = styled.a`
  color: var(--main-text-color);
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: 1, name: "home" },
    { id: 2, name: "about" },
    { id: 3, name: "projects" },
    { id: 4, name: "skills" },
    { id: 5, name: "contact" },
  ];
  return (
    <Nav>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
      <NavMenuButtonContainer open={open} onClick={() => setOpen(!open)}>
        {open ? <Close /> : <Menu />}
      </NavMenuButtonContainer>
      <NavLinks onClick={() => setOpen(false)} open={open}>
        {navLinks.map((link) => {
          return (
            <NavLinkWrapper key={link.id}>
              <NavLink href={`#${link.name}`}>{link.name}</NavLink>
            </NavLinkWrapper>
          );
        })}
        <Button title="download cv" />
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
