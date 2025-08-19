import styles from "./social.module.css";
import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

export default function Social() {
    return (
        <>
            <div className={styles.social}>
                <a href="https://x.com/parasya_in?s=21" target="_blank" aria-label="Visit us on Twitter">
                    <BsTwitterX />
                </a>
                <a href="https://www.instagram.com/parasya.in?igsh=Y3ZkNWUzNGYxM29q" target="_blank" aria-label="Visit us on Instagram">
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/company/parasyatechnologies/" target="_blank" aria-label="Visit us on LinkedIn">
                    <BsLinkedin />
                </a>
                <a href="https://www.facebook.com/share/14iEd6PwQV/?mibextid=wwXIfr" target="_blank" aria-label="Visit us on Facebook">
                    <BsFacebook />
                </a>
                <a href="https://wa.me/919995498218" target="_blank" aria-label="Chat with us on WhatsApp">
                    <BsWhatsapp />
                </a>
                <a href="https://youtube.com/@parasya.?si=cpElaynFajc3RCCG" target="_blank" aria-label="Visit us on YouTube">
                    <BsYoutube />
                </a>
            </div>
        </>
    )
}