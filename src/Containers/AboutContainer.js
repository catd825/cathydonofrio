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
                <h3>ABOUT CATHY</h3>
                <br/>
                    <p>Full stack web developer experienced in Javascript React and Ruby on Rails. Past experience as operational finance manager with 9+ years at advertising agencies.</p> 
                
                    <p>Experienced in revenue, forecasting, contract negotiation, resource and budget management. 
                        Skilled in cross functional collaboration for both client accounts and internal agency operating budgets. </p>
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
            </div>
        )
    }
}

export default About