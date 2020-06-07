import React, { Component } from "react";
import axios from 'axios';
import "./style.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import googleBook from "../components/images/googleBook.png"
import arxiPaints from "../components/images/arxiPaints.png"
import cssPlay from "../components/images/cssPlay.png"
import gemGame from "../components/images/gemGame.png"
import sterlo from "../components/images/sterlo.png"
import toDoApp from "../components/images/toDoApp.png"
import typingGame from "../components/images/typingGame.png"
// import photo from "../components/images/photo.png"
import habitTracker from "../components/images/habitTracker.png"
import phaserGame from "../components/images/phaserGame.png"
import myPortfolio from "../components/images/myPortfolio.png"


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

                            <a href="https://github.com/JeanPeel/my_portfolio" target="_blank" className="container">
                                <img src={myPortfolio} alt="My Portfolio" className="port-img" />
                                <button type="button" className="btn">My Portfolio</button>
                            </a>

                            <a href="https://github.com/JeanPeel/A-Google-Book-App" target="_blank" className="container">
                                <img src={googleBook} alt="Google Book Search App" className="port-img" />
                                <button type="button" className="btn">Google Book App</button>
                            </a>

                            <a href="https://github.com/swazeyjessup/project-3" target="_blank" className="container">
                                <img src={habitTracker} alt="Habit Tracker" className="port-img" />
                                <button type="button" className="btn">Habit Tracker</button>
                            </a>

                            <a href="https://dry-journey-46038.herokuapp.com/" target="_blank" className="container">
                                <img src={phaserGame} alt="Phaser Game" className="port-img" />
                                <button type="button" className="btn">Phaser Game</button>
                            </a>

                            <a href="https://github.com/JeanPeel/Arxi" target="_blank" className="container">
                                <img src={arxiPaints} alt="Arxi Art Portfolio" className="port-img" />
                                <button type="button" className="btn">Arxi Art Portfolio</button>
                            </a>

                            <a href="https://github.com/JeanPeel/Sterlo" target="_blank" className="container">
                                <img src={sterlo} alt="Sterlo's Art Portfolio" className="port-img" />
                                <button type="button" className="btn">Sterlo's Portfolio</button>
                            </a>

                            <a href="https://github.com/JeanPeel/Project-1" target="_blank" className="container">
                                <img src={toDoApp} alt="To Do List" className="port-img" />
                                <button type="button" className="btn">To Do List</button>
                            </a>

                            <a href="https://github.com/JeanPeel/unit-4-game" target="_blank" className="container">
                                <img src={gemGame} alt="Gem Collector" className="port-img" />
                                <button type="button" className="btn">Gem Collector</button>
                            </a>

                            <a href="https://github.com/JeanPeel/Psychic-Game" target="_blank" className="container">
                                <img src={typingGame} alt="Psychic Game" className="port-img" />
                                <button type="button" className="btn">Psychic Game</button>
                            </a>

                            <a href="https://github.com/JeanPeel/gh-pages-demo" target="_blank" className="container port_bottom">
                                <img src={cssPlay} alt="CSS Play" className="port-img " />
                                <button type="button" className="btn">CSS Play</button>
                            </a>

                            {/* <div className="container">
                                <img src={photo} alt="Trivia Game" className="port-img" />
                                <button onclick="location.href='https://github.com/JeanPeel/TriviaGame'" type="button" className="btn">Trivia Game</button>
                            </div>

                            <div className="container">
                                <img src={photo} alt="AJAX Giphy Search" className="port-img" />
                                <button onclick="location.href='https://github.com/JeanPeel/Giphy-AJAX'" type="button" className="btn">AJAX Giphy Search</button>
                            </div>

                            <div className="container">
                                <img src={photo} alt="Train Scheduler" className="port-img" />
                                <button onclick="location.href='https://github.com/JeanPeel/TrainScheduler'" type="button" className="btn">Train Scheduler</button>
                            </div>

                            <div className="container port_bottom">
                                <img src={photo} alt="Flex Box" className="port-img" />
                                <button onclick="location.href='https://github.com/JeanPeel/flex-box-mmtuts'" type="button" className="btn">Flex Box</button>
                            </div> */}

                        </div>

                    </div>



                </div>
                <Footer />
            </div>
        );
    }

}

export default Portfolio;