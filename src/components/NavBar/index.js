import React from "react";
// import Link from "react-router-dom/Link";
import "./style.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';


function NavBar() {

    return (
    <Container>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Jean Peel</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </Container>

        // <Nav justify variant="tabs" defaultActiveKey="/">
        // <Nav.Item>
        //     <Nav.Link href="/">Home</Nav.Link>
        // </Nav.Item>
        // <Nav.Item>
        //     <Nav.Link eventKey="about">About</Nav.Link>
        // </Nav.Item>
        // <Nav.Item>
        //     <Nav.Link eventKey="portfolio">Portfolio</Nav.Link>
        // </Nav.Item>
        // <Nav.Item>
        //     <Nav.Link eventKey="resume">Resume</Nav.Link>
        // </Nav.Item>
        // <Nav.Item>
        //     <Nav.Link eventKey="blog">Blog</Nav.Link>
        // </Nav.Item>
        // <Nav.Item>
        //     <Nav.Link eventKey="connect">Connect</Nav.Link>
        // </Nav.Item>
        // </Nav>
    );
}

export default NavBar;