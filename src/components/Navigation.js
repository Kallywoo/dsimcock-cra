import {Link} from '@reach/router';

const Navigation = () => {
    return (
        <nav className="header-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about.html">About Us</Link></li>
                <li><Link to="/work.html">Our Work</Link></li>
                <li><Link to="/contact.html">Contact Us</Link></li>
            </ul>
        </nav>
)};

export default Navigation;