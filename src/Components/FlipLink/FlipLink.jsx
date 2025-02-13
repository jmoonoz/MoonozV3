import React from "react";
import "./flipLink.scss";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

function FlipLink({ children, href }) {
  console.log(children);
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="flipLink"
      href={href}
    >
      {/* first set of text */}
      <div className="firstSet">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-200%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      {/* second set of text */}
      <div className="secondSet">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "200%",
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
