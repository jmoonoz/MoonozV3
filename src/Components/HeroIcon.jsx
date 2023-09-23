import React from "react";
import { motion } from "framer-motion";

function HeroIcon({ icon, link }) {
  return (
    <a href={link} target="_blank">
      <motion.div
        whileHover={{
          scale: 1.3,
          color: "#da3849",
          y: -8,
          ease: "easeOut",
          transition: { duration: 0.2 },
        }}
        className="hero-icon-item"
      >
        {icon}
      </motion.div>
    </a>
  );
}

export default HeroIcon;
