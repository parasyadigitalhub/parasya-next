"use client";

import { useState } from "react";
import styles from "./contacts.module.css";
import Social from "@/components/header/social/social";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsFillGeoAltFill } from "react-icons/bs";

export default function Contacts() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const scriptUrl =
        "https://script.google.com/macros/s/AKfycbyukKttGY65uPn-TW2muPjiqDGt0oJmYQtHIaMLU3IJ-gwHUrfveDGMKlLAjRdtZpRC6A/exec";

    const validate = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email.";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        return newErrors;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) return;

        setIsSubmitting(true);
        const data = new FormData();
        data.append("name", `${formData.firstName} ${formData.lastName}`);
        data.append("email", formData.email);
        data.append("subject", formData.subject);
        data.append("message", formData.message);

        try {
            await fetch(scriptUrl, { method: "POST", body: data });
            alert("Message submitted successfully!");
            setFormData({ firstName: "", lastName: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.error("Error!", err);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.containerFluid}>
            <div className={styles.heading}>
                <div className={styles.getInTouch}>
                    <h1>
                        Get In <span className={styles.highlight}>Touch</span>
                    </h1>
                </div>
                <div className={styles.para}>
                    <p>Ready to transform your digital presence? Let's start a conversation</p>
                </div>
            </div>

            <div className={styles.cards}>
                {/* Left Column */}
                <div className={styles.leftColumn}>
                    <div className={`${styles.card} ${styles.one}`}>
                        <div className={styles.cardBody}>
                            <div className={styles.phone}>
                                <BsTelephone />
                                <div className={styles.content}>
                                    <h5>Phone</h5>
                                    <a href="tel:+919995498218">+91 99954 98218</a>
                                </div>
                            </div>

                            <div className={styles.email}>
                                <BsEnvelope />
                                <div className={styles.content}>
                                    <h5>Email</h5>
                                    <a href="mailto:info@parasya.in">info@parasya.in</a>
                                </div>
                            </div>

                            <div className={styles.location}>
                                <BsFillGeoAltFill />
                                <div className={styles.content}>
                                    <h5>Location</h5>
                                    <p>Rayan avenue 1 st floor, Kariyad Thalassery,Kannur,Kerala 673316</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.card} ${styles.two}`}>
                        <div className={styles.cardBody}>
                            <h5>Follow Us</h5>
                            <Social />
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className={`${styles.card} ${styles.three}`}>
                    <div className={styles.cardBody}>
                        <form onSubmit={handleSubmit}>
                            <div className={styles.nameRow}>
                                <div className={styles.formGroup}>
                                    <label>First Name</label>
                                    <input
                                        className={styles.inputField}
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="John"
                                    />
                                    {errors.firstName && <div className={styles.error}>{errors.firstName}</div>}
                                </div>

                                <div className={styles.formGroup}>
                                    <label>Last Name</label>
                                    <input
                                        className={styles.inputField}
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Doe"
                                    />
                                    {errors.lastName && <div className={styles.error}>{errors.lastName}</div>}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Email</label>
                                <input
                                    className={styles.inputField}
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                />
                                {errors.email && <div className={styles.error}>{errors.email}</div>}
                            </div>

                            <div className={styles.formGroup}>
                                <label>Subject</label>
                                <input
                                    className={styles.inputField}
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="How can we help?"
                                />
                                {errors.subject && <div className={styles.error}>{errors.subject}</div>}
                            </div>

                            <div className={styles.formGroup}>
                                <label>Message</label>
                                <textarea
                                    className={styles.textArea}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message here"
                                />
                                {errors.message && <div className={styles.error}>{errors.message}</div>}
                            </div>

                            <button className={styles.submitBtn} type="submit" disabled={isSubmitting}>
                                {!isSubmitting ? "Submit" : <div className={styles.loader}></div>}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
