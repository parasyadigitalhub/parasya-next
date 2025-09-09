"use client";

import styles from "./logogrid.module.css";
import Image from "next/image";

export default function LogoGrid() {
    const logoGrid = [
        { src: "/logogrid/lg1.webp", alt: "Burberry" },
        { src: "/logogrid/lg2.webp", alt: "Tesco" },
        { src: "/logogrid/lg12.webp", alt: "The Telegraph" },
        { src: "/logogrid/lg4.webp", alt: "Burberry" },
        { src: "/logogrid/lg5.webp", alt: "Tesco" },
        { src: "/logogrid/lg6.webp", alt: "Burberry" },
        { src: "/logogrid/lg7.webp", alt: "Tesco" },
        { src: "/logogrid/lg8.webp", alt: "The Telegraph" },
        { src: "/logogrid/lg9.webp", alt: "Burberry" },
        { src: "/logogrid/lg10.webp", alt: "Tesco" },
        { src: "/logogrid/lg11.webp", alt: "Burberry" },
        { src: "/logogrid/lg3.webp", alt: "Tesco" },
        { src: "/logogrid/lg13.webp", alt: "Tesco" },
        { src: "/logogrid/lg14.webp", alt: "Burberry" },
        { src: "/logogrid/lg15.webp", alt: "Burberry" },
        { src: "/logogrid/lg16.webp", alt: "Burberry" },
    ];

    return (
        <div className={styles.logogrid}>
            <div className={styles.text}>
                <div className={styles.heading}>
                    <h3>
                        We Cherish Our <span className={styles.red}>Customers</span>
                    </h3>
                </div>
            </div>

            <div className={styles.grid}>
                {logoGrid.map((logo, idx) => (
                    <div className={styles.image} key={idx}>
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={200}    
                            height={100}   
                            className={styles.logoImg}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
