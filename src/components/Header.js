import { Link } from '@reach/router';
import { Navigation } from './Navigation.js';
import { MobileNavigation } from './MobileNavigation.js';
import logo from '../img/smallTitle.png';
import contact from '../img/contact.png';

export const Header = () => {
    return (
        <header>

            <MobileNavigation/>
            
            <div className="main-header flex-container">
                <Link to="/">
                    <img src={logo} alt="D.Simcock & Son" className="full-size"/>
                </Link>
                
                <div className="header-info">
                    <div className="contact">
                        <span>Mobile: <a href="tel:07836-527-331">07836 527331</a></span>
                        <span>Tel: <a href="tel:01302-710302">01302 710302</a></span>
                        <span>Email: <a href="mailto:dsimcock@aol.com">dsimcock@aol.com</a></span>
                    </div>
                    <h2 className="description">Industrial and Domestic Building Services</h2>
                </div>
            </div>

            <Navigation/>

            <div className="contact-us">
                <Link to="/contact"><img src={contact} alt=""/></Link>
            </div>

        </header>
)};