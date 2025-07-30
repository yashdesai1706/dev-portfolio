import React, { useState } from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import yd from '../Assets/yd.png';
import './Header.css';
import { Link } from 'react-router-dom';
import Page1 from '../Page1';
import Page2 from '../Page2';
import Page3 from '../Page3';
import Page4 from '../Page4';

function MyNavbar() {
  const [activeItem, setActiveItem] = useState('home');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSelect = (selectedKey) => {
    setActiveItem(selectedKey);
    handleClose();
  };

  return (
    <>
      <Navbar bg="transparent" variant='dark' expand="sm" className="mb-3 sticky-top" >
        <Container fluid>
          <Navbar.Brand href="#">
            <img className='img-fluid' style={{ height: '90px', width: 'auto' }} src={yd} alt="Logo" />
          </Navbar.Brand>

          {/* Correct Toggle Button */}
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-sm" onClick={handleShow} />

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-sm"
            placement="end"
            className="bg-dark text-white"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title><h1>Portfolio</h1></Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav
                className="justify-content-start flex-grow-1 pe-3 fs-5"
                activeKey={activeItem}
                onSelect={handleSelect}>
                <Nav.Link href="#home" className='hover' eventKey="home" style={{ fontFamily: 'Anzo2' }}>HOME</Nav.Link>
                <Nav.Link href="#about" className='hover' eventKey="about" style={{ fontFamily: 'Anzo2' }}>ABOUT ME</Nav.Link>
                <Nav.Link href="#portfolio" className='hover' eventKey="portfolio" style={{ fontFamily: 'Anzo2' }}>PORTFOLIO</Nav.Link>
                <Nav.Link href="#contact" className='hover' eventKey="contact" style={{ fontFamily: 'Anzo2' }}>CONTACT</Nav.Link>
                 <Nav.Link href="#projects" className='hover' eventKey="contact" style={{ fontFamily: 'Anzo2' }}>PROJECTS</Nav.Link>
                  <Nav.Link href="#certi" className='hover' eventKey="contact" style={{ fontFamily: 'Anzo2' }}>CERTIFICATIONS</Nav.Link>

              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
