import React from "react";
import logo from "../../logo.svg";
import "./navbar.scss";

export default function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar">
        <img src={logo} alt="city-tours"></img>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Tours
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}
