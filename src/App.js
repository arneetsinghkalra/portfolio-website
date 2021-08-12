import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Landing/Landing";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      {" "}
      <Navigation />
      <Landing />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
