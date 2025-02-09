import "./style.css";

export default function Contact() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <p>Let’s connect! Feel free to reach out through any of the platforms below:</p>

            <div className="contact-links">
                <a href="mailto:your.email@example.com" className="contact-card">
                    📧 Email
                </a>
                <a href="https://github.com/yourgithub" target="_blank" className="contact-card">
                    💻 GitHub
                </a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" className="contact-card">
                    🔗 LinkedIn
                </a>
                <a href="https://twitter.com/yourtwitter" target="_blank" className="contact-card">
                    🐦 Twitter
                </a>
            </div>
        </div>
    );
}
