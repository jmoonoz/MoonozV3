import { v4 as uuidv4 } from "uuid";
import PortfolioV1 from "../Images/portfolioV1.png";
import PortfolioV2 from "../Images/PortfolioV2.png";
import ToaStrength from "../Images/ToaStrength.png";
import Gonz from "../Images/gonz9.png";

const projects = [
  {
    id: uuidv4(),
    name: "Portfolio App V1",
    desc: "My first Personal portfolio application, ",
    link: "https://dreamy-mccarthy-16d697.netlify.app/",
    linkName: "Moonoz V1",
    img: PortfolioV1,
    tools: ["React", "JS", "CSS", "HTML", "Bootstrap"],
  },
  {
    id: uuidv4(),
    name: "Portfolio Web App V2",
    desc: "My revamp round attempt at creating a personal portfolio online.",
    link: "www.moonoz.co",
    linkName: "Moonoz V2",
    img: PortfolioV2,
    tools: ["React", "Photoshop", "CSS3", "HTML5", "Bootstrap5"],
  },
  {
    id: uuidv4(),
    name: "Toa Strength",
    desc: "Website build for a well recongized local high school strength training program",
    link: "https://www.toastrength.org/",
    linkName: "Toa Strength",
    img: ToaStrength,
    tools: ["WordPress", "Photoshop", "css", "html"],
  },
  {
    id: uuidv4(),
    name: "Gonz 9 Training",
    desc: "Designed and developed a professional website for a gym trainer using Wix Studio. The site features a sleek, modern layout with an intuitive navigation system, service offerings, client testimonials, and a contact form for easy booking. Implemented custom styling and animations to enhance user experience, ensuring a responsive and visually engaging design.",
    link: "https://www.gonz9training.com/",
    linkName: "Gonz9training",
    img: Gonz,
    tools: ["wix", "photoshop", "lightroom"],
  },
];

export default projects;
