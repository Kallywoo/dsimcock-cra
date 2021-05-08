const ContactForm = () => {
    return (
        <div className="contact-form">
            <h2>Email Us!</h2>
            <form>
                <fieldset>
                    <label htmlFor="name">Your Name:
                        <input name="name" type="text" id="name"/>
                    </label>
                    <label htmlFor="email">E-Mail Address:
                        <input name="email" type="text" id="email"/>
                    </label>
                    <label htmlFor="message">Message:
                        <textarea name="message" type="text" id="message"></textarea>
                    </label>
                    <div className="flex-button">
                        <button type="reset" className="switch">Reset</button>
                        <button type="submit">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
};

export default ContactForm;