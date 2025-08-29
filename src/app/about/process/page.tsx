"use client";

import styles from "./process.module.css";

const steps = [
    {
        num: "01",
        title: "Discovery and Consultation",
        text: "Parasya engage deeply with clients to understand their specific needs and objectives, ensuring a clear vision from the outset.",
    },
    {
        num: "02",
        title: "Planning and Proposal",
        text: "We craft a detailed project plan and proposal, outlining the scope, timeline, and budget for client approval.",
    },
    {
        num: "03",
        title: "Design and Development",
        text: "We design and develop tailored solutions, aligning with the client's goals and technical requirements.",
    },
    {
        num: "04",
        title: "Testing and Quality Assurance",
        text: "We rigorously test all aspects of the solution, ensuring it meets our high standards for performance, security, and reliability.",
    },
    {
        num: "05",
        title: "Deployment and Support",
        text: "Finally, we deploy the solution and provide ongoing support to ensure seamless operation and continuous improvement.",
    },
];

export default function Process() {
    return (
        <section className={styles.cards}>
            <div className={styles.card_heading}>
                <h1>Our Process</h1>
            </div>
            <div className={styles.card_group}>
                {steps.map((step, i) => (
                    <div className={styles.card} key={i}>
                        <div className={styles.card_body}>
                            <div className={styles.num}>{step.num}</div>
                            <h5 className={styles.title}>{step.title}</h5>
                            <p className={styles.text}>{step.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
