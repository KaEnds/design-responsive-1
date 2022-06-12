import React from "react";
import "../Style/Navbar.css";
import { AiOutlineBars } from "react-icons/ai";
import {Link} from 'react-router-dom'
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,

} from "react-bootstrap";

function Navbarx() {
  return (
    <div>
      <Navbar fixed="top" bg="dark" variant="dark" expand="lg" className="px-2" >
        <Container fluid>
          <Navbar.Brand  className='Logo-nav' href="#">Forest Touring</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="flex-grow-0">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="About">About</Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="#">Contact</Nav.Link>
              <Nav.Link><Button variant="success" size='sm'>Login</Button></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarx;
