import {Link} from '@reach/router';

const Sitemap = () => {
    return (
        <main>
            <div className="main-content">
                <nav className="sitemap">
                    <ul>
                        <li><Link to="/index.html">Home</Link></li>
                        <li><Link to="/about.html">About Us</Link></li>
                        <li><Link to="/work.html">Our Work</Link></li>

                        <li><Link to="/residential.html">Residential Work</Link></li>
                        <li><Link to="/industrial.html">Industrial Work</Link></li>

                        <li><Link to="/contact.html">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </main>
    )
};

export default Sitemap;