import React from 'react'
import { SiReact, SiPostgresql, SiJavascript, SiRuby, SiRails, SiHtml5, SiCss3, SiShopify} from "react-icons/si";
import { NavLink } from "reactstrap"
import { Link } from "react-router-dom"



class About extends React.Component {
    render(){
        return(
            <div className="container" id="about" style={{width: "75%"}}>
                <h3>ABOUT</h3>
                <br/>
                <img width="175px" src={require('../images/cathy.png')} />
                <br/><br/>
                    <p className="left">
                        Hi!  I'm Cathy.  I am a full stack web developer based in Brooklyn NY.  I'm experienced in React.js, Ruby on Rails, as well as all of the technologies below.
                    </p> 
                    
                    <p>
                        <a href="http://www.reactjs.org" target="_blank" rel="noopener noreferrer"><SiReact className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="http://www.javascript.com" target="_blank" rel="noopener noreferrer"><SiJavascript className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer"><SiRuby className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer"><SiRails className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer"><SiHtml5 className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <SiCss3 size={30}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><SiPostgresql className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="http://www.shopify.com" target="_blank" rel="noopener noreferrer"><SiShopify className="icon" size={30}/></a>
                    </p>

                    <p className="left">
                        I completed the Software Engineering Bootcamp at the Flatiron  School in Fall of 2020.  Prior to programming, I spent the last ~10 years as an operational finance manager at advertising agencies.  I have experience managing revenue, forecasting, contract negotiation, resource and budget management. 
                        I'm skilled in cross functional collaboration for both client accounts and internal agency operating budgets. 
                    </p>
                    
                    <p className="left">
                        I'm interested in a role where I can continue to build on my programming skills, as well as transfer my previous professional experience.  Please feel free to reach out via email or LinkedIn at the bottom of this page!
                    </p>
                    <br/>
                    <NavLink to="/home" tag={Link}>return to main</NavLink>        
            </div>
        )
    }
}

export default About