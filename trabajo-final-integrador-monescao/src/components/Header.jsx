import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = ({titulo}) => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <h1>{titulo}</h1>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;