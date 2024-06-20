import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/custom-style.css'


const MyNavbar = (props) => {
  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand className='custom-navbar-element' href={props.homeLink}>{props.logo}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link className='custom-navbar-element' href={props.resLink}>{props.res}</Nav.Link>
            <Nav.Link className='custom-navbar-element' href={props.worksLink}>{props.works}</Nav.Link>
            <Nav.Link className='custom-navbar-element' href={props.blogLink}>{props.blog}</Nav.Link>
            <Nav.Link className='custom-navbar-element' href={props.aboutLink}>{props.about}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
