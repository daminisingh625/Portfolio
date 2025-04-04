import {useState } from "react";
import { NavLink } from "react-router-dom";
export default function Projects(){
    return (
        <>
            <div className="projects-container">
                <div className="project">
                    <h3>Damini's Portfolio</h3>
                    <p>A porfolio website showcasing my skills, projects, and achievements.This portfolio is built using the MERN stack with React for the frontend</p>
                     <NavLink to="https://github.com/daminisingh625/Portfolio.git" className="project-navlink">Go to github</NavLink>
                </div>
            </div>
        </>
    )
}