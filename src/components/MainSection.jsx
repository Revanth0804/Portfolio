import React from "react";
import { IoIosCall } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll";
import { motion } from 'framer-motion';

function MainSection() {
    return (
      <section className="main" id="main">
        <div id="abt">
          <h2>Hey there, I’m Revanth Kumar<br /><span>Professional Trainee</span></h2>
          <h4>I’m currently honing my skills as a Trainee Developer at Neo Technology</h4>

          <ScrollLink 
                    to="Projects" 
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className="main-btn" id="workbtn">
                    View my work
                </ScrollLink>
          
          
          <div className="social-icons">
                <a href="mailto: revanth.suvvari@gmail.com" target="_blank" rel="noopener noreferrer">
                <SiGmail />
                </a>
                
                <a href="tel: +919440240880" target="_blank" rel="noopener noreferrer">
                <IoIosCall />
                </a>

                <a href="https://github.com/Revanth0804" target="_blank" rel="noopener noreferrer">
                <FaSquareGithub/>
                </a>

                <a href="https://www.linkedin.com/in/revanthkumarsuvvari/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                </a>
            </div>
          </div>
      </section>
    );
  }
  
  export default MainSection;
  