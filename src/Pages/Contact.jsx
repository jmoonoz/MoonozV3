import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      key="/Contact"
      transition={{
        delayChildren: 0.1,
        staggerChildren: 0.3,
        duration: 4,
      }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, duration: 2 }}
        transition={{ duration: 2, transition: { duration: 1 } }}
      >
        contact
      </motion.h2>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, ease: "easeInOut", transition: { duration: 1 } }}
        transition={{ duration: 3 }}
      >
        contact
      </motion.h2>
    </motion.div>
  );
}

export default Contact;
