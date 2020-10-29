import React from 'react';
import { SiReact, SiPostgresql, SiJavascript, SiRuby, SiRails, SiHtml5, SiCss3} from "react-icons/si";

class ContentContainer extends React.Component {
    render() {
        return(
            <>
            
            <div id="home">
                <h2>CATHY D'ONOFRIO | software engineer</h2>
                <p>brooklyn-based full stack web developer.</p> 
                
                    <p>
                        <a href="http://www.reactjs.org" target="_blank" rel="noopener noreferrer"><SiReact className="icon" size={25}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="http://www.javascript.com" target="_blank" rel="noopener noreferrer"><SiJavascript className="icon" size={25}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://www.ruby-lang.org/en/" target="_blank" rel="noopener noreferrer"><SiRuby className="icon" size={25}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer"><SiRails className="icon" size={25}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" target="_blank" rel="noopener noreferrer"><SiHtml5 className="icon" size={25}/></a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <SiCss3 size={25}/>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer"><SiPostgresql className="icon" size={25}/></a>
                    </p>
            </div>
            </>
        )
    }
}

export default ContentContainer