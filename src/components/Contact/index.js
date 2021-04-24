import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);


    return (
        <section id="container">
            <h2>Contact Me</h2>
            <h4 className="contactH4"><b><a className="inner" href="mailto:djabranton@gmail.com">Email</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7 0 2 . 5 5 5 . 5 5 5 5</b></h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input
                        id="name"
                        aria-invalid={errors.name ? "true" : "false"}
                        {...register('name', { required: true })}
                    />

                    {/* use role="alert" to announce the error message */}
                    {errors.name && errors.name.type === "required" && (
                        <span className="error-text" role="alert">Name is required</span>
                    )}
                </div>
                <div>
                    <label>Email address:</label>
                    <input id="email"  {...register('email', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                    {errors.email && errors.email.type === "required" && (
                        <span className="error-text">Email is required.</span>
                    )}
                    {errors.email && errors.email.type === "pattern" && (
                        <span className="error-text">Email is not valid.</span>
                    )}
                </div>
                <div>
                    <label>Message:</label>
                    <textarea id="message" rows="5" {...register('message', { required: true })} />
                    {errors.name && errors.name.type === "required" && (
                        <span className="error-text" role="alert">Message is required</span>
                    )}
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>


    )
}

export default Contact;