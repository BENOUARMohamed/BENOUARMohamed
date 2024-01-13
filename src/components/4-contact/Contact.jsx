import React from "react";
import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import done from "../../../public/animation/done.json";
import mail from "../../../public/animation/mail.json";

const Contact = () => {
    const [state, handleSubmit] = useForm("mkndnell");

    return (
        <section className="contact-us">
            <h1 className="title">
                <span className="icon-envelope">   </span>
                contact us
            </h1>
            <p className="sub-title">Do you have a project in your mind, contact me here
            </p>

            <div style={{ justifyContent: "space-between" }} className="flex">
                <form onSubmit={handleSubmit} className="">
                    <div className="flex">
                        <label htmlFor="email">Email Address :</label>
                        <input autoComplete="off" required type="email" name="email" id="email" />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                    </div>

                    <div className="flex" style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your message :</label>
                        <textarea required name="message" id="message" ></textarea>
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting} className="submit">
                        {state.submitting ? "Submitting..." : "Submit"}
                    </button>
                    {state.succeeded && (
                        <p className="flex send" style={{ fontSize: "16px", marginTop: "1.7rem" }}>
                            <Lottie className="send" loop={false} style={{ height: 60 }} animationData={done} />
                            Your message has been sent successfully 👌
                        </p>
                    )}
                </form>
                <div className="animation">
                    <Lottie animationData={mail} />
                </div>
            </div >
        </section >
    );
}
export default Contact;
