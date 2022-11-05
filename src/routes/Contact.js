import React from "react";
import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            firstName.length === 0 ||
            lastName.length === 0 ||
            email.length === 0 ||
            message.length === 0
        ) {
            setError(true);
        }
    };

    return (
        <section className="contact__wrapper">
            <section className="form__wrapper">
                <h1 className="heading"> Contact Me </h1>
                <p className="sub__heading">
                    Hi there, contact me to ask me about anything you have in mind.
                </p>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label for="first_name">First Name</label>
                        <input
                            id="first_name"
                            name="first_name"
                            type="text"
                            placeholder="Enter your first name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {error && firstName.length <= 0 ? (
                            <span className="error__text">Please enter your first name</span>
                        ) : (
                            ""
                        )}
                    </div>
                    <div>
                        <label for="last_name">Last Name</label>
                        <input
                            name="last_name"
                            id="last_name"
                            type="text"
                            placeholder="Enter your last name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {error && lastName.length <= 0 ? (
                            <span className="error__text">Please enter your last name</span>
                        ) : (
                            ""
                        )}
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="yourname@email.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {error && email.length <= 0 ? (
                            <span className="error__text">An email is required</span>
                        ) : (
                            ""
                        )}
                    </div>
                    <div>
                        <label for="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Send me a message and i'll reply you as soon as possible..."
                            className={error ? "textarea__error" : ""}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        {error && message.length <= 0 ? (
                            <span className="error__text">Please enter a message</span>
                        ) : (
                            ""
                        )}
                    </div>
                    <div id="box__isAgree">
                        <label for="box__isAgree">
                            You agree to providing your data to fayotheVillain who may contact
                            you.
                        </label>
                        <input type="checkbox" name="isAgree" id="checkbox" />
                    </div>
                    <button id="btn__submit">Send Message</button>
                </form>
            </section>
        </section>
    );
};

export default Contact;
