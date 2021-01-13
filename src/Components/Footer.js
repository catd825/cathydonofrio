import React from 'react';
import { SiLinkedin, SiGithub, SiGmail, SiMedium } from "react-icons/si";



const Footer = () => {
    return(
        <div className="footer">
            Find me:  &nbsp;&nbsp;&nbsp;
            <a href="http://www.linkedin.com/in/cadonofrio" target="_blank" rel="noopener noreferrer"><SiLinkedin size={20}/></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://www.github.com/catd825" target="_blank" rel="noopener noreferrer"><SiGithub size={20}/></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="mailto:catd825@gmail.com"><SiGmail size={20}/></a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://catd825.medium.com" target="_blank" rel="noopener noreferrer"><SiMedium size={20}/></a>
        </div>
    )
}

export default Footer