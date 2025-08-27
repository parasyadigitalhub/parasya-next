"use client";

import styles from "./testimonials.module.css";

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Meptech",
            image: "/home/testimonials/lg7.webp",
            content:
                "LinkedIn marketing strategies helped us connect with the right audience and enhanced our professional presence.",
        },
        {
            id: 2,
            name: "Keyworld Qatar",
            image: "/home/testimonials/lg8.webp",
            content:
                "The Google Ads campaigns brought excellent results, increasing our visibility and attracting more customers.",
        },
        {
            id: 3,
            name: "ILM",
            image: "/home/testimonials/lg9.webp",
            content:
                "Parasya delivered outstanding video production work that perfectly captured our vision and made a lasting impression.",
        },
    ];

    return (
        <div className={styles.testimonials}>
            <div className={styles.text}>
                <div className={styles.heading}>
                    <h3>
                        What Our <span className={styles.red}>Clients</span> Say
                    </h3>
                </div>
                <div className={styles.content}>
                    <p>
                        Discover why leading companies choose our solution to drive their
                        success
                    </p>
                </div>
            </div>

            <div className={styles.testimonialCards}>
                {testimonials.map((itm) => (
                    <div className={styles.card} key={itm.id}>
                        <div className={styles.head}>
                            <img src={itm.image} alt={itm.name} loading="lazy" />
                            <h5>{itm.name}</h5>
                        </div>
                        <div className={styles.test}>
                            <p>{itm.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
