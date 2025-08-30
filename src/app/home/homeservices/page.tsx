"use client";

import Link from "next/link";
import styles from "./homeservices.module.css";
import { BsCodeSlash, BsBarChart, BsBank, BsCheck2 } from "react-icons/bs";

export default function HomeServices() {
    const services = [
        {
            icon: <BsCodeSlash />,
            title: "Software Development",
            text: "Custom-built web and mobile applications that deliver exceptional user experiences and drive business growth.",
            points: ["AI Integrated", "Modern Technologies", "SEO Optimization"],
        },
        {
            icon: <BsBarChart />,
            title: "Digital Marketing",
            text: "Strategic digital marketing solutions that enhance your brand visibility and drive meaningful engagement.",
            points: ["Social Media Marketing", "Content Strategy", "PPC Campaigns"],
        },
        {
            icon: <BsBank />,
            title: "Influencer Marketing",
            text: "Connect with influential voices in your industry to amplify your brand message and reach new audiences.",
            points: ["Influencer Partnerships", "Campaign Management", "ROI Tracking"],
        },
    ];

    return (
        <div className={styles.services}>
            <div className={styles.text}>
                <div className={styles.heading}>
                    <h3>
                        Our Featured <span className={styles.red}>Services</span>
                    </h3>
                </div>
                <div className={styles.content}>
                    <p>
                        Transforming businesses through innovative digital solutions and
                        strategic marketing approaches
                    </p>
                </div>
            </div>

            <div className={styles.cards}>
                {services.map((service, index) => (
                    <div className={styles.card} key={index}>
                        <div className={styles.cardBody}>
                            <h5 className={styles.cardTitle}>{service.icon}</h5>
                            <h6 className={styles.cardSubtitle}>{service.title}</h6>
                            <p className={styles.cardText}>{service.text}</p>
                            {service.points.map((point, i) => (
                                <p key={i}>
                                    <BsCheck2 className={styles.checkIcon} />
                                    {point}
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.button}>
                <Link href="/services">
                    <button className={styles.btn}>View All Services</button>
                </Link>
            </div>
        </div>
    );
}
