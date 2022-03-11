import styled from "styled-components";
import profile from "../images/profile.jpg";
import Button from "../components/Button";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;
const InfoContainer = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding-top: 20%;
  padding-right: 1rem;
  height: 100%;
  width: 100%;
`;
const ImgContainer = styled.div`
  flex: 2;
  height: 80%;
  width: 50%;
  background-color: var(--main-accent-color);
  border-top-right-radius: 20.2rem;
  border-bottom-left-radius: 20.2rem;
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
`;
const Title = styled.h1`
  position: absolute;
  top: 25%;
  right: -35%;
  background-color: var(--main-bg-color);
  padding: 2rem 4rem;
  border-radius: 7rem;
  font-size: 3.5rem;
  z-index: 10;
`;
const Desc = styled.p`
  font-size: 1.75rem;
  font-weight: 200;
  text-transform: uppercase;
  text-align: right;
  margin-bottom: 3rem;
`;

const Header = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>
          Grzegorz
          <br />
          Hajduk
        </Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Desc>
        <Button title="see my work" />
      </InfoContainer>
      <ImgContainer>
        <BgImg />
      </ImgContainer>
    </Container>
  );
};

export default Header;
