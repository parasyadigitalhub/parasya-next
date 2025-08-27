"use client";

import styles from "./partner.module.css";

export default function Partner() {
    return (
        <div className={styles.partner}>
            <div className={styles.text}>
                <div className={styles.heading}>
                    <h3>
                        Why you should partner with <br />
                        <span className={styles.red}>Parasya</span>
                    </h3>
                </div>
                <div className={styles.content}>
                    <p>
                        At Parasya, we understand that every business is unique. Our
                        tailored solutions encompass a wide spectrum of services, from
                        strategic planning and financial management to cutting-edge
                        technology implementation. We believe that a holistic approach to
                        business is key to sustained success, which is why our team of
                        experts collaborates closely with you to identify opportunities,
                        mitigate risks, and create a roadmap to achieve your goals.
                    </p>
                </div>
            </div>

            <div className={styles.list}>
                <h4>Industries We Serve</h4>
                <div className={styles.items}>
                    <p>Technology & Software</p>
                    <p>Education</p>
                    <p>Finance & Banking</p>
                    <p>Healthcare</p>
                    <p>Retail & E-Commerce</p>
                </div>
            </div>
        </div>
    );
}
