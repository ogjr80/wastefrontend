/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from "react-router-dom";
import logo from "../logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
      <div className="container">
        <a
          className="navbar-brand logo"
          href="/"
          style={{
            background: 'url("assets/img/Untitleddesign.png") no-repeat',
            backgroundSize: "auto",
            width: "90px",
            height: "75px",
          }}
        />

        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-1"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">
                services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products">
                products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/subscription">
                SUBSCRIPTION
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contactus">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">
                login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/registration">
                registration
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
