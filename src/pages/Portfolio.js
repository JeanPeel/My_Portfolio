import React, { Component } from "react";
import axios from 'axios';
import "./style.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import photo from "../components/images/photo.png"

class Portfolio extends Component {
    // state = {}

    // componentDidMount () {
    //     axios
    // }

    render() {
        return (
            <div className="page_body">
                <NavBar />
                <div className='top_spacer'></div>
                <div className='text_style '>
                    <div className='header_div'>
                        <h1>Portfolio</h1>
                    </div>
                    <div className='gallery_div'>
                        <div class="img-folio ">

                            <div class="container">
                                <img src={photo} alt="Trivia Game" class="port-img" />
                                <button type="button" class="btn">Trivia Game</button>
                            </div>

                            <div class="container">
                                <img src={photo} alt="Rock Paper Scissors" class="port-img" />
                                <button type="button" class="btn">Rock Paper Scissors</button>
                            </div>

                            <div class="container">
                                <img src={photo} alt="Hangman" class="port-img" />
                                <button type="button" class="btn">Hangman</button>
                            </div>

                            <div class="container">
                                <img src={photo} alt="RPG Game" class="port-img" />
                                <button type="button" class="btn">RPG Game</button>
                            </div>

                            <div class="container">
                                <img src={photo} alt="Rutgers Info Widget" class="port-img" />
                                <button type="button" class="btn">Rutgers Info Widget</button>
                            </div>

                            <div class="container port_bottom">
                                <img src={photo} alt="Rutgers Info Widget" class="port-img" />
                                <button type="button" class="btn">Rutgers Info Widget</button>
                            </div>

                        </div>
                    </div>

                    <div className='bottom_spacer'></div>

                </div>
                <Footer />
            </div>
        );
    }

}

export default Portfolio;