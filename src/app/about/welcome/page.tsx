"use client";

import styles from "./welcome.module.css";

export default function Welcome() {
    return (
        <section>
            <div className={styles.img}>
                <img src="/parasya/team.webp" alt="Parasya Team" />
            </div>

            <div className={styles.headings}>
                <h1>
                    Welcome to <span className={styles.red}>Parasya</span>
                </h1>
                <p>
                    where we are dedicated to "Elevating Your Identity." Our tagline reflects our mission to
                    enhance and amplify your brand's presence in the digital world. By employing innovative
                    strategies and leveraging the latest technologies, we aim to refine your online identity
                    and elevate your business to new heights.
                    <br />
                    <br />
                    At Parasya, we specialize in delivering cutting-edge digital marketing solutions tailored
                    to meet the unique needs of each client. Our team of experts harnesses the power of
                    innovative strategies and advanced technology to drive growth, enhance brand visibility,
                    and maximize online presence. Whether you're looking to boost your social media
                    engagement, optimize your search engine rankings, or create compelling content, Parasya
                    is committed to helping your business succeed in the digital landscape. With a focus on
                    results and customer satisfaction, we are your trusted partner in navigating the dynamic
                    world of digital marketing.
                </p>
            </div>
        </section>
    );
}
