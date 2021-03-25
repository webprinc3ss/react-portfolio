import axios from 'axios';
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, subject, message } = formState;

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!errorMessage) {
    //         console.log('Submit Form', formState);
    //     }
    // };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
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

        axios.post('http://localhost:4000/users/create', formState)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        // axios({
        //     method: "POST",
        //     url: "/send",
        //     data: formState
        // }).then((response) => {
        //     if (response.data.status === 'success') {
        //         alert("Message Sent.");
        //         resetForm(formState)
        //     } else if (response.data.status === 'fail') {
        //         alert("Message failed to send.")
        //     }
        // })
    };

    function resetForm() {
        setFormState({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <section id="container">
            <h2>Contact Me</h2>
            <h4 className="contactH4"><b><a className="inner" href="mailto:djabranton@gmail.com">Email</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7 0 2 . 5 5 5 . 5 5 5 5</b></h4>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="subject">Subject:</label>
                    <input name="subject" rows="5" defaultValue={subject} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
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