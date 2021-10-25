import React from 'react';
import './Header.css'
import { Button, Carousel, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

    //style for the anchors
    const style = {
        color: 'white',
        marginRight: '80px'
    }

    //style for the navbar
    const navbarStyle = {
        height: '80px',
        paddingLeft: '100px'
    }

    //style for the form
    const formStyle = {
        height: '50px',
        marginTop: '40px',
        width: '200px'
    }

    return (
        <div className='header'>

            <Navbar fixed="top" bg="dark" expand="lg" style={navbarStyle} >
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        {/* All the links   */}
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link as={Link} style={style} to='/home' >Home</Nav.Link>
                            <Nav.Link as={Link} style={style} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} style={style} to="/service">Services</Nav.Link>
                            <Nav.Link as={Link} style={style} to="/success">Reviews</Nav.Link>
                            <Nav.Link as={Link} style={style} to="/contact">Contact</Nav.Link>
                        </Nav>

                        {/* Form part in navbar */}
                        <Form className="d-flex">
                            <FormControl type="search" style={formStyle} placeholder="Search" className="me-2" aria-label="Search" />

                            <Button style={formStyle} variant="outline-success">Search</Button>
                        </Form>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;