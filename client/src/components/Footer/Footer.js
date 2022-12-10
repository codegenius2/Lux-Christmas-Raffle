import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section className="footer-mint">
        <span>Join us on our social network</span>
        <div className="icons-container">
          
          <a href="https://discord.com/invite/YbnVGG3JdP" rel="noreferrer" target={"_blank"}>
            <FontAwesomeIcon icon={faDiscord} className="icons-socials" />
          </a>
          <a href="https://www.instagram.com/luxresorts/" rel="noreferrer" target={"_blank"}>
            <FontAwesomeIcon icon={faInstagram} className="icons-socials" />
          </a>
          
        </div>
      </section>
      <section className="copyright-container">
        <p className="copyright-text">
          Copyright © 2022 LUX* All rights reserved
        </p>
      </section>
    </footer>
  );
}

export default Footer;
