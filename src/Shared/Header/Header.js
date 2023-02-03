import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../../../src/image/logo.png";
import { NavDropdown } from "react-bootstrap";
import { Link} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user]=useAuthState(auth);
  const handleSignOut=()=>{
    signOut(auth);
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="primary"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <img as={Link} to="/" src={logo} alt="" />
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#experts">Experts</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>

              {user && (
                <>
                  <Nav.Link as={Link} to="/manageservices">
                    Manage
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addservice">
                    Add
                  </Nav.Link>
                  <Nav.Link as={Link} to="/orderhistory">
                    Orders
                  </Nav.Link>
                </>
              )}

              {user ? (
                <Nav.Link as={Link} to="/login" onClick={handleSignOut}>
                  Sign Out
                </Nav.Link>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
