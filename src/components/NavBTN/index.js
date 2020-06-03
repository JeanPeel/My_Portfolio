import React from "react";
import "./style.css";


function NavBTN() {

    return (
        <nav class="navbar navbar-expand-md bg-dark navbar-dark nav_btn">
      
        <a class="navbar-brand" href="#">Jean Peel</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav_item" href="/">Home</a>
            </li>
            <li class="nav-item">
            <a class="nav_item" href="/about">About</a>
            </li>
            <li class="nav-item">
            <a class="nav_item" href="/portfolio">Portfolio</a>
            </li>
            <li class="nav-item">
            <a class="nav_item" href="/resume">Resume</a>
            </li>
            <li class="nav-item">
            <a class="nav_item" href="/blog">Blog</a>
            </li>
            <li class="nav-item">
            <a class="nav_item" href="/connect">Connect</a>
            </li>
            </ul>
        </div>
        </nav>
    );
}

export default NavBTN;