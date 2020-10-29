import React from 'react'

import { NavLink } from "reactstrap"
import { Link } from "react-router-dom"



class About extends React.Component {
    render(){
        return(
            <div className="container" id="about" style={{width: "60%"}}>
                <h3>ABOUT</h3>
                <br/>
                <img width="150px" src={require('../images/cathy.png')} />
                <br/><br/>
                    <p className="left">
                        Hi!  I'm Cathy.  I am a full stack web developer based in Brooklyn NY, primarily experienced React.js and Ruby on Rails.
                    </p> 
                    
                    <p className="left">
                        I completed the Software Engineering Bootcamp at the Flatiron  School in Fall of 2020.  Prior to programming, I spent the last ~10 years as an operational finance manager at advertising agencies.  I'm experienced in revenue, forecasting, contract negotiation, resource and budget management. 
                        I'm skilled in cross functional collaboration for both client accounts and internal agency operating budgets. 
                    </p>
                    
                    <p className="left">
                        I'm interested in a role where I can continue to build on my programming skills, as well as transfer my previous professional experience.  Please feel free to reach out via email or LinkedIn at the bottom of this page.
                    </p>
                    <br/>
                    <NavLink to="/home" tag={Link}>return to main</NavLink>        
            </div>
        )
    }
}

export default About