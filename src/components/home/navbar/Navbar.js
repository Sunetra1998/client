import React from "react";
import "./Navbar.css";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://www.expertia.ai/expertiaLogotext.png"
              alt="expertia"
              width="250px"
              height="50px"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Solutions
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <Popup
                  trigger={
                    <button
                      class="nav-link active signup-btn"
                      aria-current="page"
                      href="#"
                    >
                      SignUp
                    </button>
                  }
                  position="right center"
                >
                  <div className="signup-container">
                    <div className="great">
                      Great!
                      <br />
                      <h4>
                        What are
                        <br />
                        you looking for?
                      </h4>
                    </div>

                    <Link to="/hire" className="link">
                      <button className="btn hire-btn">To Hire</button>
                    </Link>

                    <Link to="/apply" className="link">
                      <button className="btn apply-btn">To Apply</button>
                    </Link>
                    <a className="already-account" href="#">
                      I already have an account
                    </a>
                  </div>
                </Popup>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
