import React from "react";
import GlobalStyles from "./styles/Globals";
import Variables from "./styles/Variables";
import Navbar from "./components/Navbar";
import Header from "./containers/Header";
import About from "./containers/About";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";
import Footer from "./containers/Footer";
import SiteContainer from "./components/SiteContainer";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Variables />
      <SiteContainer>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </SiteContainer>
    </>
  );
};

export default App;
