import React from "react";
import "./style.css";

function Footer() {

    return (

        <nav className="navbar navbar_menu footer_bar">
            <div className="container-fluid">
                <a className="footer_item" href="/sitemap">Site Map</a>
                <a className="footer_item" href="/copyright">&copy; Copyright</a>
                <a className="footer_item" href="/contact">Contact Jean Peel</a>
            </div>
        </nav>

    );
}

export default Footer;