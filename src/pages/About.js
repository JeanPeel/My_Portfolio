import React, { Component } from "react";
// import axios from 'axios';
import "./style.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class About extends Component {
    // state = {}

    // componentDidMount () {
    //     axios
    // }

    render() {
        return (
            <div className="page_body">
                <NavBar />
                <div className='top_spacer'></div>
                <h1>About</h1>
                <div className='text_style'>
                    <h6>Prow scuttle parrel  <a href="#" className="link"> Sail ho shrouds </a> spirits boom</h6>
                </div>
                <div className='bottom_spacer'></div>
                <Footer />
            </div>
        );
    }

}

export default About;