import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaHeart } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IoMdSearch } from "react-icons/io";
import InputGroup from 'react-bootstrap/InputGroup';


const Navbars = () => {
  const btnstyle = {
    backgroundColor: 'transparent',
    border: 'none',
    marginLeft: '0px', // Adjust the margin as needed
    color: 'black', 
  }
  const navsize = {
    height : '110px',
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
    <Navbar expand="lg" className="bg-body-tertiary" style={navsize}>
    <Container>
      <Navbar.Brand href="#home" style={lefthead}>My Kitchen</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='nav'>
        <Nav className="me-auto" style={navstyle}>
          <Nav.Link href="#home" className='fontStyle'>Home</Nav.Link>
          <Nav.Link href="#link" className='fontStyle'>All items</Nav.Link>
          <Nav.Link href="#link" className='fontStyle'>Favorates <FaHeart /></Nav.Link>
          <Nav.Link>
            <InputGroup >
              <Form.Control
                placeholder="Search food recipies"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button className='btn' id="button-addon2">
              <IoMdSearch />
              </Button>
            </InputGroup>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navbars
