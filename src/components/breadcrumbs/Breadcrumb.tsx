"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumb.module.css";
import Image from "next/image";

export default function Breadcrumb() {
    const pathname = usePathname();

    if (pathname === "/" || pathname === "/home") {
        return null;
    }

    const segments = pathname.split("/").filter((seg) => seg);
    const currentPage = segments[segments.length - 1] || "";

    const label =
        currentPage.charAt(0).toUpperCase() +
        currentPage.slice(1).replace(/-/g, " ");

    return (
        <div className={styles.logoBreadcrumbContainer}>
            <Image
                src="/parasya/logo-white.webp"
                alt="Logo"
                width={140}
                height={70}
                className={styles.logoImg}
                priority 
            />

            <nav aria-label="breadcrumb" className={styles.breadcrumbNav}>
                <ol className={styles.breadcrumb}>
                    <li className={styles.breadcrumbItem}>
                        <Link href="/" className={styles.breadcrumbLink}>
                            Home
                        </Link>
                    </li>
                    <li className={`${styles.breadcrumbItem} ${styles.active}`}>
                        {label}
                    </li>
                </ol>
            </nav>
        </div>
    );
}
