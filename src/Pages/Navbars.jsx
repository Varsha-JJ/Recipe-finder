import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHeart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoMdSearch } from "react-icons/io";
import InputGroup from 'react-bootstrap/InputGroup';
import { Outlet } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from 'react-router-dom';



const Navbars = () => {
  const btnstyle = {
    backgroundColor: 'transparent',
    border: 'none',
    marginLeft: '0px', // Adjust the margin as needed
    color: 'black', 
  }
  const navsize = {
    height : '100px',
    // color: 'white'
    
  
  }

  const lefthead = {
    width : '50%'
  }

  const navstyle = {
    width: '90%',
    display : 'flex',
    gap : '15px'
  }

  return (
    <div>
    <Navbar expand="lg" className="navstyles" style={navsize}>
    <Container>
      <Navbar.Brand href="/" style={lefthead}>My Kitchen</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='nav'>
        <Nav className="me-auto" style={navstyle}>
          <Nav.Link as={Link} to="/" className='fontStyle mt-2'>Home</Nav.Link>
          <Nav.Link as={Link} to='all/' className='fontStyle mt-2'>All items</Nav.Link>
          <Nav.Link as={Link} to='favorates/' className='fontStyle mt-2'>Favorates <FaHeart /></Nav.Link>
          <NavDropdown title="Account" className='fontStyle mt-2'>
            {/* {<RiAccountCircleFill className='fonticon mt-2' />} */}
              <NavDropdown.Item href="#home">Login</NavDropdown.Item>
              <NavDropdown.Item href="#home">Register</NavDropdown.Item>   
            </NavDropdown>
          {/* <Nav.Link>
            <InputGroup >
              <Form.Control
                placeholder="Search food recipies"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2" className='control'
              />
              <Button className='btn' id="button-addon2">
              <IoMdSearch />
              </Button>
            </InputGroup>
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <div>
    <Outlet></Outlet>
  </div>
    </div>
  )
}

export default Navbars
