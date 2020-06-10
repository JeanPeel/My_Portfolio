import React from "react";
import "./style.css";
import logoC from '../images/logoC.png'

function NavBar() {

    return (
        <div>
        <nav className="navbar navbar_menu nav_bar">
            <div className="container-fluid">

                <div className="navbar-header">
                    <a className="navbar-brand navbar_brand" href="/"><img src={logoC} alt="logo" className="logo" />Jean Peel</a>
                </div>
                <a className="bar_item" href="/jeanpeel">Home</a>
                <a className="bar_item" href="/about">About</a>
                <a className="bar_item" href="/portfolio">Portfolio</a>
                <a className="bar_item" href="/resume">Resume</a>
                <a className="bar_item" href="/blog">Blog</a>
                <a className="bar_item" href="/connect">Connect</a>

                {/* <div className="input-group mb-3 search_style">
                    <input type="text" className="form-control form_fix " placeholder="Search" />
                    <div className="input-group-append">
                        <button className="btn btn-info" type="submit">Go</button>
                    </div>
                </div> */}
                <ul className="navbar-nav main_drop_style">
                    <li className="nav-item dropdown drop_style">
                        <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Menu
                            </a>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="/jeanpeel">Home</a>
                            <a className="dropdown-item" href="/about">About</a>
                            <a className="dropdown-item" href="/portfolio">Portfolio</a>
                            <a className="dropdown-item" href="/resume">Resume</a>
                            <a className="dropdown-item" href="/blog">Blog</a>
                            <a className="dropdown-item" href="/connect">Connect</a>
                        </div>
                    </li>
                </ul>

            </div>
        </nav>
        </div>
    );
}

export default NavBar;