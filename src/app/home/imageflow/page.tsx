"use client";

import styles from "./imageflow.module.css";

const secondCarouselImagesTop: string[] = [
    "/home/secondcarousel/p1.webp",
    "/home/secondcarousel/p2.webp",
    "/home/secondcarousel/p3.webp",
    "/home/secondcarousel/p4.webp",
    "/home/secondcarousel/p5.webp",
    "/home/secondcarousel/p6.webp",
    "/home/secondcarousel/p7.webp",
    "/home/secondcarousel/p8.webp",
];

const secondCarouselImagesBottom: string[] = [
    "/home/secondcarousel/p9.webp",
    "/home/secondcarousel/p10.webp",
    "/home/secondcarousel/p11.webp",
    "/home/secondcarousel/p12.webp",
    "/home/secondcarousel/p13.webp",
    "/home/secondcarousel/p14.webp",
    "/home/secondcarousel/p15.webp",
    "/home/secondcarousel/p16.webp",
    "/home/secondcarousel/p17.webp",
];

export default function ImageFlow() {
    return (
        <div className={styles.imageFlow}>
            {/* Top Row */}
            <div className={`${styles.carouselRow} ${styles.top}`}>
                <div className={styles.carouselTrack}>
                    {[...secondCarouselImagesTop, ...secondCarouselImagesTop].map(
                        (img, idx) => (
                            <img key={`top-${idx}`} src={img} alt={`carousel-top-${idx}`} loading="lazy" />
                        )
                    )}
                </div>
            </div>

            {/* Bottom Row */}
            <div className={`${styles.carouselRow} ${styles.bottom}`}>
                <div className={`${styles.carouselTrack} ${styles.reverse}`}>
                    {[...secondCarouselImagesBottom, ...secondCarouselImagesBottom].map(
                        (img, idx) => (
                            <img
                                key={`bottom-${idx}`}
                                src={img}
                                alt={`carousel-bottom-${idx}`}
                                loading="lazy"
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
}
