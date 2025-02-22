import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "./error.scss";

function Error() {
  const DURATION = 1.8;
  const STAGGER = 0.0;
  const errorText = "looks like were lost, lets go bakc home";

  return (
    <Container className="error">
      {errorText.split("").map((p, i) => (
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
          {p}
        </motion.span>
      ))}
    </Container>
  );
}

export default Error;
