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
                                    <p className='profile_text'>  <div className='text1'>In my pursuit of expanding my knowledge, I am looking for Web Developer work experience. As a bootcamp
                                    graduate with UX/UI layout and design experience, I believe that I can bring valuable contributions to the
                                    work environment. The attached resume details my experience and training. Here are some highlights,
                                    trained in Web Development, experience in Project Management, Layout and Design experience as a Blogger/
                                    Activist, and Online Collaboration and Networking experience as a Home Educator.
                                        <div className='dots1'><a href="/about" className="link"> ... Click to Read More</a></div>
                                    </div>
                                        <div className='text2'>I have a lot to offer working as a Developer. Beyond my enthusiasm and dedication, I enjoyed learning about
                                        responsive design, UX/ UI layout, and dynamic web applications using React. I also learned enough back end
                                        structure to develop and deploy simple web applications. This gives me a good foundation to build on and learn
                                        the specific skills I will need in my next Web Development work experience
                                    <div className='dots2'><a href="/about" className="link"> ... Click to Read More</a></div>
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
                                    <a href="https://github.com/JeanPeel/my_portfolio" target="_blank" className="thumbnail_div">
                                        <img src={myPortfolio} alt="My Portfolio" className="thumbnail" id='image1' /> </a>
                                    
                                    <a href="https://github.com/JeanPeel/A-Google-Book-App" target="_blank" className="thumbnail_div">
                                        <img src={googleBook} alt="Google Book Search App" className="thumbnail" id='image2' /> </a>
                                        
                                </div>
                                <div className='gallery_row row2'>
                                    <a href="https://github.com/swazeyjessup/project-3" target="_blank" className="thumbnail_div">
                                        <img src={habitTracker} alt="Habit Tracker" className="thumbnail" id='image3' /> </a>
                                        <div className='see_more1'><a href="/portfolio" className="link"> ... Click to See More</a></div>
                                    <a href="https://dry-journey-46038.herokuapp.com/" target="_blank" className="thumbnail_div">
                                        <img src={phaserGame} alt="Phaser Game" className="thumbnail" id='image4' /> </a>

                                </div>
                                <div className='see_more2'><a href="/portfolio" className="link"> ... Click to See More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='centering'>
                    <div className="inline_contact">Contact<a href="/connect" className="jp_link">  Jean Peel</a></div>
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
                                        <div id="about-me" className="d-flex justify-content-center"><a href="/blog" >Interesting Stuff About Me</a></div>
                                        <div id="about-me" className="d-flex justify-content-center">Date: Jan 11th, 2020</div><br />

                                        <div className='profile_text'>

                                            <p className='blog_text'>For me a good day starts with coffee. A better day starts after a full nights sleep. I have been working from home on and off for about 20 years. I just finished managing two major home remodels that were profitable.</p>

                                            <p className='blog_text'>I have been married for 23 years... We have four kids, two daughters and two sons...</p>

                                            <p className='blog_text'>I volunteer in a meet up community as an activities committee member. Besides coding, blogging and social media, I like to hang out with friends, garden, draw, bake, play board games, listen to music, go out in nature, and hang out with my husband and kids...</p>

                                            <div className="d-flex justify-content-center"><a href="/blog" >... Read More Blog</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="media_div2">
                            <div className='header_div'>
                                <h1>Resume Summary</h1>
                            </div>
                            <div className=''>
                                <ul>
                                    <h5>Skills</h5>
                                    {/* <li> Communication</li> */}
                                    <li>
                                        Cross-party Collaboration</li>
                                    <li>
                                        Project Management</li>
                                    {/* <li>
                                        Planning and Coordination</li> */}
                                    {/* <li>
                                        Team Building</li> */}
                                    <li>
                                        UX UI Design</li>
                                    {/* <li>
                                        Visual Product Development</li> */}
                                    <li>
                                        Brand Development</li>
                                    {/* <li>
                                        Inventiveness</li> */}
                                    <li>
                                        Proactive Problem Solving</li>
                     
                                    <br />
                                    <h5>Full Stack Web Development</h5>
                                    <li>git</li>
                                    <li> html</li>
                                    <li>css</li>
                                    <li>javascript</li>
                                    <li> jquery</li>
                                    <li> node</li>
                                    <li> mongoose</li>
                                    <li> heroku</li>
                                    <br />
                                    <h5>Digital Media Hobbyist</h5>
                                    <li>Over 10 years experience as a Web Designer, Blogger, Activists, Artist.</li>
                                </ul>
                                <div className=''><a href="/resume" className="link"> ... Click to Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bottom_spacer'></div>
                <Footer />
            </div >


        );
    }

}

export default Home;