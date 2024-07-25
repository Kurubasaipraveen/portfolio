import React from "react";

import AboutMe from "../AboutMe/AboutMe.jsx";
import Projects from "../Projects/Projects.jsx";
import ContactMe from "../ContactMe/ContactMe.jsx";
import Skills from "../Skills/Skills.jsx";
import Cover from "../Cover/Cover.jsx";
import DivSpace from "../DivSpace/DivSpace.jsx";
import Certificates from "../Certificates/Certificate.jsx";
const Home = () => {
  return (
    <>
      <Cover />
      <DivSpace />
      <AboutMe />
      <Skills />
      <Projects />
      <Certificates />
      <ContactMe />
    </>
  );
};

export default Home;


