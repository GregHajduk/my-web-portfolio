import styled from "styled-components";
import profile from "../images/profile.jpg";
import Button from "../components/Button";
import particles from "../images/particles.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    background-image: url(${particles});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.3;
    z-index: -1;
  }
  @media (max-width: 40rem) {
    flex-direction: column;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 80%;
  width: 50%;
  background-color: var(--main-accent-color);
  border-top-right-radius: 20.2rem;
  border-bottom-left-radius: 20.2rem;
  @media (max-width: 40rem) {
    width: 100%;
    border-radius: 0;
  }
`;
const BgImg = styled.div`
  height: 100%;
  background-image: url(${profile});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-top-right-radius: 20rem;
  border-bottom-left-radius: 20rem;
  filter: grayscale(1);
  mix-blend-mode: luminosity;
  @media (max-width: 40rem) {
    border-radius: 0;
  }
`;
const Title = styled.h1`
  background-color: var(--main-bg-color);
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
`;
const Desc = styled.p`
  font-size: 1.5rem;
  font-weight: 200;
  text-transform: uppercase;
  color: #bebebe;
  margin-bottom: 3rem;
`;
const ButtonContainer = styled.a``;
const Header = () => {
  return (
    <Container id="home">
      <InfoContainer>
        <Title>
          Grzegorz
          <br />
          Hajduk
        </Title>
        <Desc>web developer with passion for new technologies </Desc>
        <ButtonContainer href="#projects">
          <Button title="see my work" />
        </ButtonContainer>
      </InfoContainer>
      <ImgContainer>
        <BgImg />
      </ImgContainer>
    </Container>
  );
};

export default Header;
