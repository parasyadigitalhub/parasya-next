"use client";
import { useState } from "react";
import styles from "./journey.module.css";
import { BsArrowsAngleExpand } from "react-icons/bs";

export default function Journey() {
    const [selectedYear, setSelectedYear] = useState("2023");
    const [showFull2023, setShowFull2023] = useState(false);
    const [showFull2024, setShowFull2024] = useState(false);

    return (
        <div className={styles.journey}>
            <h1>Parasya Journey</h1>
            <div className={styles.timeline}>
                <div className={styles.timelineYears}>
                    <p>2023</p>
                    <p>2024</p>
                </div>

                <div className={styles.timelineLine}>
                    <button
                        className={`${styles.yearBtn} ${selectedYear === "2023" ? styles.active : ""}`}
                        onClick={() => setSelectedYear("2023")}
                    ></button>
                    <div className={styles.lineBar}></div>
                    <button
                        className={`${styles.yearBtn} ${selectedYear === "2024" ? styles.active : ""}`}
                        onClick={() => setSelectedYear("2024")}
                    ></button>
                </div>

                <div className={styles.timelineImages}>
                    {/* 2023 */}
                    <div
                        className={`${styles.imageContainer} ${selectedYear === "2023" ? styles.active : ""
                            }`}
                        style={{ backgroundImage: "url('/timeline/2023.webp')" }}
                    >
                        <div
                            className={`${styles.infoBoard} ${showFull2023 ? styles.expanded : ""
                                }`}
                        >
                            <button
                                className={styles.toggleBtn}
                                onClick={() => setShowFull2023(!showFull2023)}
                            >
                                <BsArrowsAngleExpand />
                            </button>
                            <h3>A Humble Beginning</h3>
                            {showFull2023 && (
                                <p>
                                    In 2023, Parasya started with some passionate individuals.
                                    Despite their limited resources, their shared vision and strong
                                    determination helped them establish what would become a
                                    significant force in the industry. Their commitment to
                                    innovation pushed boundaries and set the stage for a
                                    remarkable future.
                                </p>
                            )}
                        </div>
                    </div>

                    {/* 2024 */}
                    <div
                        className={`${styles.imageContainer} ${selectedYear === "2024" ? styles.active : ""
                            }`}
                        style={{ backgroundImage: "url('/timeline/2024.webp')" }}
                    >
                        <div
                            className={`${styles.infoBoard} ${showFull2024 ? styles.expanded : ""
                                }`}
                        >
                            <button
                                className={styles.toggleBtn}
                                onClick={() => setShowFull2024(!showFull2024)}
                            >
                                <BsArrowsAngleExpand />
                            </button>
                            <h3>A Year of Transformation and Global Reach</h3>
                            {showFull2024 && (
                                <p>
                                    In 2024, Parasya truly showed its dedication to excellence.
                                    They successfully finished over 50 projects both in India and
                                    internationally. This big achievement highlights their ability
                                    to deliver outstanding results on a large scale. It also
                                    reflects the strong trust and confidence of clients across
                                    industries. The team's steady focus on quality and innovation
                                    continued to make them stand out in a competitive market.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
