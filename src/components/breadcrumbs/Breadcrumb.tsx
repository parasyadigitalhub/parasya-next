"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Breadcrumb.module.css";

export default function Breadcrumb() {
    const pathname = usePathname();

    if (pathname === "/" || pathname === "/home") {
        return null; // hide breadcrumb on homepage
    }

    // Get current page (last segment)
    const segments = pathname.split("/").filter((seg) => seg);
    const currentPage = segments[segments.length - 1] || "";

    // Format label (capitalize + replace dashes)
    const label =
        currentPage.charAt(0).toUpperCase() +
        currentPage.slice(1).replace(/-/g, " ");

    return (
        <div className={styles.logoBreadcrumbContainer}>
            <img
                src="/parasya/logo-white.webp"
                alt="Logo"
                className={styles.logoImg}
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
