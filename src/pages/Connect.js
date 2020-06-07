import React, { Component } from "react";
// import axios from 'axios';
import "./style.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import goodCoffee2 from "../components/images/goodCoffee2.jpg"
import profilepic from "../components/images/profilepic.jpg"

class Connect extends Component {
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
                        <h1>Connect with<br />Jean Peel</h1>
                    </div>
                    <div className='text_style'>
                        <h6><a href="https://www.linkedin.com/in/jean-peel-b52234198/" className="link_style">LinkedIn</a></h6>
                        <h6><a href="https://github.com/JeanPeel" className="link_style">GitHub</a></h6>
                        <h6><a href="https://twitter.com/peel_jean" className="link_style">Twitter</a></h6>
                        <h6><a href="https://gitlab.com/jean.peel.246" className="link_style">GitLab</a></h6>
                        {/* <h6>Gravatar<a href="https://en.gravatar.com/jeanpeel" className="link_style"></a></h6> */}
                    </div>
                    <div className='header_div padding_top'>
                            <h1>Email Jean Peel</h1>
                        </div>
                        
                    <div className='image_div2'><img src={profilepic} alt="Candid Photo" className="blog_pic" /></div>
                    <div className='form_div'>

<form>
    <div className='form_text'>Name</div>
    <input type="text" name="Name" className="contact-form" id="name" value="Enter your name here..." /><br />
    <div className='form_text'>Email</div>
    <input type="text" name="Email" className="contact-form" id="email" value="Enter your email here..." /><br />
    <div className='form_text'>Message</div>
    <textarea name="Message" rows="10" cols="30" className="contact-form" value="Enter your email message here..." >
    </textarea><br />
    <button type="button" className="btn btn-info">Submit</button>
</form>
</div>
                            <br />
                            <div id="about-me" className="d-flex justify-content-center"></div>
                   
                        <div className='blog_text'>
                        <p className='full_width'>
                            For me a good day starts with coffee.  A better day starts after a full nights sleep.  I have been working from home on and off for about 20 years.  I just finished managing two major home remodels that were profitable.
                           </p>
                        </div>

                    <div className='bottom_spacer'></div>
                </div>
                <Footer />
            </div>
        );
    }

}

export default Connect;