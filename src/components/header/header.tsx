"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Social from "./social/social";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <header className={styles.appHeader}>
                <span
                    className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ""}`}
                    onClick={toggleMenu}
                >
                    <span className={`${styles.bar} ${styles.top}`}></span>
                    <span className={`${styles.bar} ${styles.middle}`}></span>
                    <span className={`${styles.bar} ${styles.bottom}`}></span>
                </span>
            </header>

            <div className={`${styles.sideMenu} ${isMenuOpen ? styles.open : ""}`}>
                <ul>
                    <li onClick={closeMenu}><Link href="/home">Home</Link></li>
                    <li onClick={closeMenu}><Link href="/about">About</Link></li>
                    <li onClick={closeMenu}><Link href="/services">Services</Link></li>
                    <li onClick={closeMenu}><Link href="/careers">Careers</Link></li>
                    <li onClick={closeMenu}><Link href="/contacts">Contact</Link></li>
                    <li onClick={closeMenu}><Link href="/blog">Blog</Link></li>
                    <li onClick={closeMenu}><Link href="/portfolio">Portfolio</Link></li>
                </ul>

                <Social/>
            </div>
        </>
    );
}
