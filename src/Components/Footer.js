import React from 'react';
import { SiLinkedin } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiGmail } from "react-icons/si";



const Footer = () => {
    return(
        <div className="footer">
            Contact me:  &nbsp;&nbsp;&nbsp;
            <a href="http://www.linkedin.com/in/cadonofrio" target="_blank" rel="noopener noreferrer"><SiLinkedin size={20}/></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://www.github.com/catd825" target="_blank" rel="noopener noreferrer"><SiGithub size={20}/></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="mailto:catd825@gmail.com"><SiGmail size={20}/></a> &nbsp;&nbsp;
            {/* | &nbsp;&nbsp;Photo by Cathy D'Onofrio */}
        </div>
    )
}

export default Footer