import { Link } from '@reach/router';

export const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/work">Our Work</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/about#testimonials">Testimonials</Link></li>

                    <li><Link to="/residential">Residential Examples</Link></li>
                    <li><Link to="/industrial">Industrial Examples</Link></li>

                    <li><Link to="/sitemap">Sitemap</Link></li>
                </ul>
            </nav>
        </footer>
    )
}