"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import styles from "./about.module.css";
import { BsFillVolumeMuteFill } from "react-icons/bs";
import { BsFillVolumeUpFill } from "react-icons/bs";

export default function About() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
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
                        At PARASYA, we&apos;`re not just building a business; we&apos;`re crafting a
                        vision, one innovation at a time. Founded in 2023, we embarked on
                        this journey with a shared dream to unlock your brand&apos;`s full online
                        potential with our digital marketing expertise.
                    </p>
                    <Link href="/about">
                        <button>
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
                    {isMuted ? (
                        <BsFillVolumeMuteFill size={22} />
                    ) : (
                        <BsFillVolumeUpFill size={22} />
                    )}
                </button>
            </div>
        </div>
    );
}
