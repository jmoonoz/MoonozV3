import React from "react";
import HeroIcon from "./HeroIcon";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
function SocialMenu() {
  return (
    <div className="icon-align social-menu">
      <HeroIcon
        icon={<FaLinkedinIn />}
        link="https://www.linkedin.com/in/moonoz/"
      />
      <HeroIcon icon={<AiFillGithub />} link="https://github.com/jmoonoz" />
      <HeroIcon
        icon={<GrInstagram />}
        link="https://www.instagram.com/moonozdisenoz/"
      />
      <div className="social-line"></div>
    </div>
  );
}

export default SocialMenu;
