import React, { useState, useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navBar.scss";
// import { FlipLink } from "../FlipLink/FlipLink";
// import { motion } from "motion/react";
import { FaRegFolder } from "react-icons/fa";
import FlipLink from "../FlipLink/FlipLink";

function NavBar() {
  const [activeLink, setActiveLink] = useState("");
  const [scroll, setScrolled] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="navBar" expand="md" fixed="top">
      <Container fluid>
        <div className="navLogo">
          <Link to="/">MNZ</Link>
        </div>
        <FaRegFolder onClick={handleShow} size={30} />
        <Offcanvas
          className="offCanvasNav"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          <Offcanvas.Header>
            <div className="navLogo">
              <Link to="/">MNZ</Link>
            </div>
            <FaRegFolder onClick={handleClose} size={30} />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <FlipLink href="/About">About</FlipLink>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
