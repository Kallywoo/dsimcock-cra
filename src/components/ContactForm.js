import { useState } from 'react';

export const ContactForm = () => {

    // https://dev.to/deboragaleano/how-to-handle-multiple-inputs-in-react-55el

    const initialValues = {
        name: "",
        email: "",
        message: "",
    }

    const [values, setValues] = useState(initialValues);

    const handleInputChange = e => {
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        // whatever goes here for dealing w/ submitted things
    }

    const handleReset = e => {
        setValues(initialValues);
    }

    return (
        <div className="contact-form">
            <h2>Email Us!</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="name">Your Name:
                        <input 
                            name="name" 
                            type="text" 
                            id="name" 
                            value={values.name} 
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="email">E-Mail Address:
                        <input 
                            name="email" 
                            type="text" 
                            id="email" 
                            value={values.email} 
                            onChange={handleInputChange}
                        />
                    </label>
                    <label htmlFor="message">Message:
                        <textarea 
                            name="message" 
                            type="text" 
                            id="message" 
                            value={values.message} 
                            onChange={handleInputChange}
                        ></textarea>
                    </label>
                    <div className="flex-button">
                        <button type="reset" className="switch" onClick={handleReset}>Reset</button>
                        <button type="submit">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
};