import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { imgFadein, slideUp } from "../../animation";
import Munoz from "../../Images/mexicoHat.png";
import "./home.scss";
import FlipLink from "../../Components/FlipLink/FlipLink";
import SlideUpText from "../../Components/SlideUpText/SlideUpText";

function Home() {
  const DURATION = 1.8;
  const STAGGER = 0.0;
  const lastName = "Muñoz";

  return (
    <motion.div
      key="/"
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{
        delayChildren: 0.1,
        staggerChildren: 1.5,
        // duration: 1,
      }}
      className="home"
    >
      <motion.img
        variants={imgFadein}
        className="heroMe"
        src={Munoz}
      />
      <Container>
        <Row>
          <Col>
          <SlideUpText>Hi</SlideUpText>
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
                      duration: 0.4,
                      type: "spring",
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
              initial="hidden"
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
              initial="hidden"
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
