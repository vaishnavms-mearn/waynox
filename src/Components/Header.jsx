import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import "../assets/css/navbar.css";
import logo from "../assets/images/home/logo.png"
function ColorSchemesExample() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation(); // Get current route

  // Add scroll event listener to make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className={`navbar-custom ${isSticky ? "navbar-sticky" : ""}`}
      >
        <Container className="d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Navbar.Brand href="/">
            <img
              src={logo} // Change this to your logo path
              alt="Logo"
              width="200"
              height="50"
              className="d-inline-block align-top mx-5"
            />
          </Navbar.Brand>

          {/* Collapsible Menu */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav>
              <Nav.Link href="/" className={location.pathname === "/" ? "active" : ""}>
                Home
              </Nav.Link>
              <Nav.Link href="/about" className={location.pathname === "/about" ? "active" : ""}>
                About
              </Nav.Link>

              {/* Services Dropdown - Opens on Hover */}
              <NavDropdown
                title={
                  <span className="nav-dropdown-title">
                    Services <span className="dropdown-icon">▼</span>
                  </span>
                }
                id="services-dropdown"
                className="services-dropdown"
                show={showDropdown}
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <NavDropdown.Item href="/tours">Tours & Packages</NavDropdown.Item>
                <NavDropdown.Item href="/hotels">Hotels & Stays</NavDropdown.Item>
                <NavDropdown.Item href="/transport">Transport Services</NavDropdown.Item>
                <NavDropdown.Item href="/activities">Adventure Activities</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/destinations" className={location.pathname === "/destinations" ? "active" : ""}>
                Destinations
              </Nav.Link>
              <Nav.Link href="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Social Media Icons */}
          <div className="social-icons d-flex align-items-center ms-auto mx-5">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="me-3" size={20} color="#7A1CC7" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} color="#7A1CC7" />
            </a>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
