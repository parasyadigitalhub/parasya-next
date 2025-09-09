"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./planet.module.css";
import Image from "next/image";

export default function HeroSection() {
    const [rotation, setRotation] = useState(0);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isLoading, setIsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const animationFrame = useRef<number | null>(null);

    // check screen size
    const checkScreen = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        checkScreen();
        window.addEventListener("resize", checkScreen);

        // loading delay
        const timer = setTimeout(() => setIsLoading(false), 100);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", checkScreen);
        };
    }, []);

    // handle scroll for rotation
    useEffect(() => {
        const handleScroll = () => {
            setRotation(window.scrollY * 0.1);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // handle mouse move for parallax
    const handleMouseMove = (e: React.MouseEvent) => {
        if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
        animationFrame.current = requestAnimationFrame(() => {
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            setMousePos({
                x: (e.clientX - centerX) * 0.02,
                y: (e.clientY - centerY) * 0.02,
            });
        });
    };

    return (
        <div
            className={styles.heroSection}
            onMouseMove={handleMouseMove}
        >
            {/* Gradient Overlay */}
            <div
                className={styles.gradientOverlay}
                style={{ opacity: isLoading ? 0 : 1 }}
            ></div>

            {/* Grid Background */}
            <div className={styles.gridBackground}></div>

            {/* Planet */}
            <div className={styles.planetContainer}>
                <div
                    className={styles.planet}
                    style={{
                        transform: `translate(-50%, -50%) rotate(${rotation}deg) translate(${mousePos.x}px, ${mousePos.y}px) scale(${isLoading ? 1.5 : 1})`,
                    }}
                >
                    <div className={styles.planetGlow}></div>
                    <div className={styles.planetInner}>
                        <Image
                            src="/home/planet.svg"
                            alt="Floating planet"
                            fill   
                            style={{ opacity: isLoading ? 0 : 0.4 }}
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Hero Content */}
            <div
                className={styles.heroContent}
                style={{
                    opacity: isLoading ? 0 : 1,
                    transform: isLoading ? "translateY(20px)" : "translateY(0)",
                }}
            >
                <h1>ELEVATING</h1>
                <h1>YOUR IDENTITY</h1>
                {!isMobile && (
                    <p>
                        Your One-Stop Solution for Incorporation, Legal Support, Digital
                        Marketing, and Cutting-Edge App & Web Development Services.
                    </p>
                )}
            </div>
        </div>
    );
}
