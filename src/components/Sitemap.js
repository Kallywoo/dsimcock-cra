import { Link } from '@reach/router';

export const Sitemap = () => {
    return (
        <main>
            <div className="main-content">
                <nav className="sitemap">
                    <ul>
                        <li><Link to="/index">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/work">Our Work</Link></li>

                        <li><Link to="/residential">Residential Work</Link></li>
                        <li><Link to="/industrial">Industrial Work</Link></li>

                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </main>
    )
};