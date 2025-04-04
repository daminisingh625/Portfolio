import "./style.css";
import {NavLink} from 'react-router-dom'

export default function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>Let’s connect! Feel free to reach out through any of the platforms below:</p>

            <div className="contact-links">
                <NavLink to="mailto:daminisingh2531@gmail.com" className="contact-card">
                    📧 Email
                </NavLink>
                <NavLink to="https://github.com/daminisingh625"target="_blank" className="contact-card">
                    💻 GitHub
                </NavLink>
            </div>
        </div>
    );
}
