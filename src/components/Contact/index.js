import React, { useState } from 'react';

function ContactForm() {
    // sets form to empty strings, clearing unput fields 
    // formState has 3 keyvalue pairs to represent inputs
    const [formState, setFormState] = useState({ name:' ', email: ' ', message: ' '});
    const { name, email, message } = formState;
    function handleChange(e) {
        // uses spread operator in order to retain other key-value pairs in the object
        setFormState({...formState, [e.target.name]: e.target.value })
    }
    // console.log outside of handleChange, but inside contactForm()
    // will console log every change in the input fields
    // console.log(formState);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"  />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
    }
    
export default ContactForm;