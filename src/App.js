import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SdetSkills from "./components/SdetSkills";
import FullStackSkills from "./components/FullStackSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <SdetSkills />
      <FullStackSkills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
