"use client";

import { useState } from "react";
import styles from "./carrers.module.css";
import { BsChevronDown } from "react-icons/bs";

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
    const [successMessage, setSuccessMessage] = useState("");

    const openings: JobOpening[] = [
        {
            id: 1,
            position: 'SEO Specialist',
            experience: '1 Year',
            description: 'Responsible for improving the company’s organic search rankings, driving traffic to our website, and enhancing the overall SEO strategy. Applicants are expected to submit a strong portfolio showcasing previous SEO achievements and analytics reports.',
            responsibility: `Perform keyword research and competitive analysis\n Optimize website content and landing pages\n Monitor and report on SEO performance using tools like Google Analytics and Search Console\n Collaborate with content and development teams for on-page and technical SEO\n Stay up to date with the latest SEO and digital marketing trends`
        },
        {
            id: 2,
            position: 'Social Media Anchor',
            experience: '1 Year',
            description: 'Create engaging video and live content for various social media platforms while representing the brand’s voice and personality. Applicants must include a strong portfolio with previous hosting clips or social media content.',
            responsibility: `Host live sessions and create video content for platforms like Instagram, Facebook, and YouTube\n Engage with the audience in real-time, answering questions and promoting brand values\n Collaborate with the content and marketing team to align messaging\n Track engagement metrics and suggest improvements\n Stay updated with platform trends and audience preferences`
        },
        {
            id: 3,
            position: 'Digital Marketer',
            experience: '1 Year',
            description: 'Develop and execute digital marketing campaigns across various channels to build brand awareness and generate leads. A strong portfolio demonstrating past campaign performance and creative strategy is required.',
            responsibility: `Plan and execute paid and organic campaigns across Google, Facebook, Instagram, etc.\n Analyze and report performance metrics and ROI\n Manage email marketing and marketing automation workflows\n Collaborate with content creators and designers\n Stay informed on digital marketing best practices and trends`
        }
    ];

    const scriptUrl = "https://script.google.com/macros/s/AKfycbyGPPO6YIEyUbmi95FcIIDT9Liq2FTH1cHfr4iz55q-vaj5qD8ml62UTaiibqw03zrI/exec";

    const handleAccordionToggle = (index: number, position: string) => {
        setActiveIndex(activeIndex === index ? null : index);
        setFormData(prev => ({ ...prev, position })); // auto-fill position
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
        setSuccessMessage(""); // clear success message on new input
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
        setSuccessMessage("");
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value || "N/A");
        });

        try {
            await fetch(scriptUrl, { method: "POST", body: data });
            setSuccessMessage("✅ Application submitted successfully!");
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
            setSuccessMessage("❌ Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.careers}>
            <div className={styles.headingRow}>
                <h4>Join Us</h4>
            </div>
            {/* LEFT SIDE - JOB OPENINGS */}
<div className={styles.left}>
    <div className={styles.accordion}>
        {openings.map((job, i) => (
            <div key={job.id} className={styles.accordionItem}>
                <button
                    type="button"
                    className={`${styles.accordionButton} ${activeIndex === i ? styles.active : ""}`}
                    onClick={() => handleAccordionToggle(i, job.position)}
                >
                    {job.position}
                    <BsChevronDown
                        className={`${styles.arrow} ${activeIndex === i ? styles.rotated : ""}`}
                    />
                </button>

                <div className={`${styles.accordionBody} ${activeIndex === i ? styles.show : ""}`}>
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
                                {isSubmitting ? <span className={styles.spinner}></span> : "Submit Application"}
                            </button>

                            {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
