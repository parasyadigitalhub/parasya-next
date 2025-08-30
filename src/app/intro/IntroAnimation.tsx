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
                setTimeout(() => setIndex(index + 1), 150); // wait before next
            }, index === texts.length - 1 ? 450 : 200); // last word stays longer
            return () => clearTimeout(timer);
        } else {
            setTimeout(() => onFinish(), 200); // smooth exit
        }
    }, [index]);

    return (
        <div className={`${styles.introContainer}`}>
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
