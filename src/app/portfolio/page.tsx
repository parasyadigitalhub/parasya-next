"use client";

import { useState } from "react";
import styles from "./portfolio.module.css";
import { companies } from "../data/branding";
import { mobileApps } from "../data/mobileapps";
import { webApps } from "../data/webapps";

type Branding = typeof companies[0];
type AppItem = typeof mobileApps[0];

export default function Portfolio() {
    const [activeTab, setActiveTab] = useState<"branding" | "mobile" | "web">("branding");
    const [activeCategory, setActiveCategory] = useState<string>("All");

    const [selectedBranding, setSelectedBranding] = useState<Branding | null>(null);
    const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);

    // Group Apps
    const groupApps = (list: AppItem[]) => {
        const grouped: { [key: string]: AppItem[] } = {};
        list.forEach(app => {
            if (!grouped[app.description]) grouped[app.description] = [];
            grouped[app.description].push(app);
        });
        grouped["All"] = list;
        return grouped;
    };

    const groupedMobileApps = groupApps(mobileApps);
    const groupedWebApps = groupApps(webApps);

    // Helpers
    const getCategories = (grouped: { [key: string]: AppItem[] }) => {
        const keys = Object.keys(grouped);
        return ["All", ...keys.filter(k => k !== "All")];
    };

    return (
        <div className={styles.portfolioSection}>
            {/* Heading */}
            <div className={styles.heading}>
                <h1>
                    Our <span className={styles.textDanger}>Portfolio</span>
                </h1>
                <p>Discover our latest work and success stories</p>
            </div>

            {/* Tabs */}
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
                        onClick={() => {
                            setActiveTab("mobile");
                            setActiveCategory("All");
                        }}
                    >
                        Mobile Apps
                    </button>
                </li>
                <li>
                    <button
                        className={`${styles.navLinkCustom} ${activeTab === "web" ? styles.active : ""}`}
                        onClick={() => {
                            setActiveTab("web");
                            setActiveCategory("All");
                        }}
                    >
                        Web Solutions
                    </button>
                </li>
            </ul>

            {/* Content */}
            <div className={styles.tabFade}>
                {activeTab === "branding" && (
                    <div className={styles.row}>
                        {companies.map((branding: any) => (
                            <div key={branding.id} className={styles.col}>
                                <div className={styles.card}>
                                    <img src={branding.image} alt={branding.name} className={styles.cardImgTop} />
                                    <div className={styles.cardBody}>
                                        <h5>{branding.name}</h5>
                                        <p>{branding.description}</p>
                                    </div>
                                    <div className={styles.cardFooter}>
                                        <button onClick={() => setSelectedBranding(branding)}>Branding</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "mobile" && (
                    <div className={styles.flexContainer}>
                        {/* Left: Categories */}
                        <div className={styles.navPills}>
                            {getCategories(groupedMobileApps).map((cat) => (
                                <button
                                    key={cat}
                                    className={`${styles.pill} ${activeCategory === cat ? styles.activePill : ""}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        {/* Right: Apps */}
                        <div className={styles.flexGrow}>
                            <div className={styles.row}>
                                {groupedMobileApps[activeCategory].map((app) => (
                                    <div key={app.id} className={styles.col}>
                                        <div className={styles.card}>
                                            <img src={app.image} alt={app.name} className={styles.cardImgTop} />
                                            <div className={styles.cardBody}>
                                                <h5>{app.name}</h5>
                                                <p>{app.appOverview}</p>
                                            </div>
                                            <div className={styles.cardFooter}>
                                                <button onClick={() => setSelectedApp(app)}>Details</button>
                                                {app.appUrl && <a href={app.appUrl} target="_blank">Visit</a>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "web" && (
                    <div className={styles.flexContainer}>
                        <div className={styles.navPills}>
                            {getCategories(groupedWebApps).map((cat) => (
                                <button
                                    key={cat}
                                    className={`${styles.pill} ${activeCategory === cat ? styles.activePill : ""}`}
                                    onClick={() => setActiveCategory(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className={styles.flexGrow}>
                            <div className={styles.row}>
                                {groupedWebApps[activeCategory].map((app) => (
                                    <div key={app.id} className={styles.col}>
                                        <div className={styles.card}>
                                            <img src={app.image} alt={app.name} className={styles.cardImgTop} />
                                            <div className={styles.cardBody}>
                                                <h5>{app.name}</h5>
                                                <p>{app.appOverview}</p>
                                            </div>
                                            <div className={styles.cardFooter}>
                                                <button onClick={() => setSelectedApp(app)}>Details</button>
                                                {app.appUrl && <a href={app.appUrl} target="_blank">Visit</a>}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Branding Modal */}
            {selectedBranding && (
                <div className={styles.modalOverlay} onClick={() => setSelectedBranding(null)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h5>{selectedBranding.name}</h5>
                            <button onClick={() => setSelectedBranding(null)}>✖</button>
                        </div>
                        <div className={styles.modalBody}>
                            <img src={selectedBranding?.image} alt="Logo"/>
                            {/* Overview */}
                            <section>
                                <h4>Overview</h4>
                                <p>{selectedBranding.brandingOverview}</p>
                            </section>

                            {/* Problem Statement */}
                            <section>
                                <h4>Problem Statement</h4>
                                <p>{selectedBranding.problemStatement}</p>
                            </section>

                            {/* Location */}
                            <section>
                                <h4>Location</h4>
                                <p>{selectedBranding.location}</p>
                            </section>

                            {/* Logic Points */}
                            <section>
                                <h4>Logic Behind the Brand</h4>
                                <div className={styles.logicGrid}>
                                    {selectedBranding.logicPoints.map((point, i) => (
                                        <div key={i} className={styles.logicCard}>
                                            <img src={point.image} alt={point.title} />
                                            <h5>{point.title}</h5>
                                            <p>{point.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Image Gallery */}
                            <section>
                                <h4>Branding Images</h4>
                                <div className={styles.galleryGrid}>
                                    {selectedBranding.brandingImages.map((img, i) => (
                                        <img key={i} src={img} alt={`Branding image ${i}`} />
                                    ))}
                                </div>
                            </section>

                            {/* Testimonials */}
                            <section>
                                <h4>Testimonials</h4>
                                <div className={styles.testimonials}>
                                    {selectedBranding.testimonials.map((t, i) => (
                                        <blockquote key={i}>
                                            “{t.text}”
                                            <footer>- {t.author}</footer>
                                        </blockquote>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            )}

            {/* App Modal */}
            {selectedApp && (
                <div className={styles.modalOverlay} onClick={() => setSelectedApp(null)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h5>{selectedApp.name}</h5>
                            <button onClick={() => setSelectedApp(null)}>✖</button>
                        </div>
                        <div className={styles.modalBody}>
                            <img src={selectedApp?.image} alt="logo" />
                            {/* Overview */}
                            <section>
                                <h4>App Overview</h4>
                                <p>{selectedApp.appOverview}</p>
                            </section>

                            {/* Problem / App Statement */}
                            <section>
                                <h4>Details</h4>
                                <p>{selectedApp.appStatement}</p>
                            </section>

                            {/* Location */}
                            <section>
                                <h4>Location</h4>
                                <p>{selectedApp.location}</p>
                            </section>

                            {/* Testimonials */}
                            {selectedApp.testimonials?.length > 0 && (
                                <section>
                                    <h4>Testimonials</h4>
                                    <div className={styles.testimonials}>
                                        {selectedApp.testimonials.map((t, i) => (
                                            <blockquote key={i}>
                                                “{t.text}”
                                                <footer>- {t.author}</footer>
                                            </blockquote>
                                        ))}
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
