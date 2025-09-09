"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image"; 
import styles from "./mobile.module.css";

const images: string[] = [
    "/home/carousel/futurestars.webp",
    "/home/carousel/keyworld.webp",
    "/home/carousel/luvwish.webp",
    "/home/carousel/nextgen.webp",
    "/home/carousel/p4.webp",
    "/home/carousel/sportwindo.webp",
];

export default function Mobile() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [scrollX, setScrollX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const animationRef = useRef<number | null>(null);

    const speed = 0.5;

    useEffect(() => {
        const step = () => {
            if (!isDragging && trackRef.current) {
                let newScrollX = scrollX - speed;
                const width = trackRef.current.scrollWidth / 2;
                if (Math.abs(newScrollX) >= width) {
                    newScrollX = 0;
                }
                setScrollX(newScrollX);
                trackRef.current.style.transform = `translateX(${newScrollX}px)`;
            }
            animationRef.current = requestAnimationFrame(step);
        };

        animationRef.current = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationRef.current!);
    }, [scrollX, isDragging]);

    const onMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.clientX - scrollX);
        if (trackRef.current) trackRef.current.style.cursor = "grabbing";
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !trackRef.current) return;
        const newScrollX = e.clientX - startX;
        setScrollX(newScrollX);
        trackRef.current.style.transform = `translateX(${newScrollX}px)`;
    };

    const onMouseUp = () => {
        setIsDragging(false);
        if (trackRef.current) trackRef.current.style.cursor = "grab";
    };

    const onTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX - scrollX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !trackRef.current) return;
        const newScrollX = e.touches[0].clientX - startX;
        setScrollX(newScrollX);
        trackRef.current.style.transform = `translateX(${newScrollX}px)`;
    };

    const onTouchEnd = () => {
        setIsDragging(false);
    };

    return (
        <div className={styles.imageFlow}>
            <div className={styles.carouselRow}>
                <div
                    className={styles.carouselTrack}
                    ref={trackRef}
                    onMouseDown={onMouseDown}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onMouseLeave={onMouseUp}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {images.concat(images).map((src, index) => (
                        <div key={index} className={styles.teamImage}>
                            <Image
                                src={src}
                                alt={`carousel-${index}`}
                                width={350} 
                                height={420} 
                                className={styles.carouselImg}
                                priority={index < 2}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
