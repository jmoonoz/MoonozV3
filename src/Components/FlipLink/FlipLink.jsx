import React from "react";
import "./flipLink.scss";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

function FlipLink({ children, href }) {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="flipLink"
      href={href}
    >
      {/* first set of text */}
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="firstSet"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      {/* second set of text */}
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="secondSet"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
}

export default FlipLink;
