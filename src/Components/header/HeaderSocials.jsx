import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/viraj-hole-96b00a13b/"
        target="blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/virajhole" target="blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/viraj_hole/" target="blank">
        <AiFillInstagram />
      </a>
    </div>
  );
}

export default HeaderSocials;
