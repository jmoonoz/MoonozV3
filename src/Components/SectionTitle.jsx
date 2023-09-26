import React from "react";
import { motion } from "framer-motion";
import { fadeInOut } from "../animation";

function SectionTitle({ title }) {
  return (
    <div className="section-header d-flex justify-content-center">
      <motion.h2 variants={fadeInOut}>
        {title}
      </motion.h2>
    </div>
  );
}

export default SectionTitle;
