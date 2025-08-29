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
    const [isSubmitting, setIsSubmitting] = useState(false);

    const openings: JobOpening[] = [
        {
            id: 1,
            position: "SEO Specialist",
            experience: "1 Year",
            description:
                "Responsible for improving the company’s organic search rankings, driving traffic to our website, and enhancing the overall SEO strategy. Applicants are expected to submit a strong portfolio showcasing previous SEO achievements and analytics reports.",
            responsibility: `Perform keyword research and competitive analysis\nOptimize website content and landing pages\nMonitor and report on SEO performance using tools like Google Analytics and Search Console\nCollaborate with content and development teams for on-page and technical SEO\nStay up to date with the latest SEO and digital marketing trends`
        },
        {
            id: 2,
            position: "Social Media Anchor",
            experience: "1 Year",
            description:
                "Create engaging video and live content for various social media platforms while representing the brand’s voice and personality. Applicants must include a strong portfolio with previous hosting clips or social media content.",
            responsibility: `Host live sessions and create video content for platforms like Instagram, Facebook, and YouTube\nEngage with the audience in real-time, answering questions and promoting brand values\nCollaborate with the content and marketing team to align messaging\nTrack engagement metrics and suggest improvements\nStay updated with platform trends and audience preferences`
        },
        {
            id: 3,
            position: "Digital Marketer",
            experience: "1 Year",
            description:
                "Develop and execute digital marketing campaigns across various channels to build brand awareness and generate leads. A strong portfolio demonstrating past campaign performance and creative strategy is required.",
            responsibility: `Plan and execute paid and organic campaigns across Google, Facebook, Instagram, etc.\nAnalyze and report performance metrics and ROI\nManage email marketing and marketing automation workflows\nCollaborate with content creators and designers\nStay informed on digital marketing best practices and trends`
        }
    ];

    const scriptUrl =
        "https://script.google.com/macros/s/AKfycbyGPPO6YIEyUbmi95FcIIDT9Liq2FTH1cHfr4iz55q-vaj5qD8ml62UTaiibqw03zrI/exec";

    const handleAccordionToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.position || !formData.resumeLink) {
            alert("Please fill in all required fields.");
            return;
        }

        setIsSubmitting(true);
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value || "N/A");
        });

        try {
            await fetch(scriptUrl, {
                method: "POST",
                body: data
            });
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
                <div className={styles.heading}>
                    <h4>Join Us</h4>
                </div>

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
                                    <p>
                                        <strong>Experience:</strong> {job.experience}
                                    </p>
                                    <p>
                                        <strong>Description:</strong> <br /> {job.description || "N/A"}
                                    </p>
                                    {job.responsibility ? (
                                        <>
                                            <p>
                                                <strong>Responsibilities:</strong>
                                            </p>
                                            <ul>
                                                {job.responsibility.split("\n").map((line, idx) => (
                                                    <li key={idx}>{line}</li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <p>
                                            <strong>Responsibilities:</strong> N/A
                                        </p>
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
                        <form onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label>Name</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.formGroup}>
                                    <label>Phone Number</label>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 99999 99999"
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label>Apply For</label>
                                    <select
                                        name="position"
                                        value={formData.position}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select position</option>
                                        {openings.map((job) => (
                                            <option key={job.id} value={job.position}>
                                                {job.position}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label>Google Drive Resume Link</label>
                                <input
                                    name="resumeLink"
                                    value={formData.resumeLink}
                                    onChange={handleChange}
                                    placeholder="Paste your Google Drive resume link here"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label>Comments</label>
                                <textarea
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleChange}
                                    placeholder="Tell us more..."
                                />
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
