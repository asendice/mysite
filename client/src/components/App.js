import React from "react";
import NavBar from "./NavBar";
import Landing from "./Landing";
import Projects from "./Projects";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";

const App = () => {
  return (
    <React.Fragment >
      <NavBar />

      <Landing />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
