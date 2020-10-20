import React from 'react';
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGmail } from "react-icons/si";



const Footer = () => {
    return(
        <div className="footer">
            <a href="http://www.linkedin.com/in/cadonofrio" target="_blank"><SiLinkedin /></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://www.github.com/catd825" target="_blank"><SiGithub /></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="mailto:catd825@gmail.com"><SiGmail /></a>
        
        </div>
    )
}

export default Footer