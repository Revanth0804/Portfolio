import React, { useState } from "react";
import {GrMysql } from "react-icons/gr";
import {FaPhp,FaLaravel } from "react-icons/fa";
import {FaHtml5,FaCss3Alt,FaJs,FaPython,FaReact } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import Student from "../assets/images/student.png";
import Seating from "../assets/images/seating.png";
import Match from "../assets/images/match.png";

function Projects() {
  

    return (
        <section id="Projects">
            <h2 className="title">Projects</h2>
            <div className="content">
            <div className="Projects-card">
                    <div className="Projects-img">
                        <img src={Student} alt="Student Project" />
                    </div>
                    <div className="Projects-info">
    <strong className="Projects-title">
        <span>Synergistic Student Performance Predictor</span>
        <a 
            href="https://github.com/Revanth0804/Synergistic-Student-Performance-Predictor" 
            className="Project-presentation" 
            target="_blank" 
            rel="noopener noreferrer"
        >
            Project presentation 
        </a>
    </strong>
    <br/>
    <FaPython style={{color:'#AEB2D5', fontSize:'35px'}}/> <SiFlask style={{color:'#AEB2D5', fontSize:'35px'}}/> <FaHtml5 style={{color:'#ff5733', fontSize:'35px'}} /> <FaCss3Alt style={{color:'#3a6cf4', fontSize:'35px'}}/> <FaJs style={{color:'#FFFF4D', fontSize:'35px'}} />
</div>

                </div> 
                <div className="Projects-card">
                    <div className="Projects-img">
                        <img src={Seating} alt="Seating Project" style={{height:'200px'}}/>
                    </div>
                    <div className="Projects-info">
                        <strong className="Projects-title">
                            <span>Seating Arrangement System</span>
                            <a 
                                href="https://github.com/Revanth0804/Seating-Arrangement-System" 
                                className="Project-presentation" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Project presentation
                            </a>
                        </strong>
                        <br/>
                        <FaHtml5 style={{color:'#ff5733', fontSize:'35px'}} /> <FaCss3Alt style={{color:'#3a6cf4', fontSize:'35px'}}/> <FaJs style={{color:'#FFFF4D', fontSize:'35px'}} /> <FaReact style={{color:'#58C4DC', fontSize:'35px'}}/>

                        <br/>
                    </div>
                </div>
                <div className="Projects-card">
                    <div className="Projects-img">
                        <img src={Match} alt="Match master Project" />
                    </div>
                    <div className="Projects-info">
                        <strong className="Projects-title">
                            <span>Match Master</span>
                            <a 
                                href="https://github.com/Revanth0804/Match-Master" 
                                className="Project-presentation" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Project presentation
                            </a>
                        </strong>
                        <br/>
                        <FaHtml5 style={{color:'#ff5733' , fontSize:'25px'}} /> <FaCss3Alt style={{color:'#3a6cf4', fontSize:'25px'}}/> <FaJs style={{color:'#FFFF4D', fontSize:'25px'}} />
                        <br/>
                       
                    </div>
                </div>
            </div>

        
        </section>
    );
}

export default Projects;
