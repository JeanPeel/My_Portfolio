import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function NavBar() {

    return (

        <nav class="navbar navbar_menu nav_bar">
            <div class="container-fluid">

                <div class="navbar-header">
                    <a class="navbar-brand navbarBrand" href="/">Jean Peel</a>
                </div>
                <a class="nav_item" href="/">Home</a>
                <a class="nav_item" href="/about">About</a>
                <a class="nav_item" href="/portfolio">Portfolio</a>
                <a class="nav_item" href="/resume">Resume</a>
                <a class="nav_item" href="/blog">Blog</a>
                <a class="nav_item" href="/connect">Connect</a>

                <div class="input-group mb-3 search_style">
                    <input type="text" class="form-control form_fix " placeholder="Search" />
                        <div class="input-group-append">
                            <button class="btn btn-success" type="submit">Go</button>
                        </div>
                </div>
           </div>
        </nav>

    );
}

export default NavBar;