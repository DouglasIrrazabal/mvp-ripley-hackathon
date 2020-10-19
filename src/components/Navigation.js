import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';

export const Navigation = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Ripley MVP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Sección 1</Nav.Link>
                    <Nav.Link href="#link">Sección 2</Nav.Link>
                    <Nav.Link href="#link">Sección 3</Nav.Link>
                    <Nav.Link href="#link">Sección 4</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
