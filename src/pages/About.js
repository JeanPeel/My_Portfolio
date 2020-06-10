import React, { Component } from "react";
// import axios from 'axios';
import "./style.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import goodCoffee2 from "../components/images/goodCoffee2.jpg"
import profilepic from "../components/images/profilepic.jpg"


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
                <div className='text_style'>
                    <div className='header_div'>
                        <h1>About <i>Jean Peel</i></h1>
                    </div>
                    <div className='image_div2'><img src={profilepic} alt="Candid Photo" className="blog_pic" /></div>
                    <div className='blog_text'>
                        <br />
                        <p>
                            In pursuit of expanding my knowledge, I am looking for Web Developer work experience. As a bootcamp
                            graduate with UX/UI layout and design experience, I believe that I can bring valuable contributions to the coding
                            work environment. The attached resume details my extensive experience and training. Here are some highlights,
                            trained in Web Development, experience in Project Management, Layout and Design experience as a Blogger/
                            Activist, and online collaboration and networking experience as a Home Educator.</p>
                        <p>
                            I have a lot to offer working as a Developer. Beyond my enthusiasm and dedication, I enjoyed learning about
                            responsive design, UX/ UI layout, and dynamic web applications using React. I also learned enough back end
                            structure to develop and deploy simple web applications. This gives me a good foundation to build on and learn
                            the specific skills I will need in my next Web Development work experience.</p>
                        <p>
                            Identifying innovative approaches, and improved solutions to business challenges, both motivate and drive me.
                            With experience as a Remodel Project Manager, working for myself, I gained valuable expertise in Project
                            Planning, while further developing my Negotiation and Supervisor skills working with Contractors. This project
                            profited more than three real estate professionals estimated it would. These impressive results came from my
                            detail oriented and focused effort on quality outcomes. I am positive I would quickly contribute to the continued
                            success of the next company I work for.</p>
                        <p>
                            Formerly in my role as a Blogger I gained a lot of experience in layout and design. I have developed, almost an
                            intuition, for what layouts and navigation patterns will be pleasing and useful for users. I worked on branding for
                            my blog and for other organizations I networked with as an activist. I planned, organized and timed social media
                            campaigns to capture as much website traffic as possible. This experience will help me produce quality digital
                            applications for user experiences and improved engagement.</p>
                        <p>
                            With my experience as a Home Educator, I gained valuable experience in online networking and collaboration. I
                            connected and planned with other Home Educators and Online Learning Resources in order to enhance my
                            teaching plans. I am a team player who is always searching for opportunities to combine efforts with other skilled
                            people. With these qualities, I am able to facilitate positive growth and improve outcomes.</p>
                        <p>
                            After reviewing my resume I hope you will agree that I am the type of competent competitive candidate you are
                            looking for. I am confident I have value to offer your company in my training, experience, and skills as a Bootcamp
                            Graduate, Project Manager, Blogger, and Educator. I look forward to elaborating on how my specific skills and
                            abilities will benefit your organization. <a href="/connect" className="">Please contact me via email, or other options</a> posted on my contact page to arrange for a convenient meeting
                            time.</p>
                        <p>
                            Thank you for your consideration and I look forward to hearing from you soon.
</p>
                        <p>
                            Sincerely, Jean Peel
                        </p>
                    </div>

                    <br />
                    <div className='bottom_spacer'></div>
                </div>
                <Footer />
            </div>
        );
    }

}

export default About;