import React from 'react'
import { Navbar } from 'react-bootstrap'

export const Footer = () => {
    return (
        <>
            <Navbar className="pt-4 pb-4 mt-4" style={{backgroundColor: '#4f4f4f'}}>
                <img className="ml-3" style={{width: '3%'}} src={require("../assets/img/iconoLinkedIn.svg")} alt="LinkedIn"/>
                <img className="ml-3" style={{width: '3%'}} src={require("../assets/img/iconoInsta.svg")} alt="Instagram"/>
                <img className="ml-3" style={{width: '3%'}} src={require("../assets/img/iconoMedium.svg")} alt="Medium"/>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text className="mr-4" style={{color: 'grey'}}>
                    Hecho por <a style={{color: 'white'}} href="#">Ripley Tech</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            {/* src={require("../assets/img/dog.jpg")} */}  
        </>
    )
}
