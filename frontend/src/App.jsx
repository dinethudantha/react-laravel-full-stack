import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./assets/css/style.scss";
import aboutImg from "./assets/images/about-us.jpg";
import service1Img from "./assets/images/construction10.jpg";
import service2Img from "./assets/images/construction122 (2).jpg";
import service3Img from "./assets/images/construction3.jpg";
import service4Img from "./assets/images/construction4.jpg";
import icon1 from "./assets/images/icon-1.svg";
import icon2 from "./assets/images/icon-2.svg";
import icon3 from "./assets/images/icon-3.svg";
import project1 from "./assets/images/construction5.jpg";
import project2 from "./assets/images/construction3.jpg";
import { tetimonials } from "./data";

function App() {
    const [count, setCount] = useState(0);

    const [tetimonialValue, setTestimonialValue] = useState(0);



    return (
        <>
            {/* Header Section */}

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
                {/* Hero Section */}

                <div
                    id="hero"
                    className="d-flex align-items-center justify-content-center section-1"
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

                {/* About Section */}

                <div className="section-2 d-flex align-items-center justify-content-center py-5">
                    <div className="row container">
                        <div className="col-12 col-md-6">
                            <img src={aboutImg} className="w-100" alt="" />
                        </div>
                        <div class="col-md-6 col-12">
                            <div className="section-header">
                                <span className="section-sub-heading">
                                    about us
                                </span>
                                <h2>
                                    Crafting structures that last a lifetime
                                </h2>
                                <p>
                                    Building enduring structures requires a
                                    comprehensive approach that combines
                                    advanced materials, resilient design,
                                    routine maintenance, and sustainable
                                    practices. By drawing on historical insights
                                    and utilizing modern technology.
                                </p>
                                <p>
                                    Designing structures that stand the test of
                                    time involves a seamless blend of
                                    cutting-edge materials, durable design,
                                    ongoing upkeep, and eco-friendly practices.
                                    By combining lessons from the past with the
                                    power of modern technology.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}

                <div className="section-3 py-5 bg-light d-flex flex-column align-items-center">
                    <div className="section-header text-center">
                        <span className="section-sub-heading">
                            our services
                        </span>
                        <h2> Our construction services</h2>
                        <p>
                            We offer a diverse array of construction services,
                            spanning residential, commercial, and industrial
                            projects.
                        </p>
                    </div>
                    <div className="row container-fluid mt-4">
                        <div className="col-md-3">
                            <div className="item">
                                <div className="service-image">
                                    <img src={service1Img} alt="" />

                                    <div class="services-body">
                                        <div className="px-3 pb-4 text-white">
                                            <div class="service-title">
                                                <h3>Civil Construction</h3>
                                            </div>
                                            <div class="service-content">
                                                <p>
                                                    Civil construction is a core
                                                    sector within the
                                                    construction industry that
                                                    focuses on the design,
                                                    development, and maintenance
                                                    of infrastructure that
                                                    supports modern society.
                                                </p>
                                            </div>
                                            <a
                                                class="btn btn-primary small"
                                                href="/service/6"
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="service-image">
                                    <img src={service2Img} alt="" />

                                    <div class="services-body">
                                        <div className="px-3 pb-4 text-white">
                                            <div class="service-title">
                                                <h3>Specialty Construction</h3>
                                            </div>
                                            <div class="service-content">
                                                <p>
                                                    Specialty construction is a
                                                    niche sector within the
                                                    construction industry that
                                                    focuses on projects
                                                    requiring specialized
                                                    skills, materials, and
                                                    techniques.
                                                </p>
                                            </div>
                                            <a
                                                class="btn btn-primary small"
                                                href="/service/6"
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="service-image">
                                    <img src={service3Img} alt="" />
                                    <div class="services-body">
                                        <div className="px-3 pb-4 text-white">
                                            <div class="service-title">
                                                <h3>Industrial Construction</h3>
                                            </div>
                                            <div class="service-content">
                                                <p>
                                                    Industrial construction is a
                                                    specialized sector within
                                                    the construction industry
                                                    that focuses on the design,
                                                    development, and
                                                    construction of facilities
                                                    for industrial use.
                                                </p>
                                            </div>
                                            <a
                                                class="btn btn-primary small"
                                                href="/service/6"
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="service-image">
                                    <img src={service4Img} alt="" />
                                    <div class="services-body">
                                        <div className="px-3 pb-4 text-white">
                                            <div class="service-title">
                                                <h3>Building Construction</h3>
                                            </div>
                                            <div class="service-content">
                                                <p>
                                                    Building construction is a
                                                    broad and essential sector
                                                    within the construction
                                                    industry that focuses on the
                                                    creation of structures
                                                    designed for human occupancy
                                                    and use.
                                                </p>
                                            </div>
                                            <a
                                                class="btn btn-primary small"
                                                href="/service/6"
                                            >
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fact Section */}

                <div className="section-4 py-5 d-flex flex-column align-items-center">
                    <div className="section-header text-center">
                        <span className="section-sub-heading">
                            Why Choose Us
                        </span>
                        <h2> Discover our wide variety of projects.</h2>
                        <p>
                            Created in close partnership with our clients and
                            collaborators, this approach merges industry
                            expertise, <br /> decades of experience, innovation,
                            and flexibility to consistently deliver excellence.
                        </p>
                    </div>
                    <div className="container row cards-container mt-4">
                        <div className="col-md-4 card">
                            <div className="item shadow px-4 d-flex align-items-center">
                                <div>
                                    <img src={icon1} alt="" />
                                    <h3 className="mt-2">
                                        Cutting-Edge Solutions
                                    </h3>
                                    <p className="mt-3">
                                        Small actions create big impacts. It all
                                        begins and ends with each employee
                                        committing to safer work practices
                                        daily, ensuring they return home safely.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 card">
                            <div className="item shadow px-4 d-flex align-items-center">
                                <div>
                                    <img src={icon2} alt="" />
                                    <h3 className="mt-2">
                                        Cutting-Edge Solutions
                                    </h3>
                                    <p className="mt-3">
                                        Small actions create big impacts. It all
                                        begins and ends with each employee
                                        committing to safer work practices
                                        daily, ensuring they return home safely.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 card">
                            <div className="item shadow px-4 d-flex align-items-center">
                                <div>
                                    <img src={icon3} alt="" />
                                    <h3 className="mt-2">
                                        Cutting-Edge Solutions
                                    </h3>
                                    <p className="mt-3">
                                        Small actions create big impacts. It all
                                        begins and ends with each employee
                                        committing to safer work practices
                                        daily, ensuring they return home safely.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Projects Section */}

                <div className="section-5 bg-light py-4 d-flex flex-column align-items-center">
                    <div className="section-header text-center">
                        <span className="section-sub-heading">
                            our projects
                        </span>
                        <h2> Discover our diverse range of projects</h2>
                        <p>
                            We offer a diverse array of construction services,
                            spanning residential, commercial, and industrial
                            projects.
                        </p>
                    </div>
                    <div className="container-fluid row text-white">
                        <div className="col-md-3 ">
                            <div className="item">
                                <div className="project-image">
                                    <img src={project1} alt="" />
                                </div>
                                <div className="project-content p-4 d-flex align-items-end">
                                    <div>
                                        <h3>Goa Project 2025</h3>
                                        <p>
                                            Specialty construction is a niche
                                            sector within the construction
                                            industry that focuses on projects
                                            requiring specialized skills,
                                            materials, and techniques
                                        </p>
                                        <a
                                            class="btn btn-primary small"
                                            href="/service/6"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="item">
                                <div className="project-image">
                                    <img src={project2} alt="" />
                                </div>
                                <div className="project-content  p-4 d-flex align-items-end">
                                    <div>
                                        <h3>Lucknow Project 2025</h3>
                                        <p>
                                            Specialty construction is crucial
                                            for projects that require more than
                                            just standard building practices.
                                            Whether it's restoring a historic
                                            landmark, designing a cutting-edge
                                            research facility, or creating a
                                            custom home with unique
                                            architectural features
                                        </p>
                                        <a
                                            class="btn btn-primary small"
                                            href="/service/6"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial Section */}

                <div className="section-6 py-4 d-flex flex-column align-items-center">
                    <div className="section-header text-center">
                        <span className="section-sub-heading">
                            Testimonials
                        </span>
                        <h2> What people are saying about us</h2>
                        <p>
                            We offer a diverse array of construction services,
                            spanning residential, commercial, and industrial
                            projects.
                        </p>
                    </div>
                    <div className="container row">
                        {tetimonials.map((testimonial, i) => {
                            return (
                                <div
                                    className={
                                        i <= tetimonialValue + 2
                                            ? " show col-md-4 p-4"
                                            : "hide col-md-4 p-4"
                                    }
                                >
                                    <div className="item p-2 bg-white shadow"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
