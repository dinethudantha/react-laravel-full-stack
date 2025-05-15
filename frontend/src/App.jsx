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
            <main>
                <div
                    id="hero"
                    className="d-flex align-items-center justify-content-center"
                >
                    <div className="text-center text-white">
                        <span style={{ fontSize: "1.5rem", color: "#ffb703" }}>
                            Welcome Amazing Constructions
                        </span>
                        <h1>
                            Crafting dreams with
                            <br />
                            precision and excellence.
                        </h1>
                        <p style={{ fontSize: "1.2rem" }}>
                            We excel at transforming visions into reality
                            through outstanding craftsmanship and precise
                            <br />
                            attention to detail. With years of experience and a
                            dedication to quality.
                        </p>
                        <div class="mt-4">
                            <a class="btn btn-primary large py-3">
                                Contact Now
                            </a>
                            <a class="btn btn-secondary ms-2 large py-3">
                                View Projects
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
