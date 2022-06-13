import React from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => (
<Navbar bg="primary" variant="dark">
<Container>
          <Navbar.Brand as={NavLink} to="/">
              Welcome
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
            <Nav.Link  as={NavLink} to="/person">Person</Nav.Link>
            <Nav.Link  as={NavLink} to="/about">About</Nav.Link>
          </Nav>
          <Nav className="">
          </Nav>
</Container>
</Navbar>

);
export default Header;