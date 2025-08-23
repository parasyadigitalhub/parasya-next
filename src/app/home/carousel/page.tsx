"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./carousel.module.css";
import Mobile from "./mobile/page";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

type CarouselProps = {
    autoplayDelay?: number;
};

export default function Carousel({ autoplayDelay = 2000 }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);

    // ✅ Images are now inside the carousel
    const images: string[] = [
        "/home/carousel/futurestars.webp",
        "/home/carousel/keyworld.webp",
        "/home/carousel/luvwish.webp",
        "/home/carousel/nextgen.webp",
        "/home/carousel/p4.webp",
        "/home/carousel/sportwindo.webp",
    ];

    const angleStep = 360 / images.length;
    const carouselRadius = 500;

    const checkScreen = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        checkScreen();
        window.addEventListener("resize", checkScreen);
        startAutoplay();
        return () => {
            stopAutoplay();
            window.removeEventListener("resize", checkScreen);
        };
    }, []);

    const startAutoplay = () => {
        stopAutoplay();
        autoplayRef.current = setInterval(() => {
            next();
        }, autoplayDelay);
    };

    const stopAutoplay = () => {
        if (autoplayRef.current) clearInterval(autoplayRef.current);
    };

    const prev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const next = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const getCarouselTransform = () => {
        return `translateZ(-${carouselRadius}px) rotateY(-${currentIndex * angleStep}deg)`;
    };

    const getItemTransform = (index: number) => {
        const angle = index * angleStep;
        return `rotateY(${angle}deg) translateZ(${carouselRadius}px)`;
    };

    return (
        <div className={styles.carousel}>
            {!isMobile ? (
                <div
                    className={styles.carousel3dContainer}
                    onMouseEnter={stopAutoplay}
                    onMouseLeave={startAutoplay}
                >
                    <div className={styles.carousel3d} style={{ transform: getCarouselTransform() }}>
                        {images.map((src, i) => (
                            <div
                                key={i}
                                className={`${styles.carouselItem3d} ${i === currentIndex ? styles.active : ""}`}
                                style={{ transform: getItemTransform(i) }}
                            >
                                <img src={src} alt={`3D image ${i + 1}`} />
                            </div>
                        ))}
                    </div>

                    <button className={`${styles.carouselNav} ${styles.prevBtn}`} onClick={prev}>
                        <BsArrowLeft />
                    </button>
                    <button className={`${styles.carouselNav} ${styles.nextBtn}`} onClick={next}>
                        <BsArrowRight />
                    </button>
                </div>
            ) : (
                <Mobile/>
            )}
        </div>
    );
}
