"use client";

import { useEffect } from "react";
import Social from "../header/social/social";
import styles from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
    useEffect(() => {
        const buttons = document.querySelectorAll(`.${styles.magneticBtn}`);

        buttons.forEach((btn) => {
            const el = btn as HTMLElement; // 👈 cast to HTMLElement

            const handleMove = (e: MouseEvent) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            };

            const reset = () => {
                el.style.transform = "translate(0px, 0px)";
            };

            el.addEventListener("mousemove", handleMove as EventListener);
            el.addEventListener("mouseleave", reset as EventListener);

            return () => {
                el.removeEventListener("mousemove", handleMove as EventListener);
                el.removeEventListener("mouseleave", reset as EventListener);
            };
        });
    }, []);

    return (
        <>
            {/* Desktop Footer */}
            <footer className={`${styles.footer} ${styles.footerDesktop}`}>
                <div className={styles.footerBody}>
                    <h2 className={styles.footerTitle}>Elevating your Identity</h2>

                    {/* Top Section */}
                    <div className={styles.footerTop}>
                        <div className={styles.leftColumn}>
                            <div className={styles.contactInfo}>
                                <a className={`${styles.pill} ${styles.magneticBtn}`} href="mailto:info@parasya.in">
                                    Info@parasya.in
                                </a>
                                <a className={`${styles.pill} ${styles.magneticBtn}`} href="tel:+919995498218">
                                    +91 99954 98218
                                </a>
                            </div>
                        </div>

                        <div className={styles.rightColumn}>
                            <div className={styles.subscribeForm}>
                                <div className={styles.subscribeWrapper}>
                                    <input type="email" placeholder="Your email address" />
                                    <button>Subscribe to newsletter</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className={styles.footerDivider}>
                        <div className={styles.getInTouchWrapper}>
                            <Link href="/contacts" className={styles.getInTouch}>
                                Get In Touch
                            </Link>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className={styles.footerBottom}>
                        <div className={styles.footerSocial}>
                            <Social />
                        </div>

                        <div className={styles.footerLinks}>
                            <Link href="/careers">Careers</Link>
                            <Link href="/services">Services</Link>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Mobile Footer */}
            <footer className={`${styles.footer} ${styles.footerMobile}`}>
                <div className={styles.footerBody}>
                    <h2 className={styles.footerTitle}>Elevating your Identity</h2>

                    <div className={styles.contactInfo}>
                        <a className={styles.pill} href="mailto:info@parasya.in">Info@parasya.in</a>
                        <a className={styles.pill} href="tel:+919995498218">+91 99954 98218</a>
                    </div>

                    <div className={styles.subscribeForm}>
                        <div className={styles.subscribeWrapper}>
                            <input type="email" placeholder="Your email address" />
                            <button>Subscribe</button>
                        </div>
                    </div>

                    <div className={styles.getInTouchWrapper}>
                        <Link href="/contacts" className={styles.getInTouch}>
                            Get In Touch
                        </Link>
                    </div>

                    <div className={styles.footerDivider}></div>

                    <div className={`${styles.footerLinks} mb-4`}>
                        <Link href="/careers">Careers</Link>
                        <Link href="/services">Services</Link>
                    </div>

                    <div className={styles.footerSocial}>
                        <Social />
                    </div>
                </div>
            </footer>
        </>
    );
}
