import "./style.css";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="notfound-container">
            <h1>404</h1>
            <h2>Oops! Page Not Found</h2>
            <p>The page you're looking for doesn't exist or may have been moved.</p>
            <Link to="/" className="home-button">🔙 Go Home</Link>
        </div>
    );
}
