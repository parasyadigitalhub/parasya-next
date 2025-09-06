"use client";
import { useState } from "react";
import styles from "./branding.module.css";
import { companies } from "../../data/branding";

type Branding = typeof companies[0];

export default function BrandingPortfolio() {
    const [selectedBranding, setSelectedBranding] = useState<Branding | null>(null);

    return (
        <>
            <div className={styles.row}>
                {companies.map((branding) => (
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

            {selectedBranding && (
                <div className={styles.modalOverlay} onClick={() => setSelectedBranding(null)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h5>{selectedBranding.name}</h5>
                            <button onClick={() => setSelectedBranding(null)}>✖</button>
                        </div>
                        <div className={styles.modalBody}>
                            <div className={styles.brandingRow}>
                                <div className={styles.brandingCol}>
                                    <img src={selectedBranding.image} alt="logo" />
                                </div>
                                <div className={styles.brandingCol}>
                                    <section>
                                        <h4>Branding Overview</h4>
                                        <p>{selectedBranding.brandingOverview}</p>
                                    </section>
                                    <section>
                                        <h4>Problem Statement</h4>
                                        <p>{selectedBranding.problemStatement}</p>
                                    </section>
                                    <section>
                                        <h4>Location</h4>
                                        <p>{selectedBranding.location}</p>
                                    </section>
                                </div>
                            </div>

                            {selectedBranding.logicPoints?.length > 0 && (
                                <section>
                                    <h4>Logic Points</h4>
                                    <div className={styles.logicGridTwo}>
                                        {selectedBranding.logicPoints.map((logic, i) => (
                                            <div key={i} className={styles.logicCard}>
                                                <img src={logic.image} alt={logic.title} />
                                                <div>
                                                    <h6># {logic.title}</h6>
                                                    <p>{logic.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {selectedBranding.brandingImages?.length > 0 && (
                                <section>
                                    <h4>Branding Images</h4>
                                    <div className={styles.galleryGridThree}>
                                        {selectedBranding.brandingImages.map((img, i) => (
                                            <img key={i} src={img} alt={`Branding image ${i}`} />
                                        ))}
                                    </div>
                                </section>
                            )}

                            {selectedBranding.testimonials?.length > 0 && (
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
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
