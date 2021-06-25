import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <div className="container">
                <Navbar.Brand as ={Link} to="/home" className ="brand-logo">SkyBird Web Hosting</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as ={Link} to="/home" >Home</Nav.Link>
                        <Nav.Link as ={Link} to="/home" >Services</Nav.Link>
                        <Nav.Link as ={Link} to="/dashboard" >Dashboard</Nav.Link>
                        <Nav.Link as ={Link} to="/home" >About Us</Nav.Link>
                        <Nav.Link as ={Link} to="/home" >Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;
