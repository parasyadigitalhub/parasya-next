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

    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        if (index < texts.length) {
            setCurrentText(texts[index]);

            if (index === texts.length - 1) {
                setTimeout(() => {
                    setFadeOut(true);
                    setTimeout(() => onFinish(), 400);
                }, 500);
            } else {
                const timer = setTimeout(() => setIndex(index + 1), 300);
                return () => clearTimeout(timer);
            }
        }
    }, [index]);

    return (
        <div
            className={`${styles.introContainer} ${fadeOut ? styles.fadeOut : ""}`}
        >
            <h1>{currentText}</h1>
        </div>
    );
}
