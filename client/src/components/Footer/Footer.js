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
        <span>Rejoignez nous sur nos réseaux !</span>
        <div className="icons-container">
          <a href="mailto:luxresort@metalyde.com"> 
            <FontAwesomeIcon icon={faEnvelope} className="icons-socials" />
          </a>
          <a href="https://discord.com/invite/YbnVGG3JdP" target={"_blank"}>
            <FontAwesomeIcon icon={faDiscord} className="icons-socials" />
          </a>
          <a href="https://www.instagram.com/luxresorts/" target={"_blank"}>
            <FontAwesomeIcon icon={faInstagram} className="icons-socials" />
          </a>
          <a href="https://www.facebook.com/luxresorts/" target={"_blank"}>
            <FontAwesomeIcon icon={faFacebook} className="icons-socials" />
          </a>
        </div>
      </section>
      <section className="copyright-container">
        <p className="copyright-text">
          Copyright © 2022 LUX* Tous droits réservés
        </p>
      </section>
    </footer>
  );
}

export default Footer;
