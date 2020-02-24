import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Brian R Ellis</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">About Me</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    {/* <Nav.Link href="/portfolio">Portfolio</Nav.Link> */}
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/portfolio">All</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item target="_blank" href="https://thebrellis.github.io/Code-Quiz/">Code Quiz</NavDropdown.Item>
                        <NavDropdown.Item target="_blank" href="https://ancient-dawn-75617.herokuapp.com/">Burger App</NavDropdown.Item>
                        <NavDropdown.Item target="_blank" href="https://thebrellis.github.io/Project-1/">Deet-Dash</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}