import React, { Component } from "react";
// import axios from 'axios';
import "./style.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import Slides from "../components/Slides";
import profilepic from "../components/images/profilepic.jpg"
import goodCoffee2 from "../components/images/goodCoffee2.jpg"
import photo from "../components/images/photo.png"


class Home extends Component {
    // state = {}

    // componentDidMount () {
    //     axios
    // }

    render() {
        return (
            <div className="page_body">
                <NavBar />

                <div class='top_spacer'></div>


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
                                        <a href="#" class="link"> Sail ho shrouds
                                        </a>
                                        <div className='text1'>spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.
                                        <div className='dots1'><a href="#" class="link"> ... Click to Read More</a></div>
                                        </div>
                                        <div className='text2'>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to...
                                        <div className='dots2'><a href="#" class="link"> ... Click to Read More</a></div>
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
                                    <img src={photo} alt="photo" className="thumbnail" id='image1' />
                                    <div className='see_more1'><a href="#" class="link"> ... Click to See More</a></div>
                                    <img src={photo} alt="photo" className="thumbnail" id='image2' />
                                </div>
                                <div className='gallery_row row2'>
                                    <img src={photo} alt="photo" className="thumbnail" id='image3' />
                                    <img src={photo} alt="photo" className="thumbnail" id='image4' />
                                    <div className='see_more2'><a href="#" class="link"> ... Click to See More</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='centering'>
                    <div className="inline_contact">Contact<a href="#" class="jp_link">  Jean Peel</a></div>
                </div>
                <div className='text_style'>
                    <div className='wrapper'>
                        <div className="media_div1">
                            <div className='profile_group'>
                                <div className='header_div'>
                                    <h1>Featured Blog Post</h1>
                                </div>
                                <div className='profile_div'>
                                    <div className='image_div'><img src={goodCoffee2} alt="Candid Photo" className="profile_pic" /></div>
                                    <p className='profile_text'>  <h6>Prow scuttle parrel  <a href="#" class="link"> Sail ho shrouds </a>spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</h6>

<h6>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.</h6>

<h6>Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.</h6>

<h6>Prow scuttle parrel  <a href="#" class="link"> Sail ho shrouds </a>spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</h6>

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="media_div2">
                            <div className='header_div'>
                                <h1>Resume Summary</h1>
                            </div>
                            <div className='gallery_div'>
                            <h6>Prow scuttle parrel  <a href="#" class="link"> Sail ho shrouds </a>spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</h6>
                            <h6>Prow scuttle parrel  <a href="#" class="link"> Sail ho shrouds </a>spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</h6>
                            <div className='dots1'><a href="#" class="link"> ... Click to Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='bottom_spacer'></div>
                <Footer />
            </div>

        );
    }

}

export default Home;