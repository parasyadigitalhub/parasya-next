"use client";

import styles from "./landing.module.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

export default function Landing() {
    return (
        <section className={styles.container}>
            <div className={styles.name}>
                <h1>PARASYA</h1>
            </div>

            <div className={styles.head}>
                <h3>ELEVATING YOUR IDENTITY</h3>
            </div>

            <div className={styles.para}>
                <p>
                    Elevate your business with expert digital marketing, innovative branding,
                    and custom Web & App development solutions from the best digital marketing
                    agency in Calicut, Kerala — driving growth across India, UAE, KSA, USA, Qatar,
                    Germany, and Canada.
                </p>
            </div>

            <div className={styles.buttons}>
                <button>
                    Contact Us <IoCallOutline />
                </button>
                <button>
                    Our Services <FaArrowRightLong />
                </button>
            </div>
        </section>
    );
}
