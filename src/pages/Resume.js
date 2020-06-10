import React, { Component } from "react";
// import axios from 'axios';
import "./style.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import goodCoffee2 from "../components/images/goodCoffee2.jpg"
import profilepic from "../components/images/profilepic.jpg"
// import { Document, Page } from '../components/images/Jean_Peel_Resume.pdf';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';



class Resume extends Component {



        render()  {
            
            
         
            return (
                <div className="page_body">
                    <NavBar />
                    <div className='top_spacer'></div>
                    <div className='text_style' width='100%'>
                        <div className='header_div'>
                            <h1>Resume</h1>
                        </div>
                 
<div width='100%'>
                        <iframe  src="https://www.yumpu.com/fr/embed/view/4zFYcO6GyTgdumsp" frameborder="0" allowfullscreen="true"  allowtransparency="true"></iframe>

                        </div>
                    </div>
                    <div className='bottom_spacer'></div>
                    <p className='full_width'>
                            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                            ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                   
                           </p>
                    <Footer />
                </div>
            );
        }

    }

    export default Resume;