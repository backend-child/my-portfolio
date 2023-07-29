import { Navbar } from "react-bootstrap";
import NavBar from "./components/Navbar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { Newsletter } from "./components/Newsletter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Newsletter />
    </div>
  );
}

export default App;
