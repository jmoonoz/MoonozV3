import { v4 as uuidv4 } from "uuid";
import PortfolioV1 from "../Images/portfolioV1.png";
import PortfolioV2 from "../Images/PortfolioV2.png";
import ToaStrength from "../Images/ToaStrength.png"


const projects = [
  {
    id: uuidv4(),
    name: "Portfolio App V1",
    desc: "My first Personal portfolio application, ",
    img: PortfolioV1,
    tools: ["React", "JS", "CSS", "HTML", "Bootstrap"],
  },
  {
    id: uuidv4(),
    name: "Portfolio Web App V2",
    desc: "My revamp round attempt at creating a personal portfolio online.",
    img: PortfolioV2,
    tools: ["React", "Photoshop", "CSS3", "HTML5", "Bootstrap5"],
  },
  {
    id: uuidv4(),
    name: "Toa Strength",
    desc: "Website build for a well recongized local high school strength training program",
    img: ToaStrength,
    tools: ["WordPress", "Photoshop", "css", "html"],
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc: "A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.",
    img: PortfolioV1,
    tools: ["react", "js", "css", "html"],
  },
  {
    id: uuidv4(),
    name: "Tracking Soft",
    desc: "A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.",
    img: PortfolioV1,
    tools: ["react", "js", "css", "html"],
  },
];

export default projects;
