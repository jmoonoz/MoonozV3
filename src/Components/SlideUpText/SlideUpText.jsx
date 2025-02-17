import React from "react";
import { motion } from "framer-motion";
import "./slideUpText.scss";

function SlideUpText(prop) {
  const text = prop.children.split("");
  console.log(text);
  const DURATION = 1.8;
  const STAGGER = 0.01;

  return (
    <p>
      {text.map((l, i) => (
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
              delay: STAGGER * i,
              ease: [0.12, 0, 0.39, 0],
            },
          }}
        >
          {l}
        </motion.span>
      ))}
    </p>
  );
}

export default SlideUpText;
