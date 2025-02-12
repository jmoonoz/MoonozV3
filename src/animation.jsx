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
    initial: {
      y: "200%",
    },
    show: {
      y: 0,
      transition: {
        delay: 0.5,
        duration: 1.2,
        ease: [0.33, 1, 0.68, 1],
      },
    },
    exit: {
      y: "-100vh",
      transition: {
        duration: .03,
        ease: [0.33, 1, 0.68, 1],
      },
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
  