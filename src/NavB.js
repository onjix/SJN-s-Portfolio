import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Title } from "./Title";
export const NavB = () => {
  return (
    <>
      <Navbar className="NavB-Nav">
        <Container className="NavB-Container">
          <Navbar.Brand href="#home">SJN's Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#ABOUTME">ABOUT ME</Nav.Link>
            <Nav.Link href="#SKILLS">SKILLS</Nav.Link>
            <Nav.Link href="#PROJECTS">PROJECTS</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
