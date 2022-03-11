import React from "react";
import GlobalStyles from "./styles/Globals";
import Variables from "./styles/Variables";
import Navbar from "./components/Navbar";
import Header from "./containers/Header";
import About from "./containers/About";
import Projects from "./containers/Projects";
import Skills from "./containers/Skills";
import Footer from "./containers/Footer";
import SectionContainer from "./components/SectionContainer";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Variables />
      <Sidebar />
      <SectionContainer>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Skills />
        <Footer />
      </SectionContainer>
    </>
  );
};

export default App;
