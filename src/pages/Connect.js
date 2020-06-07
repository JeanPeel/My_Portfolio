import React, { Component } from "react";
// import axios from 'axios';
// import "./style.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import goodCoffee2 from "../components/images/goodCoffee2.jpg"

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
                    <div>
                    <div className='header_div'>
                        <h1>Email Jean Peel</h1>
                    </div>
                        <form>
                            Name<br />
                            <input type="text" name="Name" class="contact-form" id="name" /><br />
                                    Email<br />
                            <input type="text" name="Email" class="contact-form" id="email" /><br />
                                            Message<br />
                            <textarea name="message" rows="10" cols="30" class="contact-form" >
                            </textarea><br />
                            <button type="button" class="btn btn-info">Submit</button>
                        </form>
                    </div>
                    <div className='header_div'>
                        <h1></h1>
                    </div>
                    <div>
                    <div className='image_div2'><img src={goodCoffee2} alt="Candid Photo" className="blog_pic" /></div>
                            <br />
                            <div id="about-me" className="d-flex justify-content-center"><a href="#" ></a></div>
                            <div id="about-me" className="d-flex justify-content-center"></div><br />
                        <div className="d-flex flex-row-reverse more"><a href="#" ></a></div>
                        <br />
                    </div>
                    <div className='bottom_spacer'></div>
                </div>
                <Footer />
            </div>
        );
    }

}

export default Connect;