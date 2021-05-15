import { ContactForm } from './ContactForm.js';

export const Contact = () => {
    return (
        <main>
            <div className="main-content main-contact">

                <div className="flex-container">

                    <div className="contact-info">
                        <ul>
                            <li>Tel: <a href="tel:01302-710302">01302 710302</a></li>
                            <li>Mobile One: <a href="tel:07836-527-331">07836 527331</a></li>
                            <li>Mobile Two: <a href="tel:07939-329-831">07939 329831</a></li>
                            <li>Email: <a href="mailto:dsimcock@aol.com">dsimcock@aol.com</a></li>
                        </ul>

                        <p>Contact us by phone or get in touch using the form. We will endeavour to respond within 24 hours.</p>
                    </div>

                    <ContactForm/>

                </div>
            </div>
        </main>
    )
};