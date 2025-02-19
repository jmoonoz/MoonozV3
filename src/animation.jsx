const ENTERCONTACTDURATION = .9;
const EXITCONTACTDURATION = 0.7;
const CONTACTEASE = [0.33, 1, 0.68, 1];

export const slideInLeft = {
  hidden: { x: "-400%", filter: "blur(5px)" },
  show: {
    x: 0,
    filter: "blur(0px)",
    transition: { duration: ENTERCONTACTDURATION },
    ease: CONTACTEASE,
  },
  exit: {
    x: "-400%",
    filter: "blur(5px)",
    transition: { duration: EXITCONTACTDURATION },
    ease: CONTACTEASE,
  },
};

export const slideInRight = {
  hidden: { x: "300%", filter: "blur(5px)" },
  show: {
    x: 0,
    filter: "blur(0px)",
    ease: CONTACTEASE,
    transition: { delay: 0.1, duration: ENTERCONTACTDURATION },
  },
  exit: {
    x: "400%",
    filter: "blur(5px)",
    transition: { duration: EXITCONTACTDURATION },
    ease: CONTACTEASE,
  },
};

export const slideUp = {
  hidden: {
    y: "100%",
    filter: "blur(5px)",
  },
  show: {
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: ENTERCONTACTDURATION,
      ease: CONTACTEASE,
    },
  },
  exit: {
    y: "100%",
    filter: "blur(5px)",
    transition: {
      duration: EXITCONTACTDURATION,
      ease: CONTACTEASE,
    },
  },
};

export const fadeInOut = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    // ease: "easeInOut",
    transition: { duration: 1 },
  },
  exit: { opacity: 0, transition: { duration: 1 } },
};

// export const textSlideUp = {
//   initial: { y: "100%", rotate: "-9deg" },
//   show: {
//     y: 0,
//     rotate: "0deg",
//     transition: {
//       duration: 1.8,
//       type: "spring",
//       delay: 0.01 * i,
//       ease: [0.12, 0, 0.39, 0],
//     },
//   },
//   exit: {
//     y: "100%",
//     rotate: "-9deg",
//     transition: {
//       duration: 0.9,
//       // type: "spring",
//       delay: STAGGER * i,
//       ease: [0.12, 0, 0.39, 0],
//     },
//   },
// };

// home img fade in
export const imgFadein = {
  hidden: { y: 10, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.9,
      duration: 0.4,
      ease: "easeIn",
    },
  },
  exit: { y: 10, opacity: 0 },
};
