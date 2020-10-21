import React from 'react'
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiRuby } from "react-icons/si";
import { SiRails } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";



class About extends React.Component {
    render(){
        return(
            <div className="container" id="about">
                {/* <img width="100px" src={require('../images/cathy.png')} /> */}
                <br/>
                <h3>ABOUT</h3>
                <br/>
                    <p>Brooklyn-based full stack web developer experienced in all technologies below, including React.js and Ruby on Rails.</p> 
                    <br/>
                    <p>
                        <SiReact size={30}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <SiJavascript size={30}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <SiRuby size={30}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <SiRails size={30}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <SiHtml5 size={30}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <SiCss3 size={30}/>
                    </p>

                    <br/>
                    
                    <p>Past experience as operational finance manager with 9+ years at advertising agencies.  Strong communication skills.  Experienced in revenue, forecasting, contract negotiation, resource and budget management. 
                        Skilled in cross functional collaboration for both client accounts and internal agency operating budgets. </p>
                    <p>
                        Interested in a role where I can continue to build on my programming skills, as well as transfer my previous professional experience.  Please feel free to reach out via email or LinkedIn at the bottom of this page.
                    </p>
                        
            </div>
        )
    }
}

export default About