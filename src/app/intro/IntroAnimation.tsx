"use client";

import { useEffect, useState } from "react";
import styles from "./IntroAnimation.module.css";

export default function IntroAnimation({ onFinish }: { onFinish: () => void }) {
    const texts = [
        "Digital Solutions",
        "Brand Strategy",
        "Web Development",
        "User Experience",
        "Creative Design",
        "PARASYA",
    ];

    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (index < texts.length) {
            setShow(true);
            const timer = setTimeout(() => {
                setShow(false);
                setTimeout(() => setIndex((prev) => prev + 1), 150);
            }, index === texts.length - 1 ? 450 : 200);

            return () => clearTimeout(timer);
        } else {
            const finishTimer = setTimeout(() => onFinish(), 200);
            return () => clearTimeout(finishTimer);
        }
    }, [index, texts.length, onFinish]);

    return (
        <div className={styles.introContainer}>
            {index < texts.length && (
                <h1
                    key={texts[index]}
                    className={`${styles.text} ${show ? styles.fadeIn : styles.fadeOut} ${texts[index] === "PARASYA" ? styles.highlight : ""
                        }`}
                >
                    {texts[index]}
                </h1>
            )}
        </div>
    );
}
