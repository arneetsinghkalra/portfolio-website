import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Landing/Landing";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";

function App() {
  return (
    <>
      {" "}
      <Navigation />
      <Landing />
      <Education id="education" />
      <Experience />
      <Projects />
    </>
  );
}

export default App;
