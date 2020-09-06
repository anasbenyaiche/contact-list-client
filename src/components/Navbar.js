import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <Link to="/">
                Home <span className="sr-only">(</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add-user" className="btn btn-primary">
                {" "}
                Add user{" "}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
