import styles from "./mission.module.css";
import { BsCheck2, BsBookmark, BsEye } from "react-icons/bs";

export default function HomeMission() {
    return (
        <section className={styles.mission}>
            <div className={styles.text}>
                <div className={styles.heading}>
                    <h3>
                        Our <span className={styles.highlight}>Mission</span> &{" "}
                        <span className={styles.highlight}>Vision</span>
                    </h3>
                </div>
                <div className={styles.content}>
                    <p>Empowering businesses through innovation and excellence</p>
                </div>
            </div>

            <div className={styles.cards}>
                {/* Mission Card */}
                <div className={styles.card}>
                    <h5 className={styles.cardTitle}>
                        <BsBookmark />
                    </h5>
                    <h6 className={styles.cardSubtitle}>Our Mission</h6>
                    <p className={styles.cardText}>
                        To deliver innovative business solutions that empower organizations
                        to achieve their full potential through digital transformation,
                        strategic consulting, and comprehensive support services
                    </p>
                    <p>
                        <BsCheck2 /> Drive business transformation
                    </p>
                    <p>
                        <BsCheck2 /> Foster innovation and growth
                    </p>
                    <p>
                        <BsCheck2 /> Provide exceptional client service
                    </p>
                </div>

                {/* Vision Card */}
                <div className={styles.card}>
                    <h5 className={styles.cardTitle}>
                        <BsEye />
                    </h5>
                    <h6 className={styles.cardSubtitle}>Our Vision</h6>
                    <p className={styles.cardText}>
                        To be the leading force in business transformation, recognized
                        globally for our innovative solutions, excellence in service
                        delivery, and commitment to client success.
                    </p>
                    <p>
                        <BsCheck2 /> Global industry leadership
                    </p>
                    <p>
                        <BsCheck2 /> Sustainable business practices
                    </p>
                    <p>
                        <BsCheck2 /> Continuous innovation
                    </p>
                </div>
            </div>
        </section>
    );
}
