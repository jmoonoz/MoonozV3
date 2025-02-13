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
import { fadeInOut } from "../../animation";
import { motion } from "framer-motion";
import { FaRegFolder } from "react-icons/fa";
import FlipLink from "../FlipLink/FlipLink";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar className="navBar" expand="md" fixed="top">
      <Container fluid>
        <div className="navLogo">
          <Link to="/">MNZ</Link>
        </div>
        {/* folder button */}
        <motion.div initial="hidden" animate="show" exit="exit">
          <motion.div variants={fadeInOut}>
            <FaRegFolder onClick={handleShow} size={30} />
          </motion.div>
        </motion.div>
        {/* off canvas */}
        <Offcanvas
          className="offCanvasNav"
          placement="end"
          show={show}
          onHide={handleClose}
        >
          {/* off canvas header */}
          <Offcanvas.Header>
            <div className="navLogo">
              <Link onClick={handleClose} to="/">
                MNZ
              </Link>
            </div>
            <motion.div
              initial="hidden"
              animate="show"
              exit="exit"
            ></motion.div>
            <FaRegFolder onClick={handleClose} size={30} />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <FlipLink onClick={handleClose} href="/About">
              About
            </FlipLink>

            <FlipLink onClick={handleClose} href="/Projects">
              Projects
            </FlipLink>

            <FlipLink onClick={handleClose} href="/Contact">
              Contact
            </FlipLink>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;
