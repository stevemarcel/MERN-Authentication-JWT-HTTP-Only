import { Navbar, Nav, Container } from "react-bootstrap";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar
        // bg="dark" variant="dark"
        expand="md"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="/">Mern Auth</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/login">
                  <FaSignInAlt /> Sign In
                </Nav.Link>
                <Nav.Link href="/register">
                  <FaSignOutAlt /> Sign Up
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar.Toggle>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
