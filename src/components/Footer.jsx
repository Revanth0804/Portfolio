import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer" id="Contact">
          
            <div className="contact-info">
            <p>Email: <a href="mailto:revanth.suvvari@gmail.com">revanth.suvvari@gmail.com</a></p>
            <p>Phone: <a href="tel:+919440240880">+91 9440240880</a></p>

            </div>
      
        
            <p className="footer-title">
            &copy;<span>Revanth Kumar Suvvari </span>{new Date().getFullYear()}
            </p>
           
            <div className="social-icons">
                
                <a
                    href="https://github.com/Revanth0804"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaSquareGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/revanthkumarsuvvari/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                
            </div>
        </footer>
    );
}

export default Footer;
