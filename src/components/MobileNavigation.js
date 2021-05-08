import { useState } from 'react';
import { Link } from '@reach/router';

import mobileNav from '../img/MobileNav.png';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const openNav = () => {
        setOpen(!open);
    }

    // needs fade-in/fade-out

    return (
        <div className="mobile-nav">
            <div className="mobile-nav-header">
                <button onClick={openNav}>
                    <img src={mobileNav} alt=""/>
                </button>
            </div>
            <div className={`${"mobile-nav-list"} ${open ? "show" : ""}`}>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about.html">About Us</Link></li>
                        <li><Link to="/work.html">Our Work</Link></li>
                        <li><Link to="/contact.html">Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
};

export default MobileNavigation;