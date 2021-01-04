import React from 'react'
import { SiReact, SiJavascript, SiRuby, SiRails, SiNodeDotJs, SiMongodb, SiRedux} from "react-icons/si";
import { NavLink, Button } from "reactstrap"
import { Link } from "react-router-dom"



class About extends React.Component {
    render(){
        return(
            <div className="container" id="about" style={{width: "75%"}}>
                <h3>ABOUT CATHY</h3>
                <br/>
                {/* <img width="175px" src={require('../images/cathy.png')} />
                <br/><br/> */}
                               
                    <p className="left">
                        Hi!  I'm Cathy, and I'm based in Brooklyn, NY.  I graduated from the Software Engineering program at the Flatiron School in Fall 2020. 
                    </p>

                    <p className="left">
                        Before I switched to tech, I spend over nine years working in financial roles within the advertising industry.  I have experience managing revenue, forecasting, contract negotiation, resource, and budget management.
                    </p>

                    <p className="left">
                        Having agency experience requires me to thrive in a fast paced environment, as well as have the ability to work across different departments.  I worked with client-facing account and project management teams to monitor the financial health of their accounts, which required close tracking of resources.  
                    </p>
                        
                        
                    <p className="left">I've also worked with department heads across the agency to develop and monitor their operating budgets for the year.  At every agency, I worked closely with the accounting team to prepare month end reconciliations and accruals.  
                    </p>

                    <p className="left">
                        I'm interested in a role where I can transfer my ability to collaborate with others and work in a fast paced environment, preferably one that also allows me to put my financial skills to work.  
                    </p>         
        
                    <br/>
                    <p className="left"> Proficient In: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="http://www.reactjs.org" target="_blank" rel="noopener noreferrer"><SiReact className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <a href="http://www.javascript.com" target="_blank" rel="noopener noreferrer"><SiJavascript className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <a href="https://ruby-lang.org/en" target="_blank" rel="noopener noreferrer"><SiRuby className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer"><SiRails className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        
                        {/* <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><SiPostgresql className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                        
                        <br/><br/>

                        Currently Learning: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="http://nodejs.org" target="_blank" rel="noopener noreferrer"><SiNodeDotJs className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <a href="http://mongodb.com" target="_blank" rel="noopener noreferrer"><SiMongodb className="icon" size={30}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                        <a href="http://redux.js.org" target="_blank" rel="noopener noreferrer"><SiRedux className="icon" size={30}/></a>

                    </p>


                    <br/>
                    <Button style={{ color: 'white' }} to="/home" tag={Link}>return to main</Button>        
            </div>
        )
    }
}

export default About