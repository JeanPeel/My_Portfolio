import React, { Component } from "react";
// import axios from 'axios';
import "./style.css";
import "./Home/homeStyle.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import Slides from "../components/Slides";
import profilepic from "../components/images/profilepic.jpg"
import goodCoffee2 from "../components/images/goodCoffee2.jpg"
import photo from "../components/images/photo.png"
import myPortfolio from "../components/images/myPortfolio.png"
import googleBook from "../components/images/googleBook.png"
import habitTracker from "../components/images/habitTracker.png"
import phaserGame from "../components/images/phaserGame.png"

class Home extends Component {
    // state = {}

    // componentDidMount () {
    //     axios
    // }

    render() {
        return (
            <div className="page_body">
                <NavBar />

                <div className='top_spacer'></div>


                <div className='text_style'>
                    <div className='wrapper'>
                        <div className="media_div1">
                            <div className='profile_group'>
                                <div className='header_div'>
                                    <h1>Profile</h1>
                                </div>
                                <div className='profile_div'>
                                    <div className='image_div'><img src={profilepic} alt="Profile Picture" className="profile_pic" /></div>
                                    <p className='profile_text'> Prow scuttle parrel
                                    <a href="#" className="link"> Sail ho shrouds
                                    </a>
                                        <div className='text1'>spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.
                                    <div className='dots1'><a href="#" className="link"> ... Click to Read More</a></div>
                                        </div>
                                        <div className='text2'>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to...
                                    <div className='dots2'><a href="#" className="link"> ... Click to Read More</a></div>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="media_div2">
                            <div className='header_div'>
                                <h1>Portfolio</h1>
                            </div>
                            <div className='gallery_div'>
                                <div className='gallery_row'>
                                    <img src={myPortfolio} alt="photo" className="thumbnail" id='image1' />
                                    <div className='see_more1'><a href="#" className="link"> ... Click to See More</a></div>
                                    <img src={googleBook} alt="photo" className="thumbnail" id='image2' />
                                </div>
                                <div className='gallery_row row2'>
                                    <img src={habitTracker} alt="photo" className="thumbnail" id='image3' />
                                    <img src={phaserGame} alt="photo" className="thumbnail" id='image4' />
                                    <div className='see_more2'><a href="#" className="link"> ... Click to See More</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='centering'>
                    <div className="inline_contact">Contact<a href="#" className="jp_link">  Jean Peel</a></div>
                </div>
                <div className='text_style'>
                    <div className='wrapper'>
                        <div className="media_div1">
                            <div className='profile_group'>
                                <div className='header_div'>
                                    <h1>Featured Blog Post</h1>
                                </div>
                                <div className='image_div2'><img src={goodCoffee2} alt="Candid Photo" className="blog_pic" /></div>
                                <div className='profile_div'>
                                    <div>
                                        <div id="about-me" className="d-flex justify-content-center"><a href="#" >About Me</a></div>
                                        <div id="about-me" className="d-flex justify-content-center">Date: Jan 11th, 2020</div><br />

                                        <div className='profile_text'>

                                            <p className='blog_text'>For me a good day starts with coffee. A better day starts after a full nights sleep. I have been working from home on and off for about 20 years. I just finished managing two major home remodels that were profitable.</p>

                                            <p className='blog_text'>I have been married for 23 years... We have four kids, two daughters and two sons...</p>

                                            <p className='blog_text'>I volunteer in a meet up community as an activities committee member. Besides coding, blogging and social media, I like to hang out with friends, garden, draw, bake, play board games, listen to music, go out in nature, and hang out with my husband and kids...</p>

                                            <div className="d-flex justify-content-center"><a href="#" >... Read More Blog</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="media_div2">
                            <div className='header_div'>
                                <h1>Resume Summary</h1>
                            </div>
                            <div className='gallery_div'>
                                <h6>Prow scuttle parrel  <a href="#" className="link"> Sail ho shrouds </a>spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</h6>
                                <h6>Prow scuttle parrel  <a href="#" className="link"> Sail ho shrouds </a>spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</h6>
                                <div className='dots1'><a href="#" className="link"> ... Click to Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bottom_spacer'></div>
                <Footer />
            </div>


        );
    }

}

export default Home;