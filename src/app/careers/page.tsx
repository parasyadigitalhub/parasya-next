"use client";

import { useState } from "react";
import styles from "./carrers.module.css";

type JobOpening = {
    id: number;
    position: string;
    experience: string;
    description: string;
    responsibility?: string;
};

export default function Careers() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        position: "",
        comments: "",
        resumeLink: ""
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const openings: JobOpening[] = [
        { id: 1, position: "SEO Specialist", experience: "1 Year", description: "SEO job description...", responsibility: "..." },
        { id: 2, position: "Social Media Anchor", experience: "1 Year", description: "Social Media job description...", responsibility: "..." },
        { id: 3, position: "Digital Marketer", experience: "1 Year", description: "Digital Marketer job description...", responsibility: "..." }
    ];

    const scriptUrl = "https://script.google.com/macros/s/AKfycbyGPPO6YIEyUbmi95FcIIDT9Liq2FTH1cHfr4iz55q-vaj5qD8ml62UTaiibqw03zrI/exec";

    const handleAccordionToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = "Name is required.";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Enter a valid email address.";
        }
        if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
        if (!formData.position.trim()) newErrors.position = "Please select a position.";
        if (!formData.resumeLink.trim()) newErrors.resumeLink = "Resume link is required.";

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value || "N/A");
        });

        try {
            await fetch(scriptUrl, { method: "POST", body: data });
            alert("Thank you! Your application has been submitted successfully.");
            setFormData({
                name: "",
                email: "",
                phone: "",
                position: "",
                comments: "",
                resumeLink: ""
            });
        } catch (err) {
            console.error(err);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.careers}>
            {/* LEFT SIDE - JOB OPENINGS */}
            <div className={styles.left}>
                <div className={styles.heading}><h4>Join Us</h4></div>
                <div className={styles.accordion}>
                    {openings.map((job, i) => (
                        <div key={job.id} className={styles.accordionItem}>
                            <button
                                className={`${styles.accordionButton} ${activeIndex === i ? styles.active : ""}`}
                                onClick={() => handleAccordionToggle(i)}
                            >
                                {job.position}
                            </button>
                            {activeIndex === i && (
                                <div className={styles.accordionBody}>
                                    <p><strong>Experience:</strong> {job.experience}</p>
                                    <p><strong>Description:</strong> {job.description}</p>
                                    {job.responsibility && (
                                        <>
                                            <p><strong>Responsibilities:</strong></p>
                                            <ul>
                                                {job.responsibility.split("\n").map((line, idx) => (
                                                    <li key={idx}>{line}</li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className={styles.right}>
                <div className={styles.card}>
                    <div className={styles.cardBody}>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label>Name</label>
                                    <input name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" />
                                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Email</label>
                                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" />
                                    {errors.email && <span className={styles.error}>{errors.email}</span>}
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label>Phone Number</label>
                                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 99999 99999" />
                                    {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Apply For</label>
                                    <select name="position" value={formData.position} onChange={handleChange}>
                                        <option value="">Select position</option>
                                        {openings.map((job) => (
                                            <option key={job.id} value={job.position}>{job.position}</option>
                                        ))}
                                    </select>
                                    {errors.position && <span className={styles.error}>{errors.position}</span>}
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Google Drive Resume Link</label>
                                <input name="resumeLink" value={formData.resumeLink} onChange={handleChange} placeholder="Paste your Google Drive resume link here" />
                                {errors.resumeLink && <span className={styles.error}>{errors.resumeLink}</span>}
                            </div>

                            <div className={styles.formGroup}>
                                <label>Comments</label>
                                <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Tell us more..." />
                            </div>

                            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                                {isSubmitting ? <div className={styles.loader}></div> : "Submit Application"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
