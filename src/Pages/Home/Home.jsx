import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { slideUp } from "../../animation";
import Munoz from "../../Images/mexicoHat.png";
import "./home.scss";
import FlipLink from "../../Components/FlipLink/FlipLink";

function Home() {
  const DURATION = 1.8;
  const STAGGER = 0.0;
  const lastName = "Muñoz";

  return (
    <motion.div
      key="/"
      transition={{
        delayChildren: 0.1,
        staggerChildren: 3,
        duration: 2,
      }}
      className="home"
    >
      <motion.img
        initial={{ y: 10, opacity: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.9,
            duration: 0.8,
            ease: "easeIn",
          },
        }}
        exit={{ y: 10, opacity: 0 }}
        className="heroMe"
        src={Munoz}
      />
      <Container>
        <Row>
          <Col>
            <div className="heroTitle">
              {lastName.split("").map((l, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "100%", rotate: "-9deg" }}
                  animate={{
                    y: 0,
                    rotate: "0deg",
                    transition: {
                      duration: DURATION,
                      type: "spring",
                      delay: STAGGER * i,
                      ease: [0.12, 0, 0.39, 0],
                    },
                  }}
                  exit={{
                    y: "100%",
                    rotate: "-9deg",
                    transition: {
                      duration: 0.9,
                      // type: "spring",
                      delay: STAGGER * i,
                      ease: [0.12, 0, 0.39, 0],
                    },
                  }}
                >
                  {l}
                </motion.span>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={7} sm={8} md={8}></Col>
          <Col className="homeDesc" xs={2} sm={2} md={1} lg={1}>
            <motion.div
              initial="initial"
              animate="show"
              exit="exit"
              className="homeUnderTitleText"
            >
              <div>
                <motion.div variants={slideUp}>Designer</motion.div>
              </div>
              <div>
                <motion.div variants={slideUp}>Developer</motion.div>
              </div>
            </motion.div>
            <motion.div
              initial="initial"
              animate="show"
              exit="exit"
              className="homeUnderTitleText2"
            >
              <div>
                <motion.div variants={slideUp}>¡Echándole</motion.div>
              </div>
              <div>
                <motion.div variants={slideUp}>Ganas!</motion.div>
              </div>
            </motion.div>
          </Col>
          <Col className="homeDesc" xs={1} sm={1} md={1} lg={1}></Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Home;
