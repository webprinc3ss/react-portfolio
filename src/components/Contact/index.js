import React, { useState } from 'react';
import axios from 'axios'
import { validateEmail } from '../../utils/helpers';


// const config = {
//     cors: 'https://cors-anywhere.herokuapp.com/', // <optional> doesn't display the cors error
//     formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfmn0zTMFMzg2mRGU6-B52T3qOEriwtjG1s7tv3-KTT2FWjug/formResponse'
// };

// const GOOGLE_FORM_NAME_ID = 'entry.1249636003'
// const GOOGLE_FORM_EMAIL_ID = 'entry.905026920'
// const GOOGLE_FORM_MESSAGE_ID = 'entry.1193345509'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSfmn0zTMFMzg2mRGU6-B52T3qOEriwtjG1s7tv3-KTT2FWjug/formResponse'


function Contact() {
    const [formState, setFormState] = useState({
        name: '', email: '', message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!errorMessage) {
    //         console.log('Submit Form', formState);
    //     }
    // };

    const handleChange = (e) => {
        if (e.target.name === 'entry.124963600') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };


    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            ...formState
        }
        console.log('Submit Form', formState);
        // formData.append(GOOGLE_FORM_NAME_ID, formState.name)
        // formData.append(GOOGLE_FORM_EMAIL_ID, formState.email)
        // formData.append(GOOGLE_FORM_MESSAGE_ID, formState.message)
        axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, formData)
            .then(() => {
                e.target.reset()
                setFormState({ name: '', email: '', message: '' })
            })
            .catch(() => {
                console.log('Submit Form', formData)
            })
        // e.target.reset()
        // setFormState({ name: '', email: '', message: '' });

    };
    // const GOOGLE_FORM_NAME_ID = 'entry.1249636003'
    // const GOOGLE_FORM_EMAIL_ID = 'entry.905026920'
    // const GOOGLE_FORM_MESSAGE_ID = 'entry.1193345509'
    return (
        <section id="container">
            <h2>Contact Me</h2>
            <h4 className="contactH4"><b><a className="inner" href="mailto:djabranton@gmail.com">Email</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7 0 2 . 5 5 5 . 5 5 5 5</b></h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="entry.124963600" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="text" name="entry.905026920" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="entry.1193345509" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>


    )
}

export default Contact;