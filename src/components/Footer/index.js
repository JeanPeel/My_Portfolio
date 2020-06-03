import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Footer() {

    return (

        <nav class="navbar navbar_menu footer_bar">
            <div class="container-fluid">
                <a class="nav_item" href="/sitemap">Site Map</a>
                <a class="nav_item" href="/copyright">&copy; Copyright</a>
                <a class="nav_item" href="/contact">Contact Jean Peel</a>

           </div>
        </nav>

    );
}

export default Footer;