import { Link } from '@reach/router';

export const Navigation = () => {
    return (
        <nav className="header-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/work">Our Work</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
)};