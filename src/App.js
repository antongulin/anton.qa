import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SdetSkills from "./components/SdetSkills";
import FullStackSkills from "./components/FullStackSkills";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <SdetSkills />
      <FullStackSkills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
