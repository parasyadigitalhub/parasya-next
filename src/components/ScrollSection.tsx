"use client";
import { motion, type TargetAndTransition } from "motion/react";

type ScrollSectionProps = {
    children: React.ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "fade" | "zoom";
};

export default function ScrollSection({
    children,
    delay = 0,
    direction = "up",
}: ScrollSectionProps) {
    let initial: TargetAndTransition = { opacity: 0 };

    switch (direction) {
        case "up":
            initial = { opacity: 0, y: 50 };
            break;
        case "down":
            initial = { opacity: 0, y: -50 };
            break;
        case "left":
            initial = { opacity: 0, x: -100 };
            break;
        case "right":
            initial = { opacity: 0, x: 100 };
            break;
        case "zoom":
            initial = { opacity: 0, scale: 0.9 };
            break;
        case "fade":
            initial = { opacity: 0 };
            break;
    }

    return (
        <motion.div
            initial={initial}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}
