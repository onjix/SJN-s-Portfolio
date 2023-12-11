import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { AboutMe } from "./AboutMe";
import "./App.css";

function App() {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">SJN's Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">ABOUT ME</Nav.Link>
            <Nav.Link href="#features">SKILLS</Nav.Link>
            <Nav.Link href="#pricing">PROJECTS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <AboutMe />
    </>
  );
}

export default App;
