import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  console.log(location)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" href="#">
                Contact us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link" href="#">
                About us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
