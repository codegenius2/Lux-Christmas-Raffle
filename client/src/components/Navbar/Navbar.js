import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <section className="navbar-container">
      <a href="/#">
        <svg
          className="logo-lux"
          version="1.1"
          id="Layer_1"
          xmlns="https://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 552 294"
          style={{ fill: "#FFFFFF" }}
        >
          <g>
            <g>
              <path
                d="M314.4,39.1l49.9,69.9l-57.8,82h44.3l35.7-50.8l36.4,50.8h44l-58.3-81.8l49.9-70.1h-44.3l-27.7,38.9l-28-38.9
              H314.4z M165,39.1v93.9c0,36.4,28.2,62.2,67.6,62.2c39.2,0,65.7-27,65.7-66.6V39.1h-40.5v89.7c0,17.9-10.3,29.8-25.9,29.8
              c-17,0-26.3-11.7-26.3-32.6V39.1H165z"
              ></path>
              <polygon points="37.1,39.1 37.1,191.1 147.8,191.1 147.8,150.5 77.6,150.5 77.6,39.1 		"></polygon>
              &lt;
            </g>
            <path
              d="M514.8,47.6 M499.8,47.6L499.8,47.6L499.8,47.6z M535.8,40.2l-21,7.3l0.5-22.2h-16.1l0.5,22.2l-21-7.3l-5,15.3
            l21.3,6.3h0l0,0l-13.4,17.7l13,9.5l12.6-18.3L520,89.1l13-9.5l-13.5-17.7l21.3-6.4L535.8,40.2L535.8,40.2z"
            ></path>
          </g>
        </svg>
      </a>
    </section>
  );
}

export default Navbar;
