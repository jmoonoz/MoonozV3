import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      key="/"
      transition={{
        delayChildren: 0.1,
        staggerChildren: 0.3,
        duration: 2,
      }}
      style={{ width: "100vw" }}
    >
      <Container>
        <Row>
          <Col sm={12} md={8}>
            <div className="slide-subtitle col-direction">
              <h4 className="name-title">Joel Muñoz</h4>
              <div className="title-line"></div>
            </div>
            <div className="slide-title">
              <h2>Creative Designer</h2>
            </div>
            <div className="btn-alignment col-direction">
              <Button variant="outline-danger" href="/About">
                About Me
              </Button>
              <Button variant="outline-light" href="/">
                My CV
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Home;
