import React from 'react';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

const PageHeader = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#">Car Manager</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '200px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/validateCar">Validate Car</Nav.Link>
                    <Nav.Link href="/inventory">Inventory</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)

export default PageHeader