export const slideInLeft = {
    hidden: { x: "-120%", filter: "blur(5px)" },
    show: {
      x: 0,
      filter: "blur(0px)",
      ease: "easeInOut",
      transition: { duration: 1.4 },
    },
    exit: {
      x: "-120%",
      filter: "blur(5px)",
      ease: "easeOut",
      transition: { duration: 3 },
    },
  };
  export const slideInRight = {
    hidden: { x: "300%", filter: "blur(5px)" },
    show: {
      x: 0,
      filter: "blur(0px)",
      ease: "easeIn",
      transition: { delay: 0.1, duration: 1, ease: "easeInOut" },
    },
    exit: {
      x: "400%",
      filter: "blur(5px)",
      ease: "easeOut",
      transition: { duration: 3 },
    },
  };
  export const slideUp = {
    hidden: { y: "100%", filter: "blur(5px)" },
    show: {
      y: 0,
      filter: "blur(0px)",
      ease: "easeIn",
      transition: { duration: 3 },
    },
    exit: {
      y: "-100%",
      filter: "blur(5px)",
      ease: "easeOut",
      transition: { duration: 3 },
    },
  };
  
  export const fadeInOut = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      ease: "easeInOut",
      transition: { duration: 1 },
    },
    exit: { opacity: 0, ease: "easeInOut", transition: { duration: 1 } },
  };
  