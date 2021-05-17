import { useState } from 'react';
import { Link } from '@reach/router';

import mobileNav from '../img/MobileNav.png';

export const MobileNavigation = () => {

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
            {open &&
                <div className={"mobile-nav-list"}>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/work">Our Work</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </nav>
                </div>
            }
        </div>
    )
};