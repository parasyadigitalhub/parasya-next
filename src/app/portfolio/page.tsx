"use client";
import { useState } from "react";
import styles from "./portfolio.module.css";
import BrandingPortfolio from "./branding/BrandingPortfolio";
import MobilePortfolio from "./mobile/MobilePortfolio";
import WebPortfolio from "./web/WebPortfolio";

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState<"branding" | "mobile" | "web">("branding");

    return (
        <div className={styles.portfolioSection}>
            <div className={styles.heading}>
                <h1>
                    Our <span className={styles.textDanger}>Portfolio</span>
                </h1>
                <p>Discover our latest work and success stories</p>
            </div>

            <ul className={styles.customNavTabs}>
                <li>
                    <button
                        className={`${styles.navLinkCustom} ${activeTab === "branding" ? styles.active : ""}`}
                        onClick={() => setActiveTab("branding")}
                    >
                        Branding
                    </button>
                </li>
                <li>
                    <button
                        className={`${styles.navLinkCustom} ${activeTab === "mobile" ? styles.active : ""}`}
                        onClick={() => setActiveTab("mobile")}
                    >
                        Mobile Apps
                    </button>
                </li>
                <li>
                    <button
                        className={`${styles.navLinkCustom} ${activeTab === "web" ? styles.active : ""}`}
                        onClick={() => setActiveTab("web")}
                    >
                        Web Solutions
                    </button>
                </li>
            </ul>

            <div className={styles.tabFade}>
                {activeTab === "branding" && <BrandingPortfolio />}
                {activeTab === "mobile" && <MobilePortfolio />}
                {activeTab === "web" && <WebPortfolio />}
            </div>
        </div>
    );
}
