import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight, fadeInOut } from "../../animation";
import "./about.scss";

// import SectionTitle from "../Components/SectionTitle";

function About() {
  return (
    <motion.div
      className="about"
      key="/"
      initial="hidden"
      animate="show"
      exit="exit"
      transition={{ duration: 2, staggerChildren: 0.15 }}
    >
      <Container style={{ paddingBottom: "5%" }}>
        {/* <SectionTitle title="Get to Know Me" /> */}
        <Row>
          <Col xl={6} lg={6} className="hx-about-content col-hidden">
            <div className="col-about">
              <div className="hx-site-title">
                <motion.div key="section-title" variants={slideInLeft}>
                  <span>Expert Web Developer & Designer</span>
                  <h2 className="section-title">Get to Know Me</h2>
                </motion.div>
              </div>
              <motion.div key="text" variants={slideInLeft}>
                <p className="about-Text">
                  I'm a first-generation Mexican American graduate with a unique
                  blend of expertise in both computer science and psychology,
                  holding a Bachelor's degree in both fields. With over six
                  years of experience in the industry, I bring a deep
                  understanding of user behavior and cognitive processes to my
                  work, allowing me to craft user-centric and intuitive web
                  experiences.
                </p>
                <p className="about-Text">
                  My technical background in computer science equips me with the
                  skills to turn creative designs into functional and responsive
                  web applications. I thrive on staying at the forefront of
                  emerging web technologies, ensuring that the websites I build
                  are not only aesthetically pleasing but also perform
                  flawlessly across various platforms and devices. My passion
                  for creating seamless digital experiences is driven by a
                  commitment to bridging the gap between technology and human
                  psychology, resulting in websites that engage and delight
                  users while achieving business goals.
                </p>
                <p className="about-Text">
                  I'm passionate about staying on the cutting edge of web
                  development, embracing new challenges, and collaborating in
                  dynamic environments. Feel free to review my work and reach
                  out to me in the contact page.
                </p>
              </motion.div>
              <motion.div key="btns" variants={slideInLeft} className="btns">
                <Button variant="outline-light" href="/Contact">
                  Contact Me
                </Button>
              </motion.div>
            </div>
          </Col>
          <Col className="col-img" lg={6} xl={6}>
            <motion.div key="hx-about-img" variants={slideInRight}>
              <div className="hx-about-img">
                {/* <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  src={AboutPhoto}
                /> */}
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default About;
