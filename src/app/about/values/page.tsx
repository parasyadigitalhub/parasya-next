"use client";

import { BsShieldFillCheck , BsLightningCharge , BsPeople , BsBuilding  } from "react-icons/bs";
import styles from "./values.module.css";

const values = [
    {
        icon: <BsShieldFillCheck  />,
        title: "Tailored Digital Strategies",
        text: "Our approach ensures that every campaign is strategically aligned with your brand's unique identity and objectives.",
    },
    {
        icon: <BsLightningCharge  />,
        title: "Innovative Solutions",
        text: "From advanced SEO practices to cutting-edge social media strategies, our solutions are designed to enhance your online presence.",
    },
    {
        icon: <BsPeople  />,
        title: "Client-Centric Focus",
        text: "Our commitment to client satisfaction is at the core of everything we do.",
    },
    {
        icon: <BsBuilding  />,
        title: "Excellence",
        text: "Striving for perfection in everything we do.",
    },
];

export default function Values() {
    return (
        <section className={styles.values}>
            <div className={styles.headings}>
                <h1>
                    Our Core <span className={styles.red}>Values</span>
                </h1>
            </div>

            <div className={styles.cards}>
                {values.map((value, i) => (
                    <div key={i} className={styles.card}>
                        <h4 className={styles.icon}>{value.icon}</h4>
                        <h4 className={styles.name}>{value.title}</h4>
                        <p>{value.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
