import { AboutMe } from "./AboutMe";
import { NavB } from "./NavB";
import "./App.css";
import { Introduce } from "./Introduce";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

const App = () => {
  return (
    <>
      <NavB />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  );
};

export default App;
