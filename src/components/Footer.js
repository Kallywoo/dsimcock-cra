import {Link} from '@reach/router';

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about.html">About Us</Link></li>
                    <li><Link to="/work.html">Our Work</Link></li>
                    <li><Link to="/contact.html">Contact Us</Link></li>
                    <li><Link to="/about.html#testimonials">Testimonials</Link></li>

                    <li><Link to="/residential.html">Residential Examples</Link></li>
                    <li><Link to="/industrial.html">Industrial Examples</Link></li>

                    <li><Link to="/sitemap.html">Sitemap</Link></li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;