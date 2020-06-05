import React from "react";
import "./style.css";


function NavBTN() {

    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark nav_btn">
      
        <a className="navbar-brand" href="#">Jean Peel</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav_item" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav_item" href="/about">About</a>
            </li>
            <li className="nav-item">
            <a className="nav_item" href="/portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
            <a className="nav_item" href="/resume">Resume</a>
            </li>
            <li className="nav-item">
            <a className="nav_item" href="/blog">Blog</a>
            </li>
            <li className="nav-item">
            <a className="nav_item" href="/connect">Connect</a>
            </li>
            </ul>
        </div>
        </nav>
    );
}

export default NavBTN;