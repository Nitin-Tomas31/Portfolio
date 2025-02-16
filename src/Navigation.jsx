import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Image } from 'react-bootstrap'
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Navbar Example</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div className="container-fluid">
        {/* Logo */}
            <a className="navbar-brand d-flex align-items-center" href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
                width={50}
                height={50}
                className="d-inline-block align-text-top me-1"
                style={{ color: 'white' }}
              />
             
            </a>
            {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Centered Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-center mx-auto gap-4"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto gap-4 fw-semibold">
            <li className="nav-item">
              <a className="nav-link active" href="#about">
                About Me   
              </a>
             
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills   
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#works">
                My Works   
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* Bootstrap JS (for navbar toggling) */}
  </>
  
  )
}

export default Navigation
