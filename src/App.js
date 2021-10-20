import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Landing/Landing";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

import ReactGa from "react-ga";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGa.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Navigation />
      <Landing />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
