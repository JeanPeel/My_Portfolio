import React, { Component } from "react";
// import axios from 'axios';
import "./style.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import goodCoffee2 from "../components/images/goodCoffee2.jpg"

class Blog extends Component {
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
                    <div className='header_div'>
                        <h1>Blog</h1>
                    </div>
                    <div>
                        <div className='image_div2'><img src={goodCoffee2} alt="Candid Photo" className="blog_pic" /></div>
                        <br />
                        <div id="about-me" className="d-flex justify-content-center"><h5>Interesting Stuff About Me</h5></div>
                        <div id="about-me" className="d-flex justify-content-center">Date: Jan 11th, 2020</div><br />
                        <div className='blog_text'>
                            <p>
                                For me a good day starts with coffee.  A better day starts after a full nights sleep.  I have been working from home on and off for about 20 years.  I just finished managing two major home remodels that were profitable.
                        </p>

                            <p>
                                I have been married for 23 years.  My husband works in telephone engineering and design.  He likes to mod Nerf guns for fun, when he has the time.  We have four kids, two daughters and two sons.
                        </p>

                            <p>
                                My 20 year old daughter is working on her Associate's of Science.  She DM's a large DnD group at my house every week.
                        </p>

                            <p>
                                My 17 year old daughter is the Vice President for her Senior Class Student Body Officers.  She is learning Python and is an excellent artist.
                        </p>

                            <p>
                                My 14 year old son is a Student Body Officer for his Freshman class.  He plays the Bass in his School Rock Band.
                        </p>
                            <p>
                                My 9 year old son is enjoying his class with "Making Tracks Earth Education" where he learns wilderness survival & nature skills.  He is asking for a drum set for Christmas.
                        </p>

                            <p>
                                I volunteer in a meet up community as an activities committee member.  Besides coding, blogging and social media, I like to hang out with friends, garden, draw, bake, play board games, listen to music, go out in nature, and hang out with my husband and kids.
                        </p>
                        </div>
                     

                        <br />
                    </div>
                    <div className='bottom_spacer'></div>
                </div>
                <Footer />
            </div>
        );
    }

}

export default Blog;