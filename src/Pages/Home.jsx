import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      key="/"
      transition={{
        delayChildren: 0.1,
        staggerChildren: 3,
        duration: 2,
      }}
      style={{ paddingTop:"25%",width: "100vw" }}
    >
      <Container>
        <Row>
          <Col className="col-sm-screen" sm={12} md={8}>
            <div className="slide-subtitle col-direction">
              <motion.h4
                initial={{ opacity: 0, x: "-110%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-100%", filter: blur(10) }}
                transition={{ duration: 1.25, ease: "easeInOut" }}
                className="name-title"
              >
                Joel Muñoz
              </motion.h4>
              <div className="title-line"></div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: "-100%", filter: "blur(5px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: "-100%", filter: blur(10) }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="slide-title"
            >
              Creative Designer
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ duration: 1.25, ease: "easeInOut" }}
              className="btn-alignment col-direction"
            >
              <Button variant="outline-danger" href="/About">
                About Me
              </Button>
              <Button variant="outline-light" href="/">
                My CV
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Home;
