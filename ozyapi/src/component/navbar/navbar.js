import React from "react";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              LOGO
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
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link n-padding"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/preferencess">
                    Properties
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/wishlist">
                    Wish List
                  </a>
                </li>
                {props.user.user.admin && (
                  <li className="nav-item">
                    <a className="nav-link" href="/Dashboard">
                      dashboard
                    </a>
                  </li>
                )}
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Contact">
                    Contact
                  </a>
                </li>
                {Object.keys(props.user.user).length != 0 ? (
                  <button
                    className="btn btn-danger"
                    onClick={() => props.handleLogout()}
                  >
                    logout
                  </button>
                ) : (
                  <a href="/home">
                    <button className="btn btn-success">Sign In</button>
                  </a>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
