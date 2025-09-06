"use client";
import { useState } from "react";
import styles from "./web.module.css";
import { webApps } from "../../data/webapps";

type AppItem = typeof webApps[0];

export default function MobilePortfolio() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedApp, setSelectedApp] = useState<AppItem | null>(null);

    const groupApps = (list: AppItem[]) => {
        const grouped: { [key: string]: AppItem[] } = {};
        list.forEach(app => {
            if (!grouped[app.description]) grouped[app.description] = [];
            grouped[app.description].push(app);
        });
        grouped["All"] = list;
        return grouped;
    };

    const groupedWebApps = groupApps(webApps);
    const categories = ["All", ...Object.keys(groupedWebApps).filter(c => c !== "All")];

    return (
        <div className={styles.flexContainer}>
            <div className={styles.navPills}>
                {categories.map((cat) => (
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

            {selectedApp && (
                <div className={styles.modalOverlay} onClick={() => setSelectedApp(null)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h5>{selectedApp.name}</h5>
                            <button onClick={() => setSelectedApp(null)}>✖</button>
                        </div>
                        <div className={styles.modalBody}>
                            <img src={selectedApp.image} alt="logo" />
                            <section>
                                <h4>App Overview</h4>
                                <p>{selectedApp.appOverview}</p>
                            </section>
                            <section>
                                <h4>Details</h4>
                                <p>{selectedApp.appStatement}</p>
                            </section>
                            <section>
                                <h4>Location</h4>
                                <p>{selectedApp.location}</p>
                            </section>
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
