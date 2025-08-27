"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import styles from "./about.module.css";
import { BsFillVolumeMuteFill } from "react-icons/bs";

export default function About() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

    const onButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.4}px)`;
    };

    const resetButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.transform = "translate(0, 0)";
    };

    return (
        <div className={`${styles.about}`}>
            <div className={styles.text}>
                <div className={styles.heading}>
                    <h3>
                        About <span className={styles.red}>Parasya</span>
                    </h3>
                </div>
                <div className={styles.content}>
                    <p>
                        At PARASYA, we're not just building a business; we're crafting a
                        vision, one innovation at a time. Founded in 2023, we embarked on
                        this journey with a shared dream to unlock your brand's full online
                        potential with our digital marketing expertise.
                    </p>
                    <Link href="/about">
                        <button
                            className="magnetic-btn"
                            onMouseMove={onButtonHover}
                            onMouseLeave={resetButtonHover}
                        >
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.video}>
                <video
                    ref={videoRef}
                    src="/home/video/parasya-motion.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>

                <button className={styles.muteBtn} onClick={toggleMute}>
                    <i className={isMuted ? "bi bi-volume-mute-fill" : "bi bi-volume-up-fill"}></i>
                </button>
            </div>
        </div>
    );
}
