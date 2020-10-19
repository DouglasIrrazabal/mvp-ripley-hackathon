import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import '../assets/css/navbar.css'

export const Navigation = () => {
    return (
        <>
            <Navbar className = "top-bar" bg="light" expand="lg">
                <Navbar.Brand className="logo" href = "home#" >
                    <img 
                        src = {require("../assets/img/logo.svg")}
                        width="200"
                        className="d-inline-block align-top"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="asic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                <li>
                    <Nav.Link href="#home">SOBRE RIPLEY TECH</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="#link">CULTURA</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="#link">ÚNETE</Nav.Link>
                </li>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr />
        </>


    )
}