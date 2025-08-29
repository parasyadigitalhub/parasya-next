"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./team.module.css";
import { BsLinkedin } from "react-icons/bs";

const teamMembers = [
    {
        name: "Rishan",
        role: "Founder",
        image: "/individual/rishan1.webp",
        linkedin: "https://www.linkedin.com/in/rishanparasya/",
    },
    {
        name: "Arjun",
        role: "Founder & CEO",
        image: "/individual/Arjun-new.webp",
        linkedin: "https://www.linkedin.com/in/arjun-parasya-749176258/",
    },
    {
        name: "Abhay",
        role: "Chief Technical Officer",
        image: "/individual/Abhay.webp",
        linkedin: "https://www.linkedin.com/in/abhay-sunil-1553241a8/",
    },
    {
        name: "Kuriakose",
        role: "Web Interface Engineer",
        image: "/individual/kuriakose1.webp",
        linkedin: "https://www.linkedin.com/in/kuriakose-george-860872aa/",
    },
    {
        name: "Anandhu",
        role: "Data Flow Engineer",
        image: "/individual/anandhu1.webp",
        linkedin: "https://www.linkedin.com/in/ak-krx/",
    },
    {
        name: "Reema",
        role: "Dart Coder",
        image: "/individual/reema1.webp",
        linkedin: "https://www.linkedin.com/in/reema-shareen-3733ab224/",
    },
    {
        name: "Bansuri",
        role: "Social Media Manager",
        image: "/individual/bansuri.webp",
        linkedin: "https://www.linkedin.com/in/bansuri-v-b9a66a269/",
    },
    {
        name: "Gouri",
        role: "Strategic Content Writer",
        image: "/individual/gouri.webp",
        linkedin: "https://www.linkedin.com/in/gouri-c-r-4674802b2/",
    },
    {
        name: "Devanand",
        role: "Backend Developer",
        image: "/individual/devan.webp",
        linkedin: "https://www.linkedin.com/in/devanandj",
    },
];

export default function Team() {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [scrollX, setScrollX] = useState(0);
    const [startX, setStartX] = useState(0);
    const speed = 0.5;
    let animationFrameId: number;

    // Auto scroll
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const step = () => {
            if (!isDragging) {
                setScrollX((prev) => {
                    let next = prev - speed;
                    const width = track.scrollWidth / 2;
                    if (Math.abs(next) >= width) return 0;
                    return next;
                });
            }
            animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isDragging]);

    useEffect(() => {
        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${scrollX}px)`;
        }
    }, [scrollX]);

    // Mouse & Touch Handlers
    const onTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX - scrollX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        setScrollX(e.touches[0].clientX - startX);
    };

    const onTouchEnd = () => setIsDragging(false);

    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX - scrollX);
        if (trackRef.current) trackRef.current.style.cursor = "grabbing";
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setScrollX(e.clientX - startX);
    };

    const onMouseUp = () => {
        setIsDragging(false);
        if (trackRef.current) trackRef.current.style.cursor = "grab";
    };

    return (
        <div className={`${styles.team} scroll-animate`}>
            <div className={styles.headings}>
                <h1>
                    Meet the <span className={styles.highlight}>team</span>
                </h1>
                <p>
                    Discover the driving force behind Parasya. Our core team, including
                    visionary founders, is committed to empowering you with expertise in
                    Marketing and Technology world.
                </p>
            </div>

            <div className={styles.imageFlow}>
                <div className={styles.carouselRow}>
                    <div
                        ref={trackRef}
                        className={styles.carouselTrack}
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        onMouseDown={onMouseDown}
                        onMouseMove={onMouseMove}
                        onMouseUp={onMouseUp}
                        onMouseLeave={onMouseUp}
                    >
                        {[...teamMembers, ...teamMembers].map((card, idx) => (
                            <div className={styles.teamImage} key={idx}>
                                <img src={card.image} alt={card.name} loading="lazy" />
                                <div className={styles.teamOverlay}>
                                    <div className={styles.teamInfo}>
                                        <h5>{card.name}</h5>
                                        <p>{card.role}</p>
                                    </div>
                                    <a
                                        href={card.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn Profile"
                                    >
                                        <BsLinkedin />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
