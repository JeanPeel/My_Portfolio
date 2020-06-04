import React from "react";
import "./style.css";


function NavBar() {

    return (
        <div>
            <nav class="navbar navbar_menu nav_bar">
                <div class="container-fluid">

                    <div class="navbar-header">
                        <a class="navbar-brand navbar_brand" href="/">Jean Peel</a>
                    </div>
                    <a class="bar_item" href="/">Home</a>
                    <a class="bar_item" href="/about">About</a>
                    <a class="bar_item" href="/portfolio">Portfolio</a>
                    <a class="bar_item" href="/resume">Resume</a>
                    <a class="bar_item" href="/blog">Blog</a>
                    <a class="bar_item" href="/connect">Connect</a>

                    <div class="input-group mb-3 search_style">
                        <input type="text" class="form-control form_fix " placeholder="Search" />
                        <div class="input-group-append">
                            <button class="btn btn-success" type="submit">Go</button>
                        </div>
                    </div>

                    <ul class="navbar-nav main_drop_style">
                        <li class="nav-item dropdown drop_style">
                            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Menu
                                </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Link 1</a>
                                <a class="dropdown-item" href="#">Link 2</a>
                                <a class="dropdown-item" href="#">Link 3</a>
                            </div>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>

    );
}

export default NavBar;