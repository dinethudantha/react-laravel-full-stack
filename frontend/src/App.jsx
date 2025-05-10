import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./assets/css/style.scss";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <header>
                <Navbar expand="lg" className="py-4 me-auto">
                    <Container>
                        <Navbar.Brand href="#home" id="logo" className="">
                            <span>UrbanEdge</span> Constructions
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse
                            id="basic-navbar-nav"
                            className="d-flex align-items-center justify-content-end"
                        >
                            <Nav className="">
                                <Nav.Link className="navlink" href="#home">
                                    Home
                                </Nav.Link>
                                <Nav.Link className="navlink" href="#link">
                                    About Us
                                </Nav.Link>
                                <Nav.Link className="navlink" href="#link">
                                    Services
                                </Nav.Link>
                                <Nav.Link className="navlink" href="#link">
                                    Projects
                                </Nav.Link>
                                <Nav.Link className="navlink" href="#link">
                                    Blogs
                                </Nav.Link>
                                <Nav.Link className="navlink" href="#link">
                                    Contact Us
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

export default App;
