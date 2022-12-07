import React from "react";
import "./TestSelector.css";
import { FaDiscord } from "react-icons/fa";

function TestSelector() {
  return (
    <section>
      <footer className="footer-container">
        <div className="footer-colonne1">
          <div>
            <span className="text-footer-colonne1">
              <a href="mailto:luxresort@metalyde.com">Nous contacter</a>
            </span>
          </div>
          <div>
            <span className="text-footer-colonne1">
              <a href="https://discord.com/invite/YbnVGG3JdP">
                <FaDiscord/>
              </a>
                
                <i class="fa-brands fa-discord"></i>
            </span>
          </div>
          <span className="text-footer-colonne1">
            <div>Copyright © 2022 LUX* Tous droits réservés</div>
          </span>
        </div>
        <div className="footer-colonne2">
          <span className="text-footer-colonne2">
            <a href="https://www.instagram.com/luxresorts/">Instagram</a>
          </span>
          <span className="text-footer-colonne2">
            <a href="https://www.facebook.com/luxresorts/">Facebook</a>
          </span>
        </div>

        <div className="footer-colonne3">
          <div>LUX* RESORTS & HOTELS</div>
        </div>


        {/* <div>
          <ul className="footer-colonne1">
            <li>
              <a href="mailto:luxresort@metalyde.com">Nous contacter</a>
            </li>
            <li>
              <a href="https://discord.com/invite/YbnVGG3JdP">
                Rejoindre notre Discord
              </a>
            </li>
            
          </ul>

          <ul className="footer-colonne2">
            <li>
            <a href="https://www.instagram.com/luxresorts/">Instagram</a>
            </li>
            <li>
            <a href="https://www.facebook.com/luxresorts/">Facebook</a>
            </li>
            <li>Copyright © 2022 LUX* Tous droits réservés</li>
          </ul>
        </div> */}
      </footer>
    </section>
  );
}

export default TestSelector;
