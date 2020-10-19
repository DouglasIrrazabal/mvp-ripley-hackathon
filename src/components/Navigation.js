import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import '../assets/css/navbar.css'

export const Navigation = () => {
    return (
        <>
            <Navbar className = "top-bar" bg="light" expand="lg">
                <Navbar.Brand className="logo" href="#home">Ripley MVP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">NUESTRA EMPRESA</Nav.Link>
                    <Nav.Link href="#link">CULTURA</Nav.Link>
                    <Nav.Link href="#link">ÚNETE</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}