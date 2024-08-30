import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const isDarkMode = props.mystyle.color === 'black';

  return (
    <>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: isDarkMode ? '#343a40' : '#f8f9fa',
          color: isDarkMode ? 'white' : 'black',
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              color: isDarkMode ? 'white' : 'black',
            }}
          >
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{
                backgroundColor: isDarkMode ? 'white' : 'black',
              }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: isDarkMode ? 'white' : 'black' }}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: isDarkMode ? 'white' : 'black' }}>
                  About
                </Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onChange={props.togglestyle}
                checked={isDarkMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
                style={{
                  color: isDarkMode ? 'black' : 'white', // Button text color
                }}
              >
                {props.btntext}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
