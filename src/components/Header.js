import React , { useState } from 'react';
import {NavLink} from 'react-router-dom';
import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import OpenPortal from './OpenPortal';

const Header = () => {
  const [open, setOpen] = useState();
return (
  
<Navbar bg="info" variant="dark">
<Container>
          <Navbar.Brand as={NavLink} to="/">
              Welcome
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/person">Person</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/crud">CrudDemo</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="dark" onClick={() => setOpen(true)}>Sign Up</Button>
            {open && <OpenPortal>hello world</OpenPortal>}
          </Nav>
</Container>
</Navbar>

);}
export default Header;