import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SurrenderCylinder from './SurrenderCylinder';

const Header = () => {
  return (
    <Navbar style={{background:"#004d4d"}} expand="lg">
      <Container 
      style= {{maxWidth:"1300px"}}
      >
        <Navbar.Brand href="#home" style = {{color:"white"}}>Online Gas Booking System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="/home" style = {{color:"aliceblue"}}>Home</Nav.Link>
            <Link to="/customer" className='nav-link active' style = {{color:"aliceblue"}}>Customer</Link>
            <Nav.Link href="/bank" style = {{color:"aliceblue"}}>Bank</Nav.Link>
            <Nav.Link href="/cylinder" style = {{color:"aliceblue"}}>Cylinder</Nav.Link>
            <Nav.Link href="/SurrenderCylinder" style = {{color:"aliceblue"}}>Surrender-Cylinder</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header


